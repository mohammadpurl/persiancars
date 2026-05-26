"use client";

import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



type TimeSlot = { start: string; end: string; label: string };

function generateWeek(): Date[] {
  const days: Date[] = [];
  const today = new Date();
  // normalize to local midnight
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push(d);
  }
  return days;
}

function generateSlots(): TimeSlot[] {
  return [
    { start: "09:00", end: "11:00", label: "۹ تا ۱۱" },
    { start: "11:00", end: "13:00", label: "۱۱ تا ۱۳" },
    { start: "13:00", end: "15:00", label: "۱۳ تا ۱۵" },
    { start: "15:00", end: "17:00", label: "۱۵ تا ۱۷" },
    { start: "17:00", end: "19:00", label: "۱۷ تا ۱۹" },
  ];
}

function formatPersianDate(d: Date): string {
  return new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  }).format(d);
}

export default function BookingPage() {
  const days = useMemo(generateWeek, []);
  const slots = useMemo(generateSlots, []);

  const [selectedDayIndex, setSelectedDayIndex] = useState<number | null>(0);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedDayLabel = selectedDayIndex !== null ? formatPersianDate(days[selectedDayIndex]) : "";
  const selectedSlotLabel = selectedSlotIndex !== null ? slots[selectedSlotIndex].label : "";

  const bookingSchema = z.object({
    phone: z
      .string()
      .trim()
      .min(8, "شماره تماس نامعتبر است")
      .regex(/^\+?\d[\d\s\-()]{7,}$/, "شماره تماس نامعتبر است"),
    notes: z.string().trim().optional(),
  });

  type BookingForm = z.infer<typeof bookingSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { phone: "", notes: "" },
  });

  const canSubmit = selectedDayIndex !== null && selectedSlotIndex !== null && !isSubmitting;

  async function onSubmit(values: BookingForm) {
    if (selectedDayIndex === null || selectedSlotIndex === null) return;
    const payload = {
      day: selectedDayLabel,
      slot: selectedSlotLabel,
      phone: values.phone.trim(),
      notes: values.notes?.trim() || undefined,
    };
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const res = await fetch(`${apiUrl}/bookings`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
    } catch {
      alert("خطا در ثبت درخواست. لطفا دوباره تلاش کنید.");
    }
  }

  return (
    <section className="py-16" id="booking">
      <div className="container  px-4 py-16">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-right">
            <h2 className="text-3xl font-bold mb-4">
                <span className="text-primary">رزرو </span>آنلاین
            </h2>
          <p className="text-muted-foreground max-w-2xl ">
            برای یک هفته آینده، از ساعت ۹ صبح تا ۱۹، بازه‌های دو ساعته در دسترس است.
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>انتخاب روز و ساعت</CardTitle>
              <CardDescription>روز مورد نظر را انتخاب کرده و یکی از بازه‌های دو ساعته را برگزینید.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="mb-2 text-sm text-muted-foreground">روزهای هفته آینده</div>
                <div className="flex flex-wrap gap-2">
                  {days.map((d, idx) => (
                    <Button
                      type="button"
                      key={idx}
                      variant={selectedDayIndex === idx ? "default" : "secondary"}
                      onClick={() => {
                        setSelectedDayIndex(idx);
                        setSelectedSlotIndex(null);
                      }}
                    >
                      {formatPersianDate(d)}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm text-muted-foreground">بازه‌های زمانی</div>
                <div className="flex flex-wrap gap-2">
                  {slots.map((s, idx) => (
                    <Button
                      type="button"
                      key={s.label}
                      disabled={selectedDayIndex === null}
                      variant={selectedSlotIndex === idx ? "default" : "outline"}
                      onClick={() => setSelectedSlotIndex(idx)}
                    >
                      {s.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>اطلاعات تماس و توضیحات</CardTitle>
              <CardDescription>برای هماهنگی تماس، شماره شما الزامی است.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="phone" className="block mb-1 text-sm text-muted-foreground">
                  شماره تماس
                </label>
                <Input id="phone" inputMode="tel" placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹" {...register("phone")} />
                {errors.phone && (
                  <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="notes" className="block mb-1 text-sm text-muted-foreground">
                  توضیح خرابی یا خدمت درخواستی
                </label>
                <Textarea id="notes" rows={5} placeholder="مختصر مشکل یا خدمت درخواستی" {...register("notes")} />
              </div>

              <Button type="submit" disabled={!canSubmit} className="w-full">
                ثبت درخواست رزرو
              </Button>

              {submitted && (
                <div className="text-sm rounded-md border p-3 bg-card/50">
                  درخواست شما برای {selectedDayLabel}، بازه {selectedSlotLabel} ثبت شد. به زودی برای قطعی شدن
                  تایم با شما تماس خواهیم گرفت.
                </div>
              )}
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
    </section>
  );
}



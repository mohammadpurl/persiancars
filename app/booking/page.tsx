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
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"idle" | "success" | "error">("idle");

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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
      const res = await fetch(`${apiUrl}/bookings`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatusType("success");
      setStatusMessage(
        `درخواست شما برای ${selectedDayLabel}، بازه ${selectedSlotLabel} ثبت شد. به‌زودی برای هماهنگی نهایی با شما تماس می‌گیریم.`
      );
      reset();
    } catch {
      setStatusType("error");
      setStatusMessage("خطا در ثبت درخواست. لطفا دوباره تلاش کنید یا با مجموعه تماس بگیرید.");
    }
  }

  return (
    <section className="py-16" id="booking">
      <div className="container-site py-16">
        <header className="mb-10 text-right">
          <h1 className="type-h1 mb-4 md:mb-5">
            <span className="text-primary">رزرو</span> آنلاین
          </h1>
          <p className="type-lead text-muted-foreground max-w-2xl">
            برای یک هفته آینده، از ساعت ۹ صبح تا ۱۹، بازه‌های دو ساعته در دسترس است. روز و زمان مناسب
            را انتخاب کنید تا درخواست شما برای هماهنگی نهایی ثبت شود.
          </p>
        </header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          aria-describedby="booking-status"
        >
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>انتخاب روز و ساعت</CardTitle>
              <CardDescription>روز مورد نظر را انتخاب کرده و یکی از بازه‌های دو ساعته را برگزینید.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <fieldset>
                <legend className="mb-2 text-sm font-medium text-muted-foreground">روزهای هفته آینده</legend>
                <div className="flex flex-wrap gap-2" role="group" aria-label="انتخاب روز">
                  {days.map((d, idx) => (
                    <Button
                      type="button"
                      key={idx}
                      variant={selectedDayIndex === idx ? "default" : "secondary"}
                      aria-pressed={selectedDayIndex === idx}
                      onClick={() => {
                        setSelectedDayIndex(idx);
                        setSelectedSlotIndex(null);
                        setStatusType("idle");
                        setStatusMessage("");
                      }}
                    >
                      {formatPersianDate(d)}
                    </Button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-2 text-sm font-medium text-muted-foreground">بازه‌های زمانی</legend>
                <div className="flex flex-wrap gap-2" role="group" aria-label="انتخاب ساعت">
                  {slots.map((s, idx) => (
                    <Button
                      type="button"
                      key={s.label}
                      disabled={selectedDayIndex === null}
                      variant={selectedSlotIndex === idx ? "default" : "outline"}
                      aria-pressed={selectedSlotIndex === idx}
                      onClick={() => {
                        setSelectedSlotIndex(idx);
                        setStatusType("idle");
                        setStatusMessage("");
                      }}
                    >
                      {s.label}
                    </Button>
                  ))}
                </div>
              </fieldset>

              <div className="rounded-xl border border-border/70 bg-card/40 p-4 text-sm">
                <p className="font-semibold mb-2">خلاصه انتخاب</p>
                <p className="text-muted-foreground">
                  روز انتخاب‌شده: {selectedDayLabel || "هنوز انتخاب نشده"}
                </p>
                <p className="text-muted-foreground">
                  ساعت انتخاب‌شده: {selectedSlotLabel || "هنوز انتخاب نشده"}
                </p>
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

              <div
                id="booking-status"
                aria-live="polite"
                aria-atomic="true"
                className={
                  statusType === "idle"
                    ? "sr-only"
                    : statusType === "error"
                      ? "text-sm rounded-md border border-destructive/40 p-3 bg-destructive/10 text-destructive"
                      : "text-sm rounded-md border border-border p-3 bg-card/50"
                }
              >
                {statusMessage}
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </section>
  );
}



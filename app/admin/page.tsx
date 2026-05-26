"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Booking = {
  id: number;
  day: string;
  slot: string;
  phone: string;
  notes: string | null;
  created_at: string;
};

async function getBookings(): Promise<Booking[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
    const response = await fetch(`${apiUrl}/bookings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // برای اطمینان از دریافت داده‌های جدید
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as Booking[];
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return [];
  }
}

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      const data = await getBookings();
      setBookings(data);
      setLoading(false);
    };

    fetchBookings();
  }, []);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">رزروها</h1>
          <Button 
            variant="outline"
            onClick={() => {
              // Handle logout - you might want to call a backend logout API
              window.location.href = '/admin/login';
            }}
          >
            خروج
          </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>لیست رزروهای ثبت شده</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">در حال بارگذاری...</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-right">
                      <th className="p-2">#</th>
                      <th className="p-2">روز</th>
                      <th className="p-2">بازه</th>
                      <th className="p-2">تلفن</th>
                      <th className="p-2">توضیحات</th>
                      <th className="p-2">تاریخ ثبت</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="p-4 text-center text-gray-500">
                          هیچ رزروی یافت نشد
                        </td>
                      </tr>
                    ) : (
                      bookings.map((b) => (
                        <tr key={b.id} className="border-t">
                          <td className="p-2">{b.id}</td>
                          <td className="p-2">{b.day}</td>
                          <td className="p-2">{b.slot}</td>
                          <td className="p-2 ltr">{b.phone}</td>
                          <td className="p-2">{b.notes ?? "-"}</td>
                          <td className="p-2">{b.created_at}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}



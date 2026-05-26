import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

import Link from "next/link";

const newsData = [
  {
    id: 1,
    title: "نکات مهم برای نگهداری از خودرو در تابستان",
    excerpt: "تابستان و گرمای هوا می‌تواند مشکلاتی برای خودروها ایجاد کند. با این نکات، خودروی خود را برای فصل گرم آماده کنید.",
    date: "۱۴۰۲/۰۳/۱۵",
    image: "/images/car-summer-care_1.jpg",
    slug: "summer-car-maintenance-tips",
  },
  {
    id: 2,
    title: "چرا تعویض به موقع روغن موتور اهمیت دارد؟",
    excerpt: "تعویض روغن موتور یکی از مهم‌ترین اقدامات نگهداری خودرو است. در این مقاله به اهمیت و زمان مناسب تعویض روغن می‌پردازیم.",
    date: "۱۴۰۲/۰۲/۲۰",
    image: "/images/oil-repair.jpg",
    slug: "importance-of-oil-change",
  },
  {
    id: 3,
    title: "آشنایی با سیستم ترمز ضد قفل و نحوه عملکرد آن",
    excerpt: "سیستم ترمز ضد قفل یکی از مهم‌ترین سیستم‌های ایمنی خودرو است. با نحوه عملکرد و مزایای آن آشنا شوید.",
    date: "۱۴۰۲/۰۱/۱۰",
    image: "/images/ABS.jpg",
    slug: "abs-braking-system",
  },
];

const LatestNews = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            آخرین <span className="text-primary">اخبار و مقالات</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            با جدیدترین اخبار و مقالات آموزشی ما در حوزه خودرو آشنا شوید
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <Card 
              key={news.id} 
              className="border-border hover:border-primary transition-all duration-300 bg-card/50 backdrop-blur-sm card-hover"
            >
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src={news.image} 
                  alt={news.title} 
                  width={300}
                  height={200}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{news.date}</span>
                </div>
                <CardTitle className="text-lg">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {news.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link 
                  href={`/news/${news.slug}`} 
                  className="text-primary hover:underline transition-colors"
                >
                  ادامه مطلب
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/news">مشاهده تمام مقالات</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;

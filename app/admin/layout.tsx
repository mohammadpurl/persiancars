import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "پنل مدیریت",
  description: "پنل مدیریت خودرو پرشین",
  path: "/admin",
  noIndex: true,
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

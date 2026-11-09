import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "杜喆 · 很高兴与你相识",
  description: "你好，我是杜喆。欢迎来到我的个人主页，联系电话 18909180063。",
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "杜喆 — 在轨道与镜头之间",
  description: "你好，我是杜喆，坐标陕西西安。学铁道检修，也剪辑和记录生活。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

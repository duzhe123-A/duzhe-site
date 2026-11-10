import type { Metadata } from "next";
import "./globals.css";

const title = "杜喆 — 在轨道与镜头之间";
const description = "你好，我是杜喆，坐标陕西西安。学铁道检修，也剪辑和记录生活。";
const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://duzhe-personal-studio.supplebeak6.chatgpt.site/",
);
const shareCover = new URL("share-cover.jpg", siteUrl);

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: "website",
    locale: "zh_CN",
    images: [{ url: shareCover, width: 1200, height: 630, alt: "杜喆，在轨道与镜头之间" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareCover],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

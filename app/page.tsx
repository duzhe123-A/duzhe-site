"use client";
import { useState } from "react";

const phone = "18909180063";
export default function Home() {
  const [message, setMessage] = useState("");
  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(phone);
      setMessage("电话号码已复制");
    } catch {
      setMessage("请长按或选中号码复制：18909180063");
    }
  }
  return (
    <main id="home">
      <a className="skip" href="#contact">跳转至联系方式</a>
      <header className="header wrap">
        <a href="#home" className="brand" aria-label="杜喆的主页"><span className="brand-mark">喆</span><span>杜喆<span className="brand-en">DU ZHE</span></span></a>
        <nav aria-label="主导航"><a href="#home">首页</a><a href="#contact">联系我 <span aria-hidden="true">↗</span></a></nav>
      </header>
      <section className="hero wrap" aria-labelledby="intro">
        <div className="intro">
          <p className="eyebrow"><span className="dot" /> 个人主页 <span className="divider">/</span> PERSONAL SPACE</p>
          <h1 id="intro">你好，<br />我是<span className="name">杜喆<span className="name-line" /></span>。</h1>
          <p className="welcome">很高兴在这里与你相遇。<br />从一次简单的问候，开始新的连接。</p>
          <a href="tel:18909180063" className="primary">打个招呼 <span aria-hidden="true">↗</span></a>
          <p className="small-note">一个名字，一份真诚。欢迎联系。</p>
        </div>
        <div className="art" aria-label="以杜喆的名字设计的红色艺术名片">
          <div className="art-frame"><div className="art-top"><span>PERSONAL EDITION</span><span>01 / DZ</span></div><div className="character" aria-hidden="true">喆</div><div className="art-bottom"><span>杜 喆</span><span>DU ZHE<br />NICE TO MEET YOU.</span></div></div>
          <div className="art-caption"><span>有幸相识，来日方长。</span><span aria-hidden="true">✳</span></div>
        </div>
      </section>
      <div className="section-divider wrap"><span>保持连接</span><a href="#contact" aria-label="向下查看联系方式">SCROLL TO CONNECT <span aria-hidden="true">↓</span></a></div>
      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="wrap contact-inner">
          <div className="contact-heading"><p className="eyebrow">LET’S CONNECT</p><h2 id="contact-title">好的交流，<br />从一句你好开始。</h2><p>欢迎来电，聊聊你的想法。</p></div>
          <div className="contact-details"><span className="phone-label">联系电话</span><a className="phone" href="tel:18909180063" aria-label="拨打 18909180063">189 0918 0063<span aria-hidden="true">↗</span></a><div className="contact-actions"><button onClick={copyPhone}>复制号码 <span aria-hidden="true">⧉</span></button><a href="/duzhe.vcf" download="杜喆.vcf">保存联系人 <span aria-hidden="true">↓</span></a></div><p className="feedback" role="status" aria-live="polite">{message || "点击号码即可拨打电话"}</p></div>
        </div>
      </section>
      <footer className="wrap footer"><span>杜喆 <span className="muted">/ DU ZHE</span></span><span>很高兴，与你相识。</span><a href="#home">回到顶部 ↑</a></footer>
    </main>
  );
}

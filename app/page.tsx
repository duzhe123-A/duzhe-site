import MediaGallery from "./MediaGallery";
import OpeningFilm from "./OpeningFilm";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
    <path d={diagonal ? "M5 15 15 5M5 5h10v10" : "M3 10h13m-5-5 5 5-5 5"} stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

function TopicIcon({ type }: { type: string }) {
  return <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
    {type === "rail" ? <><path d="m11 5-4 22M21 5l4 22M8 23h16M9 17h14M10 11h12" /><path d="M5 27h22" /></> : type === "edit" ? <><rect x="4" y="7" width="24" height="18" rx="2"/><path d="M4 13h24M10 7l4 6m4-6 4 6m-8 3 5 3-5 3z" /></> : <><rect x="4" y="9" width="24" height="17" rx="2"/><circle cx="16" cy="17.5" r="4"/><path d="m11 9 2-3h6l2 3m2 4h1" /></>}
  </svg>;
}

const topics = [
  { id: "01", label: "RAILWAY", type: "rail", title: "铁道检修", body: "我学的是铁道检修。喜欢把它理解成一门让每一趟车都能安全到站的手艺。" },
  { id: "02", label: "EDITING", type: "edit", title: "视频剪辑", body: "我喜欢剪辑。把零散的日子放进时间轴，找出片段之间的联系，也给它们一个自己的节奏。" },
  { id: "03", label: "LIFE IN FRAMES", type: "camera", title: "记录生活", body: "我有点慢热，刚认识时话不多。于是我把镜头对准日常，让它替我说一些没说出口的话。" },
];

export default function Home() {
  return <>
    <a className="skip" href="#main">跳到正文</a>
    <header className="site-header" id="top">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="杜喆，返回顶部"><span className="mark">Z<span>.</span></span><span className="brand-name">杜喆 <b>DU ZHE</b></span></a>
        <nav aria-label="页面导航">
          <a href="#about">关于我</a>
          <a className="nav-gallery" href="#gallery">影像集</a>
          <a href="#contact">联系我</a>
          <a className="nav-film" href="#film">自我介绍 <Arrow diagonal /></a>
        </nav>
      </div>
    </header>
    <main id="main">
      <section className="shell hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal" /> 陕西 · 西安 <span className="tiny-rule" /> XI’AN, CHINA</p>
          <h1 id="hero-title"><span className="hello">你好，我是</span><span className="hero-name">杜喆<span className="name-dot">.</span></span></h1>
          <p className="hero-deck">在轨道与镜头之间</p>
          <p className="intro">学铁道检修，也喜欢剪辑。用镜头记录生活，把零散的日子剪成有节奏的片段。</p>
          <div className="hero-actions">
            <a className="cta" href="#film"><span className="triangle" /> 看 60 秒自我介绍</a>
            <a className="text-link" href="#about">更多关于我 <Arrow /></a>
          </div>
        </div>
        <OpeningFilm />
      </section>

      <section id="about" className="about" aria-labelledby="about-title">
        <div className="shell">
          <div className="section-head">
            <div><p className="eyebrow"><span className="section-number">01</span> ABOUT ME</p>
              <h2 id="about-title">关于我</h2></div>
            <p>杜，是木与土；喆，是两个吉。<br />我在西安，这是认识我的三个关键词。</p>
          </div>
          <div className="topics">
            {topics.map(topic => <article className="topic" key={topic.id}>
              <div className="topic-meta"><span className="topic-icon"><TopicIcon type={topic.type} /></span><span>{topic.id} / {topic.label}</span></div>
              <h3>{topic.title}</h3>
              <p>{topic.body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section id="film" className="shell film" aria-labelledby="film-title">
        <div className="film-frame">
          <img className="film-landscape" src="/scenes/blue-hour.jpg" alt="" width="1622" height="854" loading="lazy" />
          <div className="film-copy">
            <p className="eyebrow"><span className="section-number">02</span> INTRO FILM</p>
            <h2 id="film-title">一分钟，<br />认识杜喆。</h2>
            <p>我有点慢热，不过镜头替我说了不少。</p>
            <div className="film-meta"><span className="signal" /><span>自我介绍</span><span>01:00</span></div>
          </div>
          <div className="player"><video controls playsInline preload="metadata" poster="/media/intro-cover.jpg" width="540" height="960" aria-label="杜喆的 60 秒自我介绍视频">
            <source src="/media/intro.mp4" type="video/mp4" />
            你的浏览器不支持视频播放。<a href="/media/intro.mp4">打开自我介绍视频</a>。
          </video></div>
        </div>
        <p className="film-caption"><span>02 <i /> 雪山暮色</span><span>THE BLUE HOUR</span></p>
      </section>
      <MediaGallery />

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="shell contact-inner">
          <div>
            <p className="eyebrow"><span className="section-number">04</span> CONTACT</p>
            <h2 id="contact-title">联系我</h2>
          </div>
          <div className="contact-methods">
            <a className="contact-link" href="mailto:162057227@qq.com">
              <span>
                <span className="contact-label">发送邮件</span>
                <span className="contact-value">162057227@qq.com</span>
              </span>
              <Arrow diagonal />
            </a>
            <a className="contact-link" href="tel:18909180063">
              <span>
                <span className="contact-label">拨打电话</span>
                <span className="contact-value">189 0918 0063</span>
              </span>
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="shell footer"><span>杜喆 <i /> 陕西 · 西安</span><a href="#top">回到顶部 <Arrow diagonal /></a></div></footer>
  </>;
}

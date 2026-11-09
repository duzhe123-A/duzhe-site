const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => diagonal
  ? <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.5" /></svg>
  : <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" /></svg>;

function RailArt() {
  const bars = Array.from({ length: 17 }, (_, i) => i);
  return <svg className="rail-art" viewBox="0 0 540 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <defs>
      <pattern id="grid" width="29" height="29" patternUnits="userSpaceOnUse"><path d="M29 0H0V29" fill="none" stroke="#cfb899" strokeOpacity=".105" /></pattern>
      <radialGradient id="glow" cx="55%" cy="37%" r="68%"><stop stopColor="#3e3325"/><stop offset="1" stopColor="#22221b"/></radialGradient>
      <linearGradient id="rail" x1="0" y1="1" x2="1" y2="0" gradientUnits="objectBoundingBox"><stop stopColor="#a46e43"/><stop offset=".58" stopColor="#f0c487"/><stop offset="1" stopColor="#c98955"/></linearGradient>
      <pattern id="dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="1.6" cy="1.6" r=".6" fill="#fbddaa" opacity=".2" /></pattern>
    </defs>
    <rect width="540" height="440" fill="url(#glow)"/>
    <rect width="540" height="440" fill="url(#grid)"/>
    <circle cx="343" cy="171" r="101" fill="url(#dots)" stroke="#bd9460" strokeOpacity=".39"/>
    <circle cx="343" cy="171" r="120" fill="none" stroke="#bd9460" strokeOpacity=".2" strokeDasharray="2 7"/>
    <circle cx="343" cy="171" r="78" fill="none" stroke="#bd9460" strokeOpacity=".17"/>
    <path d="M343 37v267M210 171h267" stroke="#d6a772" strokeOpacity=".24" strokeDasharray="3 6"/>
    <path d="M343 163v16m-8-8h16" stroke="#eac38b" strokeOpacity=".85"/>
    <path d="M-90 431C87 344 194 320 294 314c129-8 176-40 162-73-13-32-112-29-183-24C113 227 68 193 85 162c17-31 110-47 188-56 120-14 208-33 302-103" fill="none" stroke="#bc8d5f" strokeOpacity=".21" strokeDasharray="3 7"/>
    <path d="M-73 416C82 335 184 307 299 300c111-7 155-32 143-59-12-25-94-27-169-22-128 8-187-12-189-46-2-35 87-53 183-64C401 94 474 64 558 9" fill="none" stroke="#e4a975" strokeWidth="1.25" strokeOpacity=".67"/>
    <path d="M-62 435C82 358 186 327 301 320c137-8 181-44 161-80-17-34-111-36-190-31-117 7-168-7-171-34-3-26 74-44 169-54 129-14 214-47 299-101" fill="none" stroke="url(#rail)" strokeWidth="2.25"/>
    <path d="M-55 449C95 375 190 345 303 338c154-10 207-55 183-103-22-46-126-49-215-44-94 6-139 1-142-17-3-17 68-29 144-38 132-14 218-48 303-99" fill="none" stroke="url(#rail)" strokeWidth="2.25"/>
    <path d="M-53 464C95 390 190 361 305 353c177-12 227-69 202-120-24-50-129-63-234-56-85 6-123 8-125-4-2-12 63-20 127-27 132-15 219-47 306-96" fill="none" stroke="#e4a975" strokeWidth="1.25" strokeOpacity=".55"/>
    <path d="M-52 471C95 398 191 371 305 363c183-13 238-74 210-133-26-54-136-67-241-60-83 6-114 8-116 2-2-7 64-13 118-19 131-14 221-47 308-98" fill="none" stroke="#b98253" strokeOpacity=".25" strokeDasharray="3 7"/>
    <path d="M89 330v59m0-29h25m359-210v50m-25-25h50" stroke="#c99762" strokeOpacity=".27" />
    <circle cx="113" cy="364" r="9" fill="#2b271e" stroke="#e9b87a"/><circle cx="113" cy="364" r="3" fill="#e9b87a"/>
    <circle cx="443" cy="69" r="7" fill="#2b271e" stroke="#e9b87a"/><circle cx="443" cy="69" r="2.5" fill="#e9b87a"/>
    <g transform="translate(318 401)" opacity=".6">{bars.map(i=><path key={i} d={`M${i*9} 0v${i%4===0?9:5}`} stroke="#e5b17c" />)}</g>
  </svg>;
}

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
        <a className="brand" href="#top" aria-label="杜喆，返回顶部"><span className="mark">Z<span>.</span></span><span>杜喆 <i>/</i> <b>DU ZHE</b></span></a>
        <nav aria-label="页面导航"><a href="#about">关于</a><a href="#film">自我介绍 <Arrow diagonal /></a></nav>
      </div>
    </header>
    <main id="main">
      <section className="shell hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="signal" /> PERSONAL SITE <span className="tiny-rule" /> 陕西 · 西安</p>
          <h1 id="hero-title"><span className="hello">你好，我是</span><span className="hero-name">杜喆<span className="name-dot">.</span></span></h1>
          <p className="hero-deck">在轨道与镜头之间</p>
          <p className="intro">学铁道检修，也喜欢剪辑。用镜头记录生活，把零散的日子剪成有节奏的片段。</p>
          <div className="hero-actions">
            <a className="cta" href="#film"><span className="triangle" /> 看 60 秒自我介绍</a>
            <a className="text-link" href="#about">更多关于我 <Arrow /></a>
          </div>
        </div>
        <figure className="hero-figure">
          <div className="diagram">
            <RailArt />
            <div className="figure-top"><span><i /> FIELD NOTES / 001</span><span>XI’AN, CN</span></div>
            <div className="figure-tag"><span>01 — 03</span><strong>轨道 / 时间轴</strong></div>
            <span className="figure-coord">FRAME 001</span>
            <span className="corner tl" /><span className="corner tr" /><span className="corner bl" /><span className="corner br" />
          </div>
          <figcaption><span>FIG. 01 <i /> 轨道与时间轴</span><span>DU ZHE / PERSONAL SITE</span></figcaption>
        </figure>
      </section>

      <section id="about" className="shell about" aria-labelledby="about-title">
        <div className="section-head">
          <p className="eyebrow"><span className="index">01</span> / ABOUT ME</p>
          <h2 id="about-title">关于我</h2>
          <p>杜，是木与土；喆，是两个吉。<br className="about-break" /> 我在西安，这是认识我的三个关键词。</p>
        </div>
        <div className="topics">
          {topics.map(topic => <article className="topic" key={topic.id}>
            <div className="topic-meta"><TopicIcon type={topic.type} /><span>{topic.id} / {topic.label}</span></div>
            <h3>{topic.title}</h3>
            <p>{topic.body}</p>
          </article>)}
        </div>
      </section>

      <section id="film" className="shell film" aria-labelledby="film-title">
        <div className="film-frame">
          <div className="film-copy">
            <p className="eyebrow"><span className="index">02</span> / INTRO FILM</p>
            <h2 id="film-title">一分钟，<br />认识杜喆。</h2>
            <p>我有点慢热，不过镜头替我说了不少。想多了解我一点，就从这支 60 秒的短片开始。</p>
            <div className="film-meta"><span className="signal" /><span>自我介绍</span><span>01:00</span><span>9:16</span></div>
          </div>
          <div className="player"><video controls playsInline preload="metadata" poster="/media/intro-cover.jpg" width="540" height="960" aria-label="杜喆的 60 秒自我介绍视频">
            <source src="/media/intro.mp4" type="video/mp4" />
            你的浏览器不支持视频播放。<a href="/media/intro.mp4">打开自我介绍视频</a>。
          </video></div>
        </div>
      </section>
    </main>
    <footer className="shell footer"><span>杜喆 <i /> 陕西 · 西安</span><a href="#top">回到顶部 <Arrow diagonal /></a></footer>
  </>;
}

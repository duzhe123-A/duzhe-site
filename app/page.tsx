import MediaGallery from "./MediaGallery";
import OpeningFilm from "./OpeningFilm";

const topics = [
  { title: "铁道检修", body: "我学的是铁道检修。喜欢把它理解成一门让每一趟车都能安全到站的手艺。" },
  { title: "视频剪辑", body: "我喜欢剪辑。把零散的日子放进时间轴，找出片段之间的联系，也给它们一个自己的节奏。" },
  { title: "记录生活", body: "我有点慢热，刚认识时话不多。于是我把镜头对准日常，让它替我说一些没说出口的话。" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#film">跳到自我介绍</a>
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="杜喆，回到开场">
          <span className="signal" aria-hidden="true" />杜喆<span className="latin">DU ZHE</span>
        </a>
        <nav aria-label="页面导航">
          <a href="#film">认识我</a>
          <a href="#about">关于我</a>
          <a href="#gallery">我的灵感</a>
          <a href="#contact">联系我</a>
        </nav>
      </header>

      <main id="top">
        <OpeningFilm />

        <section id="film" className="intro" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow"><span aria-hidden="true" /> 陕西 · 西安</p>
            <h2 id="intro-title">认识<br className="intro-break" />杜喆<span className="red">。</span></h2>
            <p>我学的是铁道检修。离开轨道，我喜欢把零散的日子放进时间轴，剪出自己的节奏。</p>
            <a className="watch-link" href="#intro-video">看 60 秒自我介绍 <span aria-hidden="true">↗</span></a>
          </div>
          <figure className="intro-panel">
            <video id="intro-video" controls playsInline preload="none" poster="/media/intro-cover.jpg" width={540} height={960} aria-label="杜喆的 60 秒自我介绍">
              <source src="/media/intro.mp4" type="video/mp4" />
              <track kind="subtitles" src="/media/intro.zh-CN.vtt" srcLang="zh-CN" label="简体中文" />
              <a href="/media/intro.mp4">打开自我介绍视频</a>
            </video>
          </figure>
        </section>

        <section id="about" className="chapter about" aria-labelledby="about-title">
          <div className="chapter-inner">
            <div className="chapter-head">
              <h2 id="about-title">关于我<span className="red">。</span></h2>
              <p>杜，是木与土。喆，是两个吉。<br />这是认识我的三个关键词。</p>
            </div>
            <ol className="topics">
              {topics.map((topic) => (
                <li className="topic" key={topic.title}>
                  <h3>{topic.title}</h3>
                  <p>{topic.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <MediaGallery />

        <section id="contact" className="chapter contact" aria-labelledby="contact-title">
          <div className="chapter-inner contact-inner">
            <h2 id="contact-title">联系我<span className="red">。</span></h2>
            <div className="contact-methods">
              <a className="contact-link" href="mailto:162057227@qq.com">
                <span><span className="contact-label">发送邮件</span><strong>162057227@qq.com</strong></span>
                <span aria-hidden="true">↗</span>
              </a>
              <a className="contact-link" href="tel:18909180063">
                <span><span className="contact-label">拨打电话</span><strong>189 0918 0063</strong></span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>杜喆 · 陕西西安</span>
        <a href="#top">回到开场 <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  );
}

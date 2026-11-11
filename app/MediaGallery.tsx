const inspirationClips = [
  { file: "mountain-sunset", title: "雪山公路日落" },
  { file: "night-tunnel", title: "夜间隧道延时" },
];

export default function MediaGallery() {
  return (
    <section id="gallery" className="chapter gallery" aria-labelledby="gallery-title">
      <div className="chapter-inner">
        <div className="chapter-head">
          <h2 id="gallery-title">我的灵感<span className="red">。</span></h2>
          <p>我喜欢公路伸向远山的纵深感，也喜欢老车利落的线条。</p>
        </div>
        <div className="gallery-grid">
          <figure className="photo-panel gallery-road">
            <img src="/gallery/mountain-road.jpg" alt="黄色标线沿着笔直的公路延伸，尽头是蓝天下的群山" width="2000" height="1333" loading="lazy" />
            <figcaption>通往山区的孤路</figcaption>
          </figure>
          <figure className="photo-panel gallery-car">
            <img src="/gallery/classic-car.webp" alt="停在石板路上的复古汽车，露出前灯、车身和前轮" width="853" height="1280" loading="lazy" />
            <figcaption>复古汽车</figcaption>
          </figure>
        </div>
        <details className="gallery-more">
          <summary>更多影像</summary>
          <div className="gallery-clips">
            <figure>
              <video controls playsInline preload="none" poster="/gallery/landscape-clip-cover.jpg" aria-label="风景短片">
                <source src="/gallery/landscape-clip.mp4" type="video/mp4" />
                <a href="/gallery/landscape-clip.mp4">打开风景短片</a>
              </video>
              <figcaption><span>风景短片</span><span>00:23</span></figcaption>
            </figure>
            {inspirationClips.map(({ file, title }) => (
              <figure key={file}>
                <video controls muted playsInline preload="none" poster={`/opening/${file}.jpg`} aria-label={title}>
                  <source src={`/opening/${file}.mp4`} type="video/mp4" />
                  <a href={`/opening/${file}.mp4`}>打开短片</a>
                </video>
                <figcaption>{title}</figcaption>
              </figure>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

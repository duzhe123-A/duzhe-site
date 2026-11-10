const openingClips = [
  { file: "mountain-sunset", title: "雪山公路日落" },
  { file: "vintage-headlight", title: "复古车灯特写" },
  { file: "night-tunnel", title: "夜间隧道延时" },
  { file: "camera-lens", title: "暗光下转动镜头" },
];

export default function MediaGallery() {
  return (
    <section id="gallery" className="shell gallery" aria-labelledby="gallery-title">
      <div className="section-head">
        <div>
          <p className="eyebrow"><span className="section-number">03</span> PHOTO &amp; FILM</p>
          <h2 id="gallery-title">影像集</h2>
        </div>
        <p>风景、车辆与镜头里的细节。</p>
      </div>
      <div className="gallery-grid">
        <figure className="gallery-road">
          <img src="/gallery/mountain-road.jpg" alt="黄色标线沿着笔直的公路延伸，尽头是蓝天下的群山" width="2000" height="1333" loading="lazy" />
          <figcaption><span>01 <i /> 通往山区的孤路</span><span>照片</span></figcaption>
        </figure>
        <figure className="gallery-car">
          <img src="/gallery/classic-car.webp" alt="停在石板路上的复古汽车，露出前灯、车身和前轮" width="853" height="1280" loading="lazy" />
          <figcaption><span>02 <i /> 复古汽车</span><span>照片</span></figcaption>
        </figure>
        <figure className="gallery-clip">
          <video controls playsInline preload="none" poster="/gallery/landscape-clip-cover.jpg" aria-label="影像集短片">
            <source src="/gallery/landscape-clip.mp4" type="video/mp4" />
            <a href="/gallery/landscape-clip.mp4">打开短片</a>
          </video>
          <figcaption><span>03 <i /> 短片</span><span>00:23</span></figcaption>
        </figure>
      </div>
      <div className="opening-collection" aria-labelledby="opening-collection-title">
        <p className="eyebrow">OPENING SHOTS</p>
        <h3 id="opening-collection-title">开场镜头</h3>
        <div className="opening-grid">
          {openingClips.map(({ file, title }, index) => (
            <figure key={file}>
              <video controls muted playsInline preload="none" poster={`/opening/${file}.jpg`} aria-label={title}>
                <source src={`/opening/${file}.mp4`} type="video/mp4" />
                <a href={`/opening/${file}.mp4`}>打开短片</a>
              </video>
              <figcaption><span>{String(index + 2).padStart(2, "0")} <i /> {title}</span><span>短片</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

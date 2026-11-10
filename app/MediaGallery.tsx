export default function MediaGallery() {
  return (
    <section id="gallery" className="shell gallery" aria-labelledby="gallery-title">
      <div className="section-head">
        <div>
          <p className="eyebrow"><span className="section-number">03</span> PHOTO &amp; FILM</p>
          <h2 id="gallery-title">影像集</h2>
        </div>
        <p>一段视频，两张照片。</p>
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
    </section>
  );
}

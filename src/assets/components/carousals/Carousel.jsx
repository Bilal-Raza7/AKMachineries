import compressor1 from "../../../images/compressor.png";
import compressor2 from "../../../images/compressor2.png";
import reaper from "../../../images/kk-reaper.png";
import weader from "../../../images/kk-weader.png";
import weader2 from "../../../images/kk-weader2.png";
import htp from "../../../images/33ci3.png";
import "../carousals/carousel.css";
import Marquee from "react-fast-marquee";

function Slider() {
  const head ="AK Machineries"
  const tagLine ="Elevate Your Operations with Our Machinery Solutions"
  return (
    <>
      <div
        id="carouselExample"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="home">
          <div className="carousel-item" data-bs-interval="3000">
            <img src={compressor1} className="d-block " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="slide-heading">{head}</h5>
              <p>{tagLine}</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={reaper} className="d-block " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="slide-heading">{head}</h5>
              <p>{tagLine}.</p>
            </div>
          </div>
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={weader2} className="d-block " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="slide-heading">{head}</h5>
              <p>{tagLine}.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={compressor2} className="d-block " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="slide-heading">{head}</h5>
              <p>{tagLine}.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={htp} className="d-block " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="slide-heading">{head}</h5>
              <p>{tagLine}.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src={weader} className="d-block " alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="slide-heading">{head}</h5>
              <p>{tagLine}.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Marquee className="marQ">
        Deals in all kinds of Machineries, spare parts of Macineries,
        Agricultural machineries and mill stores.&nbsp; 
      </Marquee>
    </>
  );
}

export default Slider;

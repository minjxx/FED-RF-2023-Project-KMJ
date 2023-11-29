import "../../css/sub_common.css";

import { eventData } from "../data/event_data";
import { SwiperBrand } from "../plugin/SwiperBrand";

export function Event() {
  return (
    <section className="sub-cont">
      <div className="comm-title">
        <h2>event</h2>
      </div>
      <div className="event-wrap">
        <ul>
          {eventData.map((v, i) => (
            <li key={i}>
              <a href="#">
                <div className="img-wrap">
                  <img src={v.imgSrc} alt={v.eventTit} />
                </div>
                <div className="title-box">
                  <p>{v.eventTit}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

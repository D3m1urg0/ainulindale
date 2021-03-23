import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Controller]);

export default {
  install: function(app /*, options*/) {
    app.component("swiper", Swiper).component("swiper-slide", SwiperSlide);
  }
};

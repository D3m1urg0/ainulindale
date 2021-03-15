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

***REMOVED***
***REMOVED***
    app.component("swiper", Swiper).component("swiper-slide", SwiperSlide);
***REMOVED***
***REMOVED***

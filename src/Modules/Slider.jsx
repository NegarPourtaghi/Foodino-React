import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css';
import slider1  from '../../public/Slider/slider1.jpg'
import slider2  from '../../public/Slider/slider2.jpg'
import slider3  from '../../public/Slider/slider3.jpg'
import slider4  from '../../public/Slider/slider4.jpg'
import slider5  from '../../public/Slider/slider5.jpg'
import slider6  from '../../public/Slider/slider6.jpg'
import slider7  from '../../public/Slider/slider7.jpg'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Box } from '@mui/material';
import { SliderBox, SliderPagination } from '../Styles/Style';
export default () => {
  return (
   <SliderBox>
     <Swiper
    modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true , el:'.main_slider_pagination_wrapper'}}
      autoplay={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{height:'100%', backgroundColor:"#ff9248"}}

    >
      <SwiperSlide style={{display:"flex",justifyContent:"center",alignItems:"center"}}><div  style={{backgroundImage:`url(${slider1})`, width:"100%", height:"100%", backgroundSize:"cover", backgroundPosition:"center"}}></div></SwiperSlide>
      <SwiperSlide style={{display:"flex",justifyContent:"center",alignItems:"center"}}><div  style={{backgroundImage:`url(${slider2})`, width:"100%", height:"100%", backgroundSize:"cover", backgroundPosition:"center"}}></div></SwiperSlide>
      <SwiperSlide style={{display:"flex",justifyContent:"center",alignItems:"center"}}><div  style={{backgroundImage:`url(${slider3})`, width:"100%", height:"100%", backgroundSize:"cover", backgroundPosition:"center"}}></div></SwiperSlide>
      <SwiperSlide style={{display:"flex",justifyContent:"center",alignItems:"center"}}><div  style={{backgroundImage:`url(${slider4})`, width:"100%", height:"100%", backgroundSize:"cover", backgroundPosition:"center"}}></div></SwiperSlide>
      <SwiperSlide style={{display:"flex",justifyContent:"center",alignItems:"center"}}><div  style={{backgroundImage:`url(${slider5})`, width:"100%", height:"100%", backgroundSize:"cover", backgroundPosition:"center"}}></div></SwiperSlide>
      <SwiperSlide style={{display:"flex",justifyContent:"center",alignItems:"center"}}><div  style={{backgroundImage:`url(${slider6})`, width:"100%", height:"100%", backgroundSize:"cover", backgroundPosition:"center"}}></div></SwiperSlide>
      <SwiperSlide style={{display:"flex",justifyContent:"center",alignItems:"center"}}><div  style={{backgroundImage:`url(${slider7})`, width:"100%", height:"100%", backgroundSize:"cover", backgroundPosition:"center"}}></div></SwiperSlide>
      <SliderPagination class="main_slider_pagination_wrapper swiper-pagination" ></SliderPagination>

          </Swiper>
   </SliderBox>
  );
};



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '/styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


<SwiperSlide data-aos="fade-up"
// data-aos-offset="200"
// data-aos-delay="50"
>
    <img src="https://img.freepik.com/free-photo/top-view-colorful-aquarelle-notebook_23-2148419540.jpg?size=626&ext=jpg&ga=GA1.1.775762846.1704797882&semt=ais" alt="" /> </SwiperSlide>

<SwiperSlide
//  data-aos="fade-up"
// data-aos-offset="200"
// data-aos-delay="50"
>
     <img src="https://img.freepik.com/free-vector/paint-brushes-color-palette_1308-126704.jpg?size=626&ext=jpg&ga=GA1.1.775762846.1704797882&semt=ais" alt="" /></SwiperSlide>
<SwiperSlide
//  data-aos="fade-up"
// data-aos-offset="200"
// data-aos-delay="50"
><img src="https://i.ytimg.com/vi/j1WvoYl67QE/maxresdefault.jpg" alt="" /> </SwiperSlide>


{/* 
<SwiperSlide>Slide 4</SwiperSlide>
<SwiperSlide>Slide 9</SwiperSlide> */}
</Swiper>
        </div>
    );
};

export default Banner;
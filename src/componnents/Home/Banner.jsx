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
><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZHV58vYyd5gf1JIvLRcTKgUH5bFoUpTHwufGupd8xw&s" alt="" /> </SwiperSlide>
<SwiperSlide
//  data-aos="fade-up"
// data-aos-offset="200"
// data-aos-delay="50"
> <img src="https://media.istockphoto.com/id/1440269204/photo/interior-design-of-a-beautiful-kitchen-with-a-large-island-in-a-modern-new-england-colonial.jpg?s=1024x1024&w=is&k=20&c=rBBs8CtSFMMhibSIPQTo010QIQ6JNzps7QiH7b-lY0s=" alt="" /></SwiperSlide>
<SwiperSlide
//  data-aos="fade-up"
// data-aos-offset="200"
// data-aos-delay="50"
><img src="https://media.istockphoto.com/id/1481823491/photo/teenage-girls-room.jpg?s=1024x1024&w=is&k=20&c=-FOkSNDOW5phgiTsv6bduZ-LsrpwhWwZO2kpVGxjJy4=" alt="" /> </SwiperSlide>


{/* 
<SwiperSlide>Slide 4</SwiperSlide>
<SwiperSlide>Slide 9</SwiperSlide> */}
</Swiper>
        </div>
    );
};

export default Banner;
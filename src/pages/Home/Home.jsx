import React, { useEffect, useState } from 'react'
import './Home.css'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { EffectCoverflow } from 'swiper/modules';


import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y  } from 'swiper/modules';
import { motion } from 'framer-motion';
import HomeBody from '../../components/HomeBody/HomeBody';
import BackStory from '../../components/BackStory/BackStory';
function Home() {

  const [mousePosition,setMousePosition]=useState({
    x:0,
    y:0
  })
  // const [curorVariant,setCursorVariant] =useState("default")  
  useEffect(()=>{
    const mouseMove = (e) =>{
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
// console.log(e);

    }
 window.addEventListener("mousemove",mouseMove)
 return () =>{
  window.removeEventListener('mousemove',mouseMove)
 }
  },[])
const variants = {
  default:{
    x:mousePosition.x - 16,
    y:mousePosition.y -16,
  }
}
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:3}}
    >
      <div className="home">
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y ,EffectCoverflow]}
spaceBetween={50}
effect='coverflow'
slidesPerView={3}
navigation
pagination={{clickable:true}}
scrollbar={{draggable:true}}

coverflowEffect={{
  rotate:0,
  stretch:0,
  depth:100,
  modifier:2.5
}}
className='slider'
>
  <SwiperSlide>
  <img src="https://mir-s3-cdn-cf.behance.net/projects/404/b7b87e128086877.Y3JvcCwxMzg4LDEwODYsMCw2NDI.jpg" alt="" />

  </SwiperSlide>
  <SwiperSlide>
  <img src=" https://i.pinimg.com/originals/e1/9e/b3/e19eb3a4d0ad691ce7e0f4ef057d5ee0.png " alt="" />

  </SwiperSlide>
  <SwiperSlide>
  <img src="https://static.tnn.in/thumb/imgsize-505290,msid-95626896,width-602,height-452,resizemode-1,webp-1/95626896.jpg " alt="" />

  </SwiperSlide>
  <SwiperSlide>
  <img src="https://mir-s3-cdn-cf.behance.net/projects/404/b7b87e128086877.Y3JvcCwxMzg4LDEwODYsMCw2NDI.jpg" alt="" />

  </SwiperSlide>
  <SwiperSlide>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPdIB5svXYSnjaN_r3ZvehQ6r7fmKxRi-bQ&s" alt="" />

  </SwiperSlide>
  <SwiperSlide>
  <img src=" https://i.pinimg.com/236x/9d/e9/1e/9de91e58cfde7f05eb79e203301980ef.jpg" alt="" />

  </SwiperSlide>
  <SwiperSlide>
  <img src="https://mir-s3-cdn-cf.behance.net/projects/404/b7b87e128086877.Y3JvcCwxMzg4LDEwODYsMCw2NDI.jpg" alt="" />

  </SwiperSlide>
</Swiper>



<HomeBody/>


        <div className='home-row'>

        <div>
          
        </div>
        <motion.div className='cursor'
        variants={variants}
        animate="default"
        >

        </motion.div>
        </div>
    

        <div >




   {/**/}
   {/* */}
   {/*  */}
   {/* */}
        </div>

      </div>
    </motion.div>
  )
}

export default Home

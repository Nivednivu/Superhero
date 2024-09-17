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
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
function Home() {

  const [mousePosition,setMousePosition]=useState({
    x:0,
    y:0
  })
  useEffect(()=>{
    const mouseMove = (e) =>{
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })

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
const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,    
      ease: [0.42, 0, 0.58, 1],  
      delay: 0.2      
    }        }
};

  return (

    <>
    <Navbar/>
    <motion.div 


initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
transition={{duration:3}}
>
      <div className="homepage">
<header className="hero-section">
  <div className="hero-text">
  <motion.h1
  initial="hidden"
  animate="visible"
  variants={textVariants}
  className='motion'
>
    <h1>Welcome to <span className="highlight">Superhero World</span></h1>
    </motion.h1>

    <p>Meet <span className="superhero-name">Murali</span>, the hero with extraordinary powers dedicated to justice.</p>
    <p>Uncover the thrilling story of transformation and valor.</p>     
    <Link  className="btn" to={'/about'}>Learn More</Link>
    

  </div>
  <div className="hero-image">
    <img src="https://i.pinimg.com/474x/de/ec/94/deec9452b011c145731c1d1de02e9322.jpg" alt="Superhero" />
  </div>
</header>

</div>

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
<img src="https://wallpapercave.com/wp/wp11608426.jpg" alt="" />

</SwiperSlide>
<SwiperSlide>
<img src=" https://i.pinimg.com/originals/e1/9e/b3/e19eb3a4d0ad691ce7e0f4ef057d5ee0.png " alt="" />


</SwiperSlide>
<SwiperSlide>
<img src="https://images.indianexpress.com/2021/12/minnal-murali-review-.jpg" alt="" />

</SwiperSlide>
<SwiperSlide>
<img src="https://mir-s3-cdn-cf.behance.net/projects/404/b7b87e128086877.Y3JvcCwxMzg4LDEwODYsMCw2NDI.jpg" alt="" />

</SwiperSlide>
<SwiperSlide>
<img src="https://m.media-amazon.com/images/M/MV5BZWUyYWU0NGUtMjA3Ni00YjNkLWIxMjAtYjI2MTk0OGY1ZDNiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg" alt="" />

</SwiperSlide>
<SwiperSlide>
<img src=" https://e1.pxfuel.com/desktop-wallpaper/234/619/desktop-wallpaper-minnal-murali-summary-and-ending-explained-minnal-murali-logo.jpg" alt="" />

</SwiperSlide>
<SwiperSlide>
<img src="https://images.filmibeat.com/img/2021/07/tovino-thomas-minnal-murali-netflix-1625682174.jpg" alt="" />

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


  </div>
</motion.div>

    </>

  )
}

export default Home

import React from 'react'
import './HomeBody.css'
import BackStory from '../BackStory/BackStory';


function HomeBody() {

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



    <div className='hello'>
      <h2  className='h2'>StoryTelling</h2>

      <BackStory/>

    </div>

  )
}

export default HomeBody

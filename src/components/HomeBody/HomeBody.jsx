import React from 'react'
import './HomeBody.css'
import { motion } from 'framer-motion';
import { Card } from 'react-bootstrap';
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
    <div className='top-home'>
        <motion.h1
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className='motion'
    >
      Animated Text with Framer Motion!
    </motion.h1>



    <div className='hello'>
    <div className=''>
      <h2  className='h2'>StoryTelling</h2>

      </div>
      <BackStory/>

      <div className='h22'>
      <div className='hel'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/0b/d9/cf/0bd9cf40c11c8d8280461a2ecf051bba.gif" />
      <Card.Body className='card-body'>
        <h3 >Heros</h3>
      </Card.Body>
    </Card>

      </div>
      <div className='hel'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media3.giphy.com/media/clspXK4twFiGjTwxOZ/source.gif" />
      <Card.Body className='card-body'>
        <h3 >Heros</h3>
      </Card.Body>
    </Card>

      </div>
      <div className='hel'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.tenor.com/tylKxGuPuiAAAAAM/superman-justice-league.gif" />
      <Card.Body className='card-body'>
        <h3 >Heros</h3>
      </Card.Body>
    </Card>

      </div>
      <div className='hel'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/07/e6/63/07e6638a3bdb16a2f403993fd40e0d19.gif" />
      <Card.Body className='card-body'>
        <h3 >Heros</h3>
      </Card.Body>
    </Card>

      </div>

      </div>
    </div>
    {/* <div className='hello'>
      <div className='hel'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c02.purpledshub.com/uploads/sites/41/2018/08/superheros-6167110.jpg?w=1029&webp=1" />
      <Card.Body className='card-body'>
        <h3 >Heros</h3>
      </Card.Body>
    </Card>

      </div>
      <div className='hel'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c02.purpledshub.com/uploads/sites/41/2018/08/superheros-6167110.jpg?w=1029&webp=1" />
      <Card.Body className='card-body'>
        <h3 >Heros</h3>
      </Card.Body>
    </Card>

      </div>
      <div className='hel'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c02.purpledshub.com/uploads/sites/41/2018/08/superheros-6167110.jpg?w=1029&webp=1" />
      <Card.Body className='card-body'>
        <h3 >Heros</h3>
      </Card.Body>
    </Card>

      </div>
      <div className='hel'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c02.purpledshub.com/uploads/sites/41/2018/08/superheros-6167110.jpg?w=1029&webp=1" />
      <Card.Body className='card-body'>
        <h3 >Heros</h3>
      </Card.Body>
    </Card>

      </div>
    </div> */}
{/* <div className='card'>
    <div className='hero-card'>
      <div>

      </div>
      <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c02.purpledshub.com/uploads/sites/41/2018/08/superheros-6167110.jpg?w=1029&webp=1" />
      <Card.Body className='card-body'>
        <h3 >Heros</h3>
      </Card.Body>
    </Card>

      </div>
    </div>
    
</div>
      */}

    </div>
  )
}

export default HomeBody

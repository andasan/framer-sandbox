import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const containerAnimate = { 
  init: { opacity: 0 }, 
  to: { opacity: 1 },
  transition: {
    delay: 0.25,
    duration: 1.5
  }
}
const h2Animate = { 
  init: {}, 
  to: {} 
}
const buttonAnimate = { 
  init: {}, 
  to: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
  } 
}

const Home = () => {
  return (
    <motion.div 
      className="home container" 
      initial={containerAnimate.init} 
      animate={containerAnimate.to}
      transition={containerAnimate.transition}
    >
      <motion.h2 animate={h2Animate.to}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button whileHover={buttonAnimate.to}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;
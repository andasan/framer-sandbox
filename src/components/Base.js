import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  const baseContainerAnimate = { 
    init: { x: '100vw'}, 
    to: { x: 0 },
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 120
    }
  }
  
  const buttonAnimate = { 
    init: { x: '-100vw'}, 
    to: { x: 0 },
    transition: {
      type: 'spring',
      stiffness: 120
      
    }
  }

  return (
    <motion.div 
      className="base container" 
      initial={baseContainerAnimate.init}
      animate={baseContainerAnimate.to}
      transition={baseContainerAnimate.transition}
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div 
          className="next" 
          initial={buttonAnimate.init} 
          animate={buttonAnimate.to}
          transition={buttonAnimate.transition}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
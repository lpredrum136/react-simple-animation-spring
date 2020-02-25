import React from 'react'
import { Spring } from 'react-spring/renderprops'

const ComponentTwo = ({ toggle }) => {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 3000 }}
    >
      {props => (
        <div style={props}>
          <div style={componentTwoStyle}>
            <h1>Component Two</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              voluptatem sit ut quae ullam numquam aperiam totam soluta id,
              veritatis voluptatibus at eos dolorum sed? Necessitatibus voluptas
              amet magnam eligendi!!
            </p>
            <button style={btn} onClick={toggle}>
              Toggle Component Three
            </button>
          </div>
        </div>
      )}
    </Spring>
  )
}

const componentTwoStyle = {
  background: 'brown',
  color: 'white',
  padding: '1.5 rem'
}

const btn = {
  background: '#333',
  color: '#fff',
  padding: '1rem 2rem',
  border: 'none',
  textTransform: 'uppercase',
  margin: '15px 0'
}

export default ComponentTwo

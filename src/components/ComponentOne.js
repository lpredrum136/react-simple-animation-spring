import React from 'react'
import { Spring } from 'react-spring/renderprops'

const ComponentOne = props => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={componentOneStyle}>
            <h1>Component One</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              voluptatem sit ut quae ullam numquam aperiam totam soluta id,
              veritatis voluptatibus at eos dolorum sed? Necessitatibus voluptas
              amet magnam eligendi!!
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  )
}

const componentOneStyle = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5 rem'
}

const counter = {
  background: '#333',
  textAlign: 'center',
  width: '100px',
  borderRadius: '50%',
  margin: '1rem auto'
}

export default ComponentOne

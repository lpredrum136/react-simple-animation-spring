import React from 'react'
import PropTypes from 'prop-types'

const ComponentOne = props => {
  return (
    <div style={componentOneStyle}>
      <h1>Component One</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatem
        sit ut quae ullam numquam aperiam totam soluta id, veritatis
        voluptatibus at eos dolorum sed? Necessitatibus voluptas amet magnam
        eligendi!
      </p>
    </div>
  )
}

const componentOneStyle = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5 rem'
}

ComponentOne.propTypes = {}

export default ComponentOne

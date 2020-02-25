import React from 'react'

const ComponentThree = props => {
  return (
    <div style={componentThreeStyle}>
      <h1>Component Three</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae rerum
        sit distinctio cum illum fugit molestiae hic explicabo odio totam quidem
        non nostrum eligendi, eius sapiente, recusandae error consequuntur
        asperiores.
      </p>
    </div>
  )
}

const componentThreeStyle = {
  background: 'skyblue',
  color: 'white',
  padding: '1.5rem 1.5rem 5rem 1.5rem'
}

export default ComponentThree

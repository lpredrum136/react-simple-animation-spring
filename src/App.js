import React, { useState } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import './App.css'
import ComponentOne from './components/ComponentOne'
import ComponentTwo from './components/ComponentTwo'
import ComponentThree from './components/ComponentThree'

const App = props => {
  const [data, setData] = useState({
    showComponentThree: false
  })

  const toggle = event =>
    setData({ showComponentThree: !data.showComponentThree })

  return (
    <div className='App'>
      <ComponentOne />
      <ComponentTwo toggle={toggle} />
      <Transition
        native
        items={data.showComponentThree}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {show =>
          show &&
          (props => (
            <animated.div style={props}>
              <ComponentThree />
            </animated.div>
          ))
        }
      </Transition>
    </div>
  )
}

export default App

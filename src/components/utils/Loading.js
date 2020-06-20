// 3rd party imports
import React from 'react'
import { CircularProgress } from '@material-ui/core'

// My imports
import { useDelayedRender } from '../../hooks/useDelayedRender'

const DelayedRender = ({ delay, children }) =>
  useDelayedRender(delay)(() => children)

const Loading = ({ color = 'primary', size = 60 }) => {
  return (
    // delay the loading spinner by 500 milliseconds
    <DelayedRender delay={500}>
      <CircularProgress size={size} color={color} />
    </DelayedRender>
  )
}

export default Loading

// STYLING

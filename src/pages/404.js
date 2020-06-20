// 3rd party imports
import React from 'react'
import { Typography } from '@material-ui/core'

// My imports

const DoesNotExist = () => {
  document.title = 'Reddit Royale | Does Not Exist'
  return (
    <div style={{ marginTop: '3rem',display: 'flex', justifyContent: 'center' }}>
      <Typography>This page does not exist 🧐</Typography>
    </div>
  )
}

export default DoesNotExist

// STYLING

import React from 'react'

function Image({ ...rest }) {
  return (
    <img alt="Cat" {...rest} />
  )
}

export default Image
import React from 'react'

// props = {
//   onClick: 'aa',
//   onChange: 'aa',
//   type: 'button',
//   title: 'button',
//   buttonText: 'Increment'
// }

function Button({ buttonText, ...rest }) {
  console.log(rest, buttonText);
  return (
    <div>
      <button {...rest}>{buttonText}</button>
    </div>
  )
}

export default Button


// page A: button type buttton, onClick, onChange, title
// page B: button type submit, onClick, onChange, title
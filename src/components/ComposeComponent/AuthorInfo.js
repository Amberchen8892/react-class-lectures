import React from 'react'
import Typhography from '../Typhography';

function AuthorInfo({ author, text }) {
  return ( 
    <>
      <Typhography text={author.name}/>
      <Typhography text={text}  />
    </>
  )
}

export default AuthorInfo
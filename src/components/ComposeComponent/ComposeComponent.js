import React from 'react'

import Image from '../Image';
import Typhography from '../Typhography';
import AuthorInfo from './AuthorInfo';

function ComposeComponent() {
  const comment = {
    date: Date.now(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  
  
  return (
    <div>
      <Image src={comment.author.avatarUrl} alt="Cat" />
      <br />
      <AuthorInfo author={comment.author} text={comment.text} />
      <Typhography text={comment.date} className="dateCat " />
    </div>
  )
}

export default ComposeComponent
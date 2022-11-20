import React from 'react';

import Button from './components/Button';

function State() {
  // const [users, setUsers] = React.useState({
  //   firstName: 'truong',
  //   lastName: 'tai'
  // });
  const [firstName, setFirstName] = React.useState('truong');
  const [lastName, setLastName] = React.useState('tai');
  const [messageObj, setMessageObj] = React.useState({
    message: {
      id: 1,
      text: ''
    },
    author: 'truong',

  }) // memory A
  const [todos, setTodos] = React.useState([])

  console.log('re-render state', todos)
  console.log('re-render messageObj', messageObj)

  return (
    <div>
      State: {firstName}, {lastName}
      <Button
        buttonText="Change FirstName"
        onClick={() => {
          setFirstName('linh');
          setLastName('phuong')
        }}
      />
      <br />
      <h4>Updating object, nested object</h4>
      <h5>Author: {messageObj.author}</h5>
      <input 
        type="text"
        value={messageObj.message.text}
        onChange={(e)=> {
          // messageObj.message = e.target.value; // memory A
          // const messageObjItem = {
          //   message: e.target.value
          // } // memory B
          // setMessageObj(messageObj); // doens't work
          // setMessageObj(messageObjItem); // work

          setMessageObj(prevState => {
            // return {
            //   ...prevState,
            //   text: e.target.value
            // }
            return {
              ...prevState,
              message: {
                ...prevState.message,
                text: e.target.value
              }
            }
          })
        }}
      />
      <br />
      Todos List
      <Button
        buttonText="Add new Todo"
        onClick={() => {
          const todoItem = {
            id: Math.random(),
            text: 'New Todo 1'
          }
          // setTodos([...todos, todoItem])
          setTodos((prevState) => {
            return [...prevState, todoItem]
          })
        }}
      />
      <br />
      <br />
      <br />
    </div>
  )
}

export default State


/*
merge obj 

const objA = {
  firstName: 'truong',
  id: 1
}


code funcA
code funcB

const newObjectA = { ...objA }
=> newObjectA = {
  lastName: 'tai',
}


const objB = {
  lastName: 'tai',
  firstName: 'phuong'
}

const merged = { ...objB, ...objA }

merged = {
  firstName: 'truong',
  id: 1,
  lastName: 'tai'
}

*/


/*
replace obj 

const objA = {
  firstName: 'truong',
  id: 1
}

const objB = {
  lastName: 'tai',
  firstName: 'phuong'
}

const replaced = { aaa }

replaced = {
  lastName: 'tai',
  firstName: 'phuong'
}

*/
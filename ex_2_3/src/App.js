import React from 'react'
import Phonebook from './components/Phonebook'

const App = () => {
  const phonebook = {
    title: 'Superadvanced web phonebook app',
    contacts: [
    {
      id: 1,
      name: 'John Doe',
      phonenumber: '358401234567'
    },
    {
      id: 2,
      name: 'Jane Doe',
      phonenumber: '44551234567'
    },
    {
      id: 3,
      name: 'Foo bar',
      phonenumber: '000'
    }
    ]
  }

  return (
    <div>
      <Phonebook phonebook={phonebook} />
    </div>
  )
}


export default App
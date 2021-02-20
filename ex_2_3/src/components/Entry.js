import React from 'react'

const Entry = (entry) => {
  console.log('entry...', entry)
  console.log('name:', entry.contact.name)
    return (
      <li>Name: {entry.contact.name} Number: {entry.contact.phonenumber}</li>
    )
  }

/*  <li>Name: {contact.name} Number: {contact.phonenumber}</li>    */

  export default Entry
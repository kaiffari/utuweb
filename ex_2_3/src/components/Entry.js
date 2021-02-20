import React from 'react'

const Entry = (entry) => {
  /*console.log('entry...', entry)*/
    return (
      <tr>
        <td>Name: {entry.contact.name}</td><td>Number: {entry.contact.phonenumber}</td>
      </tr>
    )
  }

  export default Entry
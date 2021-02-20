import React from 'react'

const Entry = (props) => {
    return (
      <div>
        <p>Name: {props.contact.name} Number: {props.contact.phonenumber}</p>    
      </div>
    )
  }

  export default Entry
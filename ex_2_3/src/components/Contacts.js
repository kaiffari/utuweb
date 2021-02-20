import React from 'react'
import Entry from './Entry'

function Contacts ({contents}) {
    console.log('contacts...', contents.length)
    const result = contents.map(contact => contact.id)
    console.log('id: ', result)
    return(
        <ul>
            {contents.map(contact=><Entry key={contact.id} contact={contact} />)}
        </ul>
    )
}

/*{contents.map(contact => <entry contact={contents}/>)},*/

export default Contacts
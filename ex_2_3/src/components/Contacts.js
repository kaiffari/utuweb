import React from 'react'
import Entry from './Entry'

function Contacts ({contents}) {
    console.log('contacts...', contents.length)
    return(
        <p>
            {contents.map(contact => <entry contact={contents}/>)}
        </p>,
        'output'
    )
}

export default Contacts
import React from 'react'
import Entry from './Entry'

function Contacts ({contents}) {
    /*console.log('contacts...', contents.length)
    const result = contents.map(contact => contact.id)
    console.log('id: ', result)*/
    return(
        <table>
            <tbody>
                {contents.map(contact=><Entry key={contact.id} contact={contact} />)}
            </tbody>
        </table>
    )
}

export default Contacts
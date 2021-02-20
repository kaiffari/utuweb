import React from 'react'
import Header from './Header'
import Contacts from './Contacts'

function Phonebook({phonebook}) {
    /*console.log('pblength', phonebook.contacts.length)*/
    return (
        <div>
            <Header text={phonebook.title} />
            <Contacts contents={phonebook.contacts} />
            <p>Total number of entries: {phonebook.contacts.length}</p>
        </div>
    );
}

export default Phonebook
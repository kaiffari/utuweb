import React from 'react'
import Header from './Header'
import Contacts from './Contacts'

function Phonebook({phonebook}) {
    console.log('pblength', phonebook.contacts.length)
    return (
        <div>
            <Header text={phonebook.title} />
            <Contacts contents={phonebook.contacts} />
        </div>
    );
}

export default Phonebook
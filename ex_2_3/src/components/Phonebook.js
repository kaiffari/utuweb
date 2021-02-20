import React from 'react'
import Header from './Header'
import Contacts from './Contacts'

function Phonebook({phonebook}) {
    console.log('pblength', phonebook.contacts.length)
/*    var book = phonebook.contacts
    console.log('booklength', book.length)*/
    return (
        <div>
            <Header text={phonebook.title} />
            <Contacts contents={phonebook.contacts} />
        </div>
    );
}
/*            <Contacts contents={phonebook.contacts} />*/
/*<Contacts contents={book} />*/

export default Phonebook
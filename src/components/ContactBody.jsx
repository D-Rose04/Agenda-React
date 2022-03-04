import React, { Fragment } from 'react'
import ContactList from './ContactList'

export default function ContactBody({ Data }) {
    return (
        <>
            <div className='contactBodyTitle'>Lista de contactos</div>
            <div className='contactBodyContent'>
                <h5>Cantidad de contactos: <span>{Data.length}</span></h5>
            </div>
            <ContactList Contacts={Data} />
        </>
    )
}

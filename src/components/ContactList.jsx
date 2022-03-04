import React from 'react';
import Contact from './Contact';
import { v4 as uuid } from 'uuid';

export default function ContactList({ Contacts }) {
  return (
    <div className='ScrollableList'>
      <table>
        <tr>
          <th>Nombre</th> <th>Apellido</th> <th>Telefono</th>
        </tr>
        {Contacts.map((contact) => (<Contact key={uuid()} source={contact} />))}
      </table>
    </div>
  )
}

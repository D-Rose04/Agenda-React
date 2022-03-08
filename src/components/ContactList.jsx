import React from 'react';
import Contact from './Contact';
import { v4 as uuid } from 'uuid';
import '../styles/Scroll.css'

export default function ContactList({ Contacts }) {
  const style = {
    position: 'sticky',
    top: 0
  };

  return (
    <div className='Scroll mt-2'>
      <table className='table table-light table-striped table-bordered'>
        <thead style={style} className="thead-primary">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {Contacts.map((contact) =>
            (<Contact key={uuid()} source={contact} />))}
        </tbody>
      </table>
    </div>
  )
}

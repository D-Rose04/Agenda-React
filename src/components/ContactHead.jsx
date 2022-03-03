import React from 'react'

export default function ContactHead({quantity}) {
  return (
    <div className='contactHead'>
        <h3 className='title'>Agenda de contactos</h3>
        <p>Cantidad de contactos: <strong>{quantity}</strong></p>
    </div>
  );
}

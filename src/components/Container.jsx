import React, { useState } from 'react';
import ContactList from './ContactList';
import Modal from './Modal';
import { v4 as uuid } from 'uuid';

export function Container({ src }) {
  const [isVisible, setVisible] = useState(false);
  const HandleModal = () => {
    setVisible(!isVisible);
  }

  return (
    <>
      <Modal key={uuid()} isVisible={isVisible} handleData={src.action} handleModal = {HandleModal} />
      {/* Contact book header */}
      <div className='transparent'>
        <div className='container mt-2 Title rounded-top '>
          <h3 className='mt-1 mb-1 mrg-10-l'>Agenda de contactos</h3>
        </div>
        <div className='ContactBook container shadow'>
          <h4 className='mrg-10-l'>Lista de contactos</h4>
          <div className='d-flex justify-content-between '>
            <h6 className='mrg-10-l'>Cantidad de contactos: <span>{src.contacts.length}</span></h6>
            <button onClick={HandleModal} className='btn btn-outline-primary mrg-10-r'>
              <i>Nuevo Contacto</i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill mr-2" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
              </svg>
            </button>
          </div>
          {/*Contacts Section */}
          <div>
            <ContactList key={uuid()} Contacts={src.contacts} />
          </div>
        </div>
      </div>
    </>
  );
}

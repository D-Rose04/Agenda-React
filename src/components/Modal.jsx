import React, { useState } from 'react';
import "../styles/Modal.css";

export default function Modal({ isVisible, handleData, handleModal }) {

  const [contact, setContact] = useState({
    nombre: '',
    apellido: '',
    telefono: ''
  });

  // changes contact attributes on input changes
  const handleInput = (event) => {
    const { id, value } = event.target;
    setContact({ ...contact, [id]: value });
  };

  // sends contact to parent component for processing
  const sendData = (event) => {
    event.preventDefault();
    handleData(contact);
  };

  return (
    <>
      {isVisible ?
        /* New contact section */
        <div className='container'>
          <form className="card bg-light mb-3 shadow" onSubmit={sendData}>
            <div className="card-header text-center bg-primary text-light rounded-top"><h4>Agregar Contacto</h4></div>
            {/*Card body*/}
            <div className="card-body">
              <div className="input-group flex-nowrap">
                <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                <input onChange={handleInput} className="form-control" placeholder='Nombre' id='nombre' />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                <input onChange={handleInput} className="form-control" placeholder='Apellido' id='apellido' />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </span>
                <input onChange={handleInput} className="form-control" placeholder='Telefono' id='telefono' />
              </div>
            </div>
            {/*Card footer*/}
            <div className="card-footer rounded-bottom">
              <div className='d-flex justify-content-center'>
                <button className='btn btn-danger ModalBtn' onClick={handleModal}>
                  <i>Cancelar</i>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </span>
                </button>
                <button type='submit' className='btn btn-success ModalBtn'>
                  <i>Confirmar</i>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
        : ''
      }
    </>
  )
}

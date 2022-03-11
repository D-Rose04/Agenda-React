import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Container } from './components/Container';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const webService = 'http://www.raydelto.org/agenda.php';
  const HttpRequestGet = { method: 'GET' };
  const HttpRequestPost = { method: 'POST', body: '' };

  // Fetch data from api when component get rendered
  useEffect(() => { getContacts(); }, []);

  // Get data from api
  const getContacts = () => {
    fetch(webService, HttpRequestGet)
      .then(data => data.json())
      .then(data => { setContacts(data); });
  }

  // Add new contact and update the contact list
  const handleContact = (vals) => {
    HttpRequestPost.body = JSON.stringify(vals);
    fetch(webService, HttpRequestPost)
      .then((response) => {
        return response.json();
      }).then((response) => {
        if (!response.exito) return;
        alert("Contacto Agregado.");
        getContacts();
      });
  }

  return (
    <>
      <Container key={uuid()} src={{ contacts: contacts, action: handleContact }} />
    </>
  );
}



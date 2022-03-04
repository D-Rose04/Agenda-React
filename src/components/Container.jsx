import React from 'react'
import ContactHead from './ContactHead';
import ContactBody from './ContactBody'

export function Container({ src }) {
  return (
    <div className='Container'>
      <ContactHead />
      <ContactBody Data={src}/>
    </div>
  );
}

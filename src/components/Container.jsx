import React,{Fragment} from 'react'
import ContactHead from './ContactHead';

export function Container({contacts}) {
  return (
    <Fragment>
      <ContactHead quantity={contacts.length}/>    
    </Fragment>
  );
}

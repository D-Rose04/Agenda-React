import './App.css';
import dist from '@testing-library/user-event';
import React,{Fragment} from 'react';
import {Container} from './components/Container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {contacts: []};
    this.webService = "http://www.raydelto.org/agenda.php";
    this.getHttpRequest = {method: "GET"}
  }

  // fetch data from api when component get rendered
  componentDidMount(){
    fetch(this.webService,this.getHttpRequest)
    .then(data => data.json())
    .then(data => {
        let i = 0;
        let contactList = [];
        while(data.length > i){
          contactList.push(data[i]);
          i++;
        }
        this.setState( {contacts: contactList});
      }
    );
  }
  
  render(){
    return (
      <Container contacts={this.state.contacts} /> 
    );
  }
}

export default App;

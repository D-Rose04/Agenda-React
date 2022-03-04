import './styles/App.css';
import dist from '@testing-library/user-event';
import React from 'react';
import { Container } from './components/Container';
import Btn from './components/Btn';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [] };
    this.webService = 'http://www.raydelto.org/agenda.php';
    this.getHttpRequest = { method: "GET" }
    this.handleUpdateContacts = this.getContacts.bind(this);
  }

  // Get data from api
  getContacts() {
    fetch(this.webService, this.getHttpRequest)
      .then(data => data.json())
      .then(data => { this.setState({ contacts: data }); });
  }

  // Fetch data from api when component get rendered
  componentDidMount() {
    this.getContacts();
  }

  render() {
    return (
      <>
        <Container src={this.state.contacts} />
        <Btn Data={{ action: '', text: '+' }} />
      </>
    );
  }
}

export default App;

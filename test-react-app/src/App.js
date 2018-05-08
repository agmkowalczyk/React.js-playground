import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const allUsers = ['old_user1', 'old_user2', 'old_user3', 'new_user1', 'new_user2'];

class UserList extends Component {
  
  render() {
    if (this.props.users.length > 0) {
      return (
        this.props.users.map(user => <li key={user}> {user} </li>)
      );
    }
    return (
      <p>No results!</p>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    filteredUsers: allUsers
    }
  }


  filterUsers(e) {
    const text = e.target.value;
    const prepareUsers = this.searchUsersForText(text);
    
    this.setState({
      filteredUsers: prepareUsers
    });  
  }

  searchUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Filter User List
        </p>
        <div>
          <input onInput={this.filterUsers.bind(this)} />
          <ul>
            <UserList users={this.state.filteredUsers}/>
          </ul>
        </div>
      </div>
    );
  }
  
}

export default App;

import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './UsersList';

const allUsers = ['old_user1', 'old_user2', 'old_user3', 'new_user1', 'new_user2'];

class App extends React.Component {
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
          <UsersList users={this.state.filteredUsers} />
        </div>
      </div>
    );
  }
  
}

export default App;

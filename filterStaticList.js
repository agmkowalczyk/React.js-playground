const allUsers = [
  'Michal',
  'Kasia',
  'Jacek',
  'Marta',
  'Tomek',
  'Ania'
];

const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul>
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }

  return (
    <p>No results!</p>
  );
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers
    }
  }

  // filterUsers(e) {
  //   const text = e.currentTarget.value;
  //   const filteredUsers = this.getFilteredUsersForText(text)
  //   this.setState({
  //     filteredUsers
  //   });
  // }

  // getFilteredUsersForText(text) {
  //   return allUsers.filter(user => 
  //     user.toLowerCase().includes(text.toLowerCase()))
  // }


  // asynchronicznie
  filterUsers(e) {
    const text = e.currentTarget.value;
    this.getFilteredUsersForText(text)
      .then(filteredUsers => this.setState({filteredUsers}))
      .catch(err => console.log(err));
  }

  getFilteredUsersForText(text) {
    return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
        const filteredUsers = allUsers.filter(user => 
          user.toLowerCase().includes(text.toLowerCase()));
        resolve(filteredUsers);
      }, time) ;
    });
  }

  render() {
    return (
      <div>
        <input onInput={this.filterUsers.bind(this)}/>
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
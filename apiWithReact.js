class AppHeader extends React.Component {
  render() {
    return (
      <header className="ui fixed menu">
        <nav className="ui container">
          <a href="#" className="header item">
            <img className="logo" src="http://placehold.it/35x35/00ffff/000000?text=oo" />
            Lista kontaktów
          </a>
          <div className="header item">
            <button className="ui button">Dodaj</button>
          </div>
        </nav>
      </header>
    );
  }
}

class ContactsList extends React.Component {
  contactToContactItem = contact => {
    const avatarUrl = contact.picture.thumbnail;
    const { title, first, last } = contact.name;
    const name = `${title} ${first} ${last}`.trim();
    const phone = contact.phone;
    const key = contact.login.username;
    return <ContactItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} />;
  }

  render() {
    return (
      <ul className="ui relaxed divided list selection">
        {this.props.contacts.map(this.contactToContactItem)}
      </ul>
    );
  }
}

const ContactItem = ({ avatarUrl, name, phone }) => {
  return (
    <li className="item">
      <UserAvatar avatar={avatarUrl}/>
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{phone}</div>
      </div>
    </li>
  );
}

const UserAvatar = ({ avatar }) => {
  return (
    <img src={avatar} className="ui mini rounded image" alt="" />
  );
}

const RefreshButton = ({ refreshButton }) => 
  <button onClick={() => refreshButton()} className="ui button">Odśwież</button> 

class App extends React.Component {
  state = {
    contacts: null
  };

  getData = () => {console.log('pp');
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.setState({ contacts: json.results }));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <AppHeader />
        <main className="ui main text container">
          <RefreshButton refreshButton={this.getData} />
          {this.state.contacts ? <ContactsList contacts={this.state.contacts} /> : 'Loading...'}
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
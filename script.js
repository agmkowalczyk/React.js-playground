function AppHeader() {
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

function ContactsList() {
  return (
    <ul className="ui relaxed divided list selection">
      <ContactItem
        login="typeofweb1"
        name="Lena"
        department="JavaScript Developer"
      />
      <ContactItem
        login="typeofweb2"
        name="Brian"
        department="Human Resources"
      />
      <ContactItem
        login="typeofweb3"
        name="Rick"
        department="QA"
      />
    </ul>
  );
}

function ContactItem({ login, name, department }) {
  return (
    <li className="item">
      <UserAvatar login={login}/>
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{department}</div>
      </div>
    </li>
  );
}

function UserAvatar({ login }) {
  const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
  return (
    <img src={imgUrl} className="ui mini rounded image" />
  );
}

function App() {
  return (
    <div>
      <AppHeader />
      <main className="ui main text container">
        <ContactsList />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dateVisible: true };
  }

  onButtonClick() {
    this.setState(state => ({ dateVisible: !state.dateVisible }));
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick.bind(this)}>Kliknij</button>
        {this.state.dateVisible && <DateComponent />}
      </div>
    );
  }
}

class DateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = window.setInterval(this.updateDate.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  updateDate() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const dateStr = this.state.date.toString();
    return <time>{dateStr}</time>;
  }
}
ReactDOM.render(<App />, document.getElementById("app"));

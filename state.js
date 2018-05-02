class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      totalClicks: 0,
      doubleClicks: 0,
      name: "",
      surname: ""
    };
  }
  increment() {
    console.log("was", this.state.counter);
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1,
        totalClicks: prevState.totalClicks + 1
      }  
    });
    console.log("is", this.state.counter);
  }
  decrement() {
    console.log("was", this.state.counter);
    this.setState({
      counter: this.state.counter - 1,
      totalClicks: this.state.totalClicks + 1
    }, () => {
      console.log("is", this.state.counter);
    });
  }
  doubleClick() {
    this.setState({
      doubleClicks: this.state.doubleClicks + 1
    })
  }
  inputValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.increment.bind(this)}>+</button>
          <output onDoubleClick={this.doubleClick.bind(this)}> counter: {this.state.counter} </output>
          <button onClick={this.decrement.bind(this)}>-</button>
          <output> totalClicks: {this.state.totalClicks} </output>
          <output> doubleClicks: {this.state.doubleClicks} </output>
        </div>
        <div>
          <label htmlFor="name">Imię </label>
          <input id="name" name="name" onInput={this.inputValue.bind(this)} /><output> {this.state.name} </output>
        </div>
        <div>    
          <label htmlFor="surname">Nazwisko </label>
          <input id="surname" name="surname" onInput={this.inputValue.bind(this)}/><output> {this.state.surname} </output>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />,  document.getElementById('app'));
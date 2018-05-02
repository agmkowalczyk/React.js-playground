class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      totalClicks: 0,
      doubleClicks: 0
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
  render() {
    return (
      <div>
        <button onClick={this.increment.bind(this)}>+</button>
        <output onDoubleClick={this.doubleClick.bind(this)}> counter: {this.state.counter} </output>
        <button onClick={this.decrement.bind(this)}>-</button>
        <output> totalClicks: {this.state.totalClicks} </output>
        <output> doubleClicks: {this.state.doubleClicks} </output>
      </div>
    );
  }
}

ReactDOM.render(<App />,  document.getElementById('app'));
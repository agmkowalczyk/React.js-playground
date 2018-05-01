class App extends React.Component {
  onClickHandler() {
    alert("Clicked!");
  }
  render() {
    return <button onClick={this.onClickHandler}>Click!</button>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
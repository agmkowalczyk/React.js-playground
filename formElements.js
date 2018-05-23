class App extends React.Component {
  state = {
    name: '',
    color: 'blue',
    message: '',
    isChecked: false
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleColorChange = (e) => {
    this.setState({color: e.target.value})
  }

  handleMessageChange = (e) => {
    this.setState({message: e.target.value})
  }

  handleCheckboxChange = (e) => {
    this.setState({isChecked: e.target.checked})
  }

  render() {
    return(
      <div>
        <div>
          <input value={this.state.name} onChange={this.handleNameChange} />
        </div>
        <div>
          <select value={this.state.color} onChange={this.handleColorChange}>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
          </select>
        </div>     
        <div>
          <textarea value={this.state.value} onChange={this.handleMessageChange}></textarea>
        </div>  
        <div>
          <input type='checkbox' checked={this.state.isChecked} onChange={this.handleCheckboxChange}/>
        </div> 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
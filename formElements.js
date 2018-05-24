class App extends React.Component {
  state = {
    name: '',
    color: 'blue',
    message: '',
    isChecked: false
  }

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div>
        <div>
          <input name='name' value={this.state.name} onChange={this.handleInputChange} />
        </div>
        <div>
          <select name='color' value={this.state.color} onChange={this.handleInputChange}>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
          </select>
        </div>     
        <div>
          <textarea name='message' value={this.state.value} onChange={this.handleInputChange}></textarea>
        </div>  
        <div>
          <input name='isChecked' type='checkbox' checked={this.state.isChecked} onChange={this.handleInputChange}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
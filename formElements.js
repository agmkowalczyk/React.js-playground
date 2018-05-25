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

  submitForm = () => {
    console.log(this.input.value);
    console.log(this.select.value);
    console.log(this.text.value);
    console.log(this.checkbox.checked);
  }

  render() {
    return(
      <div>
        <div>
          <input name='name' ref={input => this.input = input} defaultValue="Name..." onChange={this.handleInputChange} />
        </div>
        <div>
          <select name='color' ref={select => this.select = select} onChange={this.handleInputChange}>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
          </select>
        </div>     
        <div>
          <textarea name='message' ref={text => this.text = text} defaultValue="Textarea..."  onChange={this.handleInputChange}></textarea>
        </div>  
        <div>
          <input name='isChecked' type='checkbox' ref={checkbox => this.checkbox = checkbox} checked={this.state.isChecked} onChange={this.handleInputChange}/>
        </div>
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
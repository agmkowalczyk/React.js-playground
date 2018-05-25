class FileInput extends React.Component {
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>
          <input
            type="file"
            ref={input => this.fileInput = input}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.fileInput.files[0].name);
  }
}

ReactDOM.render(<FileInput />, document.getElementById('app'));
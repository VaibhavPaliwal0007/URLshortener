import './App.css';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
   
  constructor(props) 
  {
      super(props)
      this.state = { inputvalue : '' }
      this.inputChange = this.inputChange.bind(this)
      this.formSubmit = this.formSubmit.bind(this)
  }

  inputChange(event) { 
      this.setState({ inputvalue : this.state.inputvalue + event.target.value })
  }

  async formSubmit(event) {
      event.preventDefault()
      const longUrl = this.state.inputvalue;

      this.setState({ inputvalue : '' });
      const url = process.env.REACT_APP_URL + '/v1/enterurl/'

  
        const response = fetch(url, {
        method : "POST",
        body : JSON.stringify({ 'longUrl' : longUrl })
        })
        .then(response => response.json())
        .then(data => console.log(data))
      }

  render () { return (
      <div className="app">
        <div className = "content">
          <div className = "header">
              <img
                className = "logo" 
                src = "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              />
              <span className = "name">Shrink</span>
              <div className = "links">
                <a href = "https://github.com/VaibhavPaliwal0007" className = "link">GitHub</a>
                <a href = "https://www.linkedin.com/in/vaibhav-paliwal-47325b207/" className = "link">Linkedin</a>
              </div>
          </div>
          <div className = "heading">
            <h1>Shrink your links <span className="go">faster</span>.</h1>
          </div>
          <div className = "input__box">
            <form className = "input__form">
              <input className = "input__box__input" onChange = { this.inputChange } value = { this.state.inputvalue } type="text" placeholder="Paste your long url"/>
              <button onClick = { this.formSubmit } className="input__button"><SendIcon/></button>
            </form>
          </div>
        </div>
      </div>
  );
  }
}

export default App;

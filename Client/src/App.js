import './App.css';
import SendIcon from '@material-ui/icons/Send';

function App() {
  return (
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
            <input className = "input__box__input" type="text" placeholder="Paste your long url"/>
            <button className="input__button"><SendIcon/></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

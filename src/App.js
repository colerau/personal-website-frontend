import './App.css';
import Like from './components/Like.js'
import Form from './components/Form.js'

const App = () => {
  const test = (num) => {
    console.log(`like button clicked ${num} time(s)`)
  }
  return (
    <div className="App">

      <Like test={test}/>
      <br />
      <Form />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
// import Greet from './components/greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/functionClick'
// import ClassClick from './components/classClick'
// import EventBind from './components/Eventbind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting />
      <ParentComponent />
      {/* <ClassClick />
      <FunctionClick />
      <EventBind /> */}
      {/* <Message /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Well done, learning a new framework
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Greet name="Harry" surname="Tomi" />
      <Greet name="Dick" surname="Vicgt" />
      <Greet name="Tom" surname="Mookle" />
      <Welcome name="Harry" surname="Tomi" />
      <Welcome name="Dick" surname="Vicgt" />
      <Welcome name="Tom" surname="Mookle" />
      <Message />
      <Counter /> */}
    </div>
  );
}

export default App;

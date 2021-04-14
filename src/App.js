import logo from './logo.svg';
import './App.css';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/useState/HookCounterThree';
// import HookCounterFour from './components/useState/HookCounterFour';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import HookCounterOne from './components/useEffect/HookCounterOne';

function App() {
  return (
    <div className='App'>
      {/* <ClassCounter /> */}
      {/* <ClassCounterOne /> */}
      <HookCounterOne />
    </div>
  );
}

export default App;

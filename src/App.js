import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/useState/HookCounterTwo';
//import HookCounterThree from './components/useState/HookCounterThree';
// import HookCounterFour from './components/useState/HookCounterFour';
// import ClassCounterOne from './components/useEffect/ClassCounterOne';
// import HookCounterOne from './components/useEffect/HookCounterOne';
// import DataFetching from './components/useEffect/fetching/DataFetching';
// import ComponentC from './components/useContext/ComponentC';
import CounterOne from './components/useReducer/CounterOne';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className='App'>
      {/* <HookCounterThree /> */}
      {/* <ClassCounter /> */}
      {/* <ClassCounterOne /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={'Theo'}>
        <ChannelContext.Provider value={'CodeEvolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <CounterOne />
    </div>
  );
}

export default App;

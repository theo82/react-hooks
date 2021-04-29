import './App.css';
import React, { useReducer } from 'react';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/useState/HookCounterTwo';
//import HookCounterThree from './components/useState/HookCounterThree';
// import HookCounterFour from './components/useState/HookCounterFour';
// import ClassCounterOne from './components/useEffect/ClassCounterOne';
// import HookCounterOne from './components/useEffect/HookCounterOne';
// import DataFetching from './components/useEffect/fetching/DataFetching';
// import ComponentC from './components/useContext/ComponentC';
// import CounterOne from './components/useReducer/CounterOne';
// import CounterTwo from './components/useReducer/CounterTwo';
// import CounterThree from './components/useReducer/CounterThree';
import ComponentA from './components/useReducer/GlobalStateManagment/ComponentA';
import ComponentB from './components/useReducer/GlobalStateManagment/ComponentB';
import ComponentC from './components/useReducer/GlobalStateManagment/ComponentC';

export const CountContext = React.createContext();

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
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
        {/* <CounterTwo /> */}
        {/* <CounterThree /> */}
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;

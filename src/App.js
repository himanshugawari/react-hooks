import React from 'react';
import './App.css';

// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCou1nterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookCounterOne from './components/HookCounterOne';
// import ClassMouse from './components/ClassMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
// import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

function App() {
  return (
    <div className='App'>
      <CounterOne />
      {/* <UserContext.Provider value={'Himanshu'}>
        <ChannelContext.Provider value={'Gawari'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassCounter />
      <HookCounter /> */}
    </div>
  );
}

export default App;

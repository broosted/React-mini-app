import { createStore} from 'redux';


//destructuring arguments of funtion
const add = ({ a, b}, c) => {
    return a + b;
}

//console.log(add({a:1,b: 2}));

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 1} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
// must use pure functions
// never change state or action
const countReducer = (state = { count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':     
        return {
            //we do not want to change the state or the action that is bad practice
            count: state.count + action.incrementBy
        };
        case 'DECREMENT': 
       return {
            count: state.count - action.decrementBy
        };
        case 'RESET': return {
            count: 0
        };
        case 'SET' : return {
            count: action.count
        }
        default: return state;
    }
  
};

// count 0 is the default state starting
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 10}));
store.dispatch(incrementCount());
store.dispatch(decrementCount({decrementBy: 100}));
store.dispatch(resetCount());
store.dispatch(setCount({count: 100}));

//Actions - is an objects that get sent to the store

//decrement state value
// store.dispatch({
//     //use caps convention by redux use underscore for more words
//     type: 'DECREMENT',
//     decrementBy: 5
// });

// store.dispatch({
//     //use caps convention by redux use underscore for more words
//     type: 'DECREMENT'
// });
//increase the state value
// store.dispatch({
//     //use caps convention by redux use underscore for more words
//     type: 'INCREMENT',
//     incrementBy: 11
// });

// store.dispatch({
//     //use caps convention by redux use underscore for more words
//     type: 'INCREMENT'
// });
//get state to get the current state




//reset the state value
// store.dispatch({
//     //use caps convention by redux use underscore for more words
//     type: 'RESET'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });




unsubscribe();

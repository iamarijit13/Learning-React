import { createStore} from 'redux';

//Action Generator : Action generators are the functions that returns action object.

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ( { decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ( { count = 0 } = {} ) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

//Reducers
    // 1. Reducers are pure functions.
    //Never change state or action manually instead return a new object of state of action.

const countReducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
        };
        case 'DECREMENT': 
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return{
                count: action.count
            }
        case 'RESET': 
            return {
                count: 0
        };
        default: 
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(setCount( { count: 10 } ));

store.dispatch(incrementCount( { incrementBy: 5 } ));

store.dispatch(decrementCount( { decrementBy: 2 } ));

store.dispatch(resetCount());

store.dispatch(setCount( { count: 101 } ));


// unscribscribe();




import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// Expenses Reducer



// timestamps(miliseconds)
// January 1st 1970 (unix epoch)
// 334422, 10 , -32321



store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const exp1 = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000}));
const exp2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));
//store.dispatch(removeExpense({ id: exp1.expense.id}));

store.dispatch(editExpense(exp2.expense.id, { amount: 500}));

//store.dispatch(setTextFilter('e'));
//store.dispatch(setTextFilter('date'));

//store.dispatch(sortByAmount());
store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());

//store.dispatch(setEndDate(15));

const demoState = {
    expenses: [{
        id: 'jrels',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
};

// console.log({
//     age: 42,
//     ...user,
//     location: 'PHila'
// })
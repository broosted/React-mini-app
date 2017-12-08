import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter.jsx';
import configureStore from './store/configureStore.jsx';
import getVisibleExpenses from './selectors/expenses.jsx';
import {addExpense} from './actions/expenses.jsx';
import {setTextFilter} from './actions/filters.jsx';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();



// store.subscribe(() =>{
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

store.dispatch(addExpense({ description: 'Water Bill', amount: 400, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 300, createdAt: -1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 300, createdAt: 89000}));

store.dispatch(setTextFilter(''));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));
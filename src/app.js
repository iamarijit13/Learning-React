import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js'
import { addExpense } from './actions/expenses.js';
import { setTextFilter } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description: 'Water Bill', amount: 4500}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1000}));
const expenseThree = store.dispatch(addExpense({description: 'Rent', amount: 109500}));


const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

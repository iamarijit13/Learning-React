import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import { editExpense, removeExpense } from '../actions/expenses.js';

const EditExpensePage = (props) => {
    return(
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
};

const mapStateToprops = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id )
    }
}

export default connect(mapStateToprops)(EditExpensePage);
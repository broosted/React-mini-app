import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem.jsx';
import selectExpenses from '../selectors/expenses.jsx';

const ExpenseList = (props) => (
    <div>

<h1>Expense List</h1>
<ol>

    {
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((el) => {
                return  <ExpenseListItem key={el.id} {...el} props={props}/> ;
            })
        )     
    }
</ol>


    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}


export default connect(mapStateToProps)(ExpenseList);

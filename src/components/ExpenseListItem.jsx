import React from 'react';
import {connect} from 'react-redux';

import {removeExpense} from '../actions/expenses.jsx';
import selectExpenses from '../selectors/expenses.jsx';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const ExpenseListItem = ({id, description, note, amount, createdAt, props}) =>  (
   <li>Description:
       <Link to={`/edit/${id}`} >{description}</Link> 
       <p>Note: {note}</p>
       <p>Amount: {amount}</p>
       <p>CreatedAt: {createdAt}</p>
       <button onClick={() => {
           props.dispatch(removeExpense({id}));
       }}>Remove</button>
       
   </li>
);




export default connect()(ExpenseListItem);

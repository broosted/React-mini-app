import React from 'react';
import {connect} from 'react-redux';

import {removeExpense} from '../actions/expenses.jsx';
import selectExpenses from '../selectors/expenses.jsx';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, note, amount, createdAt, props}) =>  (
   <li>Description:
       <Link to={`/edit/${id}`} >{description}</Link> 
       <p>Note: {note}</p>
       <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
       <p>CreatedAt: {moment(createdAt).format('MMMM Do, YYYY')}</p>
       <button onClick={() => {
           props.dispatch(removeExpense({id}));
       }}>Remove</button>
       
   </li>
);




export default connect()(ExpenseListItem);

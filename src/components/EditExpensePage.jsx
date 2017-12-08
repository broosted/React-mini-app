import React from 'react';
import ExpenseForm from './ExpenseForm.jsx';
import {editExpense} from '../actions/expenses.jsx';
import { connect } from 'react-redux';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <ExpenseForm
            expense={this.props.expense} 
            onSubmit={this.onSubmit}
            />  
          </div>
        )
    }

}


const mapStateToProps = (state, props) => ({
   expense: state.expenses.find((exp)=> exp.id === props.match.params.id)
});


const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id,expense))
  });
  

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);
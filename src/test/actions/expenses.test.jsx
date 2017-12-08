import {addExpense, editExpense, removeExpense } from '../../actions/expenses.jsx';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});

    //toEqual deeply compare two objects or two arrays
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });

})


test('should edit expense action object', () => {
    const action = editExpense('abc123',{description: 'alpha', note: 'thanks'});

    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'alpha', note: 'thanks'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});


test('should setup add expense action object with default values', () => {

    const expenseData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0 };

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})
import expensesReducer from '../../reducers/expenses.jsx';
import moment from 'moment';

const expenses = [
    {
        id: '1',
        description: 'Water Rent',
        note: 'it was good',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'Hello Bar',
        note: 'not bad',
        amount: 38,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Mellon Bil',
        note: 'okay',
        amount: 328,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

test('should add expense', () => {

    const sample =   {
    
        description: 'Water Blunt',
        note: 'it was good',
        amount: 1295,
        createdAt: moment(0).add(2, 'days').valueOf()
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense: sample
    }
    const state = expensesReducer([],action);

    expect(state).toEqual([sample])
})

test('should remove expense', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    }

    const state = expensesReducer(expenses,action)

    expect(state.length).toBe(2)

})

test('should edit expense', () => {

    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {description: 'Water Blunt',
        note: 'it was good',
        amount: 1295,
        createdAt: moment(0).add(2, 'days').valueOf()}
    }

    const state = expensesReducer(expenses,action)

    expect(state).toEqual([expenses[0],{
        id: '2',
        description: 'Water Blunt',
        note: 'it was good',
        amount: 1295,
        createdAt: moment(0).add(2, 'days').valueOf()
    },expenses[2]])


})



test('should not edit if no expense found', () => {
    
        const action = {
            type: 'EDIT_EXPENSE',
            id: '5',
            updates: {description: 'Water Blunt',
            note: 'it was good',
            amount: 1295,
            createdAt: moment(0).add(2, 'days').valueOf()}
        }
    
        const state = expensesReducer(expenses,action)
    
        expect(state).toEqual(state)
    
    
    })
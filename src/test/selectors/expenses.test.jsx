import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses.jsx';

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

test('should filter by text value', ()=> {

    const filters = {
        text: 'Bar',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined

    }
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[1]]);
})

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters);

    expect(result).toEqual([expenses[2],expenses[0]])
    
})

//should filter by endDate
test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});
// should sort by date
test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})

// should sort by amount
test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
})
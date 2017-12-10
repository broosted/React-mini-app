import selectExpensesTotal from '../../selectors/expenses-total.jsx';
import expenses from '../fixed/expenses.js';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);

    expect(res).toBe(0);
})

test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);

    expect(res).toBe(195);
})



test('should correctly add up a multiple expenses', () => {
    const res = selectExpensesTotal(expenses);

    expect(res).toBe(114195);
})
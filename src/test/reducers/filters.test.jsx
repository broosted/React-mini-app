
import filterReducer from '../../reducers/filters.jsx';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate : moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

//failing
test('should sort by amount', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }

    const state = filterReducer(currentState, {type: 'SORT_BY_AMOUNT'})

    expect(state.sortBy).toBe(undefined);
})

//failing
test('should set sort by to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }

    const action = {
        type: 'SORT_BY_DATE'
    }

    const state = filterReducer(currentState, action);

    expect(state.sortBy).toBe(undefined)

})

test('should set text filter', () => {
    // const currentState = {
    //     text: 'rent',
    //     startDate: undefined,
    //     endDate: undefined,
    //     sortBy: 'amount'
    // }

    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    }

    const state = filterReducer(undefined, action);

    expect(state.text).toBe('rent')
})


test('should set startDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }

    const action = {
        type: 'SET_START_DATE',
        startDate: 109882
    }

    const state = filterReducer(currentState, action);

    expect(state.startDate).toBe(109882)
    
})


test('should set endDate filter', () => {

    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }

    const action = {
        type: 'SET_END_DATE',
        endDate: 109882
    }

    const state = filterReducer(currentState, action);

    expect(state.endDate).toBe(109882)
    
})
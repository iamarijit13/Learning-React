import moment from 'moment';

//Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: new moment().startOf('month'),
    endDate: new moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        
        case 'SORT_BY_DATE': 
            return {...state,
                sortBy: action.sortBy
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }

        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE': 
        return {
            ...state,
            endtDate: action.endDate
        }

        default: 
            return state;
    }
}
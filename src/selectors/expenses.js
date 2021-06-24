import moment from 'moment';

//Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtmoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtmoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtmoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((object1, object2) => {
        if(sortBy === 'date') {
            return object1.createdAt < object2.createdAt ? 1 : -1;
        }else if(sortBy === 'amount') {
            return object1.amount < object2.amount ? 1 : -1;
        }
    })
}
const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: '' 
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';

function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_LOAN_TYPE:
            console.log(111, action)
            return Object.assign( {}, state, { loanType: action.payload });

        case UPDATE_PROPERTY_TYPE:
            console.log(111, action)
            return Object.assign( {}, state, { property: action.payload });

        case UPDATE_CITY: 
            console.log(111, action) 
            return Object.assign( {}, state, { city: action.payload });

        default: return state;
    }
}

export function updateLoanType (loanType) {
    console.log(loanType)
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType (property) {
    console.log(property) 
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity (city) {
    console.log(city) 
    return {
        type: UPDATE_CITY,
        payload: city 
    }
}

export default reducer;
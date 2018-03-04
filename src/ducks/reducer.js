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
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_REAL_ESTATE_AGENT = 'UPDATE_REAL_ESTATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE';
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO';
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE';
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';




function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_LOAN_TYPE:
            console.log('action--->', action)
            return Object.assign( {}, state, { loanType: action.payload });

        case UPDATE_PROPERTY_TYPE:
            console.log('action--->' , action)
            return Object.assign( {}, state, { property: action.payload });

        case UPDATE_CITY: 
            console.log('action--->' ,action) 
            return Object.assign( {}, state, { city: action.payload });
        
        case UPDATE_PROP:
            console.log('action--->' ,action)
            return Object.assign( {}, state, { propToBeUsedOn: action.payload });

        case UPDATE_FOUND:
            console.log('action--->' ,action)
            return Object.assign( {}, state, { found: action.payload });
        
        case UPDATE_REAL_ESTATE_AGENT:
            console.log('action-->' , action)
            return Object.assign( {}, state, { realEstateAgent: action.payload });

        case UPDATE_COST:
            console.log('action-->' , action)
            return Object.assign( {}, state, { cost: action.payload });

        case UPDATE_DOWN_PAYMENT:
            console.log('action-->', action)
            return Object.assign( {}, state, { downPayment: action.payload });

        case UPDATE_CREDIT:
            console.log('action-->', action)
            return Object.assign( {}, state, { credit: action.payload });

        case UPDATE_HISTORY:
            console.log('action-->', action)
            return Object.assign( {}, state, { history: action.payload });

        case UPDATE_ADDRESS_ONE:
            console.log('action-->', action)
            return Object.assign( {}, state, { addressOne: action.payload });

        case UPDATE_ADDRESS_TWO:
            console.log('action--> ', action)
            return Object.assign( {}, state, { addressTwo: action.payload });
        
        case UPDATE_ADDRESS_THREE:
            console.log('action--> ', action)
            return Object.assign( {}, state, { addressThree: action.payload });
            
        case UPDATE_FIRST_NAME:
            console.log('action--> ', action)
            return Object.assign( {}, state, { firstName: action.payload });
            
        case UPDATE_LAST_NAME:
            console.log('action--> ', action)
            return Object.assign( {}, state, { lastName: action.payload });

        case UPDATE_EMAIL:
            console.log('action--> ', action)
            return Object.assign( {}, state, { email: action.payload });

        default: return state;
    }
}

export function updateLoanType (loanType) {
    console.log('prop --> ', loanType)
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType (property) {
    console.log('prop --> ', property) 
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity (city) {
    console.log('prop --> ', city) 
    return {
        type: UPDATE_CITY,
        payload: city 
    }
}

export function updateProp (prop) {
    console.log('prop --> ', prop)
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

export function updateFound (found) {
    console.log('prop --> ', found)
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}
export function updateRealEstateAgent (realEstateAgent) {
    console.log('prop --> ', realEstateAgent)
    return {
        type: UPDATE_REAL_ESTATE_AGENT,
        payload: realEstateAgent
    }
}

export function updateCost (cost) {
    console.log('prop --> ', cost)
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

export function updateDownPayment (downPayment) {
    console.log('prop --> ', downPayment)
    return {
        type: UPDATE_DOWN_PAYMENT,
        payload: downPayment
    }
}

export function updateCredit (credit) {
    console.log('prop --> ', credit) 
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

export function updateHistory (history) {
    console.log('prop --> ', history)
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}

export function updateAddressOne (addressOne) {
    console.log('prop --> ', addressOne)
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: addressOne
    }
}

export function updateAddressTwo (addressTwo) {
    console.log('prop --> ', addressTwo)
    return {
        type: UPDATE_ADDRESS_TWO,
        payload: addressTwo
    }
}

export function updateAddressThree (addressThree) {
    console.log('prop --> ', addressThree)
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: addressThree
    }
}

export function updateFirstName (firstName) {
    console.log('prop --> ', firstName)
    return {
        type: UPDATE_FIRST_NAME,
        payload: firstName
    }
}

export function updateLastName (lastName) {
    console.log('prop --> ', lastName)
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    }
}

export function updateEmail (email) {
    console.log('prop --> ', email)
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export default reducer;
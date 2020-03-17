/**
 * defining initial state for businesses
 */

 import { actionTypes } from '../Actions/actions.jsx';

 const initialState = {
    businessList: [],
    // businessName: '',
    // businessDescription: '',
    // businessLocation: '',
    // businessId: 0
 }

 let businessId = 0

 const addBusiness = () => ({
    businessId: businessId++,
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    latitude: '',
    longitude: '',
    URL: '',
    img: '',
    categoryName: '',
    categoryID: '',
    type: '',
    distance_miles: '',
    description: '',    
 })

//  const addBusiness = ({
//     businessName: action.payload.bName,
//     businessDescription: action.payload.bDescription,
//     businessLocation: action.payload.bLocation,
//     businessId: businessId++
//  })

 const businessReducer = (state=initialState, action) => {
    let businessList = [...initialState.businessList] // is this line necassary???
    
    switch (action.type) { 
        case actionTypes.addBusiness:
            //businessList.push(addBusiness())
            // businessId = state.businessId++
            // const newBusiness = {
            //     businessName: action.payload.bName,
            //     businessDescription: action.payload.bDescription,
            //     businessLocation: action.payload.bLocation,
            //     businessId: state.businessId
            // }
            businessList.push(addBusiness())

            return {
                ...state,
                businessList
                // businessName,
                // businessDescription,
                // businessLocation,
                // businessId
            }
        default:
            return state;
    }
 }

export default businessReducer;
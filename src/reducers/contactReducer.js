import {GET_CONTACTS, GET_CONTACT, UPDATE_CONTACT} from "./../actions/types";

const initialState = {
    contacts: [],
    contact: {
        name:"",
        color:""
    }
}
export default function(state = initialState, action){
    switch (action.type) {
        case GET_CONTACTS:
            return {...state, contacts=action.payload}
        case UPDATE_CONTACT:
            return {...state, contact: state.contacts.map ( contact =>
                contact.cid === action.payload.id ? (contact = action.payload)
                : contact)}
        case GET_CONTACT:
            return {...state,
                contact: action.payload }
        default: 
            return state;
    }
}
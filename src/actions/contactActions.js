import { GET_CONTACTS, GET_CONTACT, UPDATE_CONTACT } from "./types";
import axios from "axios";
export const getContacts = () => async dispatch => {
  const res = await axios.get(
    "https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/"
  );

  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};
export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    `http://my-json-server.typicode.com/hufflepuffprogrammer/test2/movies/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};

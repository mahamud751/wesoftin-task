import { Dispatch } from "redux";
import { FETCH_USERS_SUCCESS } from "./actionTypes";

import UserData from "../data.json";

interface User {
  id: number;
  name: string;
  email: string;
  profilePicture: string;
}

export const fetchUsersSuccess = (users: User[]) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsers = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUsersSuccess(UserData.users));
  };
};

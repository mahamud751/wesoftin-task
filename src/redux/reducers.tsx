import { combineReducers } from "redux";
import { FETCH_USERS_SUCCESS } from "./actionTypes";

interface User {
  id: number;
  name: string;
  email: string;
  profilePicture: string;
}

interface UsersState {
  users: User[];
}

const initialUserState: UsersState = {
  users: [],
};

const usersReducer = (state = initialUserState.users, action: any) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

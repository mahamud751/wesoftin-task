import { useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { Link } from "react-router-dom";

import { RootState } from "../redux/reducers";
import { fetchUsers } from "../redux/actions";

function UsersList() {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <p className="text-blue-500 hover:text-blue-700 mb-4 block text-center mt-12 font-bold text-3xl">
        Wesoftin All Team Members
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {users.map((user: any) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <img
                src={user.profilePicture}
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-lg font-semibold mt-2">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default UsersList;

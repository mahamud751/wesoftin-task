import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { RootState } from "../redux/reducers";

function UserProfile() {
  const { id } = useParams<{ id?: string }>();
  const parsedId = parseInt(id || "", 10);
  const user = useSelector((state: RootState) =>
    state.users.find((user: any) => user.id === parsedId)
  );

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <div className="bg-white rounded-lg p-4 shadow-md">
        <img
          src={user.profilePicture}
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 mb-4 block text-center mt-12 font-bold text-2xl"
      >
        Home
      </Link>
    </>
  );
}

export default UserProfile;

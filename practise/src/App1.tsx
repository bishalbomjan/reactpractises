import { useState } from "react";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

const App1 = () => {
  const [newUser, setNewUser] = useState({
    id: 0,
    name: "",
  });

  const { users, error, isLoading, setError, setUsers } = useUsers();
  const deleteUser = (user: User) => {
    const originalUser = users; // store copy of original user
    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };
  const addUser = () => {
    const originalUser = users; // store copy of original user
    setUsers([newUser, ...users]);
    userService
      .create<User>(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };
  const updateUser = (user: User) => {
    const originalUser = users;
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update<User>(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };
  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          type="text"
          id="name"
          className="form-input"
        />
      </div>
      <button onClick={() => addUser()} className="btn btn-primary">
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-item-group p-1 d-flex justify-content-between"
          >
            {user.name}
            <div className="">
              <button
                onClick={() => deleteUser(user)}
                className=" btn btn-outline-danger"
              >
                Delete
              </button>
              <button
                onClick={() => updateUser(user)}
                className="btn btn-outline-secondary mx-2"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App1;

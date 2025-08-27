import { CanceledError } from "./services/api-client";
import { useEffect, useState } from "react";
import userService, { User } from "./services/user-service";

const App1 = () => {
  const [users, setUsers] = useState<User[]>([]); // we specifiy what type of data we store to not get compilation error.
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // We need to sepcify loading indicator.
  const [newUser, setNewUser] = useState({
    id: 0,
    name: "",
  });
  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
        //  finally block is placed, we don't need this.
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);
  const deleteUser = (user: User) => {
    const originalUser = users; // store copy of original user
    setUsers(users.filter((u) => u.id !== user.id));
    userService.deleteUser(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };
  const addUser = () => {
    const originalUser = users; // store copy of original user
    setUsers([newUser, ...users]);
    userService
      .createUser(newUser)
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
    userService.updateUSer(updatedUser).catch((err) => {
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

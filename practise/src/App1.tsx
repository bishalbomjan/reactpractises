import axios, { AxiosError, CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string; // we are intrested in these 2 properties for now.
}
const App1 = () => {
  const [users, setUsers] = useState<User[]>([]); // we specifiy what type of data we store to not get compilation error.
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // We need to sepcify loading indicator.
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
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

    return () => controller.abort();
  }, []);
  const deleteUser = (user: User) => {
    const originalUser = users; // store copy of original user
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };
  return (
    <div>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-item-group p-1 d-flex justify-content-between"
          >
            {user.name}
            <button
              onClick={() => deleteUser(user)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App1;

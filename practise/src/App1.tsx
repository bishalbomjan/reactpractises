import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string; // we are intrested in these 2 properties for now.
}
const App1 = () => {
  const [users, setUsers] = useState<User[]>([]); // we specifiy what type of data we store to not get compilation error.
  const [error, setError] = useState("");
  //   woring with pormisess
  const fetchUser = async () => {
    const res = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/usersx"
    );
    setUsers(res.data);
  };
  useEffect(() => {
    try {
      fetchUser();
    } catch (err) {
      setError((err as AxiosError).message);
    }
  }, []);
  //   useEffect(() => {
  //     axios
  //       .get<User[]>("https://jsonplaceholder.typicode.com/usersx")
  //       .then((res) => setUsers(res.data))
  //       .catch((err) => setError(err.message)); //we don't know what data we save so compilation error.
  //   }, []);
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App1;

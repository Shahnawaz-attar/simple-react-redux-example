import React, { useEffect, useState } from 'react';

//https://jsonplaceholder.typicode.com/users
const API = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    setUsers(result);
  };

  useEffect(() => {
    getUsers();
  });

  const listUsers = users.map((user, ind) => {
    return <h4 key={user.id}>{user.name}</h4>;
  });

  return <div>{listUsers}</div>;
};

export default API;

import React, { useState, useEffect } from 'react';

const Users = () => {
  const [myUsers, setMyUsers] = useState([]);

  const [sortField, setSortField] = useState('');

  const fetchUsersData = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setMyUsers(result);
      });
  };

  useEffect(() => {
    fetchUsersData();
    document.title = 'Users List from fetch API';
  }, []);

  return (
    <div className="row txt-sm bdr-btm g-0">
      <table className="tblData">
        <tr>
          <th>Title</th>
          <th>Price</th>
        </tr>
        {myUsers.map((myUser) => (
          <tr key={myUser.id}>
            <td>{myUser.title.split(' ', 5)}</td>
            <td>{myUser.price}</td>
          </tr>
        ))}
      </table>

      <table className="tblData">
        <tr>
          <th> Total Price :</th>
          <th>
            {myUsers
              .map((itm) => itm.price)
              .reduce((intVal, currVal) => intVal + currVal, 0)}
          </th>
        </tr>
      </table>
    </div>
  );
};

export default Users;

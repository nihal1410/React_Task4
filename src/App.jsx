import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Task4() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/users');
          setUsers(response?.data?.users);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
    }, []);
  return (
    <div className="container" >
    <h1 className="m-4 text-center">User Table</h1>
    <table class="w-full text-sm text-left text-gray-500">
      <thead  class="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Image</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Age</th>
          <th scope="col" class="px-6 py-3">Gender</th>
          <th scope="col" class="px-6 py-3">Username</th>
          <th scope="col" class="px-6 py-3">Address</th>
          <th scope="col" class="px-6 py-3">Birth Date</th>
          <th scope="col" class="px-6 py-3">Height</th>
          <th scope="col" class="px-6 py-3">Weight</th>
          <th scope="col" class="px-6 py-3">Bank</th>
          <th scope="col" class="px-6 py-3">Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr class="bg-white border-b " key={user.id}>
            <td class="px-6 py-4">{user.id}</td>
            <td class="px-6 py-4">{user.firstName} {user.maidenName} {user.lastName}</td>
            <td class="px-6 py-4"><img src={`${user.image}`} alt="cxczxcz" style={{'height':'60px'}} /></td>
            <td class="px-6 py-4">{user.email}</td>
            <td class="px-6 py-4">{user.age}</td>
            <td class="px-6 py-4">{user.gender}</td>
            <td class="px-6 py-4">{user.username}</td>
            <td class="px-6 py-4">{user.address.address}, {user.address.city}</td>
            <td class="px-6 py-4">{user.birthDate}</td>
            <td class="px-6 py-4">{user.height}</td>
            <td class="px-6 py-4">{user.weight}</td>
            <td class="px-6 py-4">{user.bank.cardExpire}</td>
            <td class="px-6 py-4">{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Task4
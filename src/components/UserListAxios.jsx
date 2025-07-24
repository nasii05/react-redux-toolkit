import axios from 'axios';
import { useEffect, useState } from 'react'

const UserListAxios = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
       .then(response => {
            setUsers(response.data);
            setIsLoading(false);
       })
       .catch(error => {
            console.error("There was an error fetching the users!", error);
            setIsLoading(false);
       });
  },[])

  if(isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserListAxios
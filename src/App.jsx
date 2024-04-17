import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://661038330640280f219c9a89.mockapi.io/socia-profile/v1/users')
      .then(res => {
        return res.json();
      }).then(data => {
        setUsers(data)
        console.log(data)
      });
  }, []);
  return (
    <>
      <div>
        {
          users.map((user) => (<Card key={user.id} user={user} />))
        }
      </div>
    </>

  )
}

export default App
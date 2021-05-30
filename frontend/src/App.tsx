import React, { useEffect, useState } from 'react';
import User, { IUser } from './components/User';
import api from './services/api';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect( () => {
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data);
    });
  },[])

  return (
    <div className="App">
      {users.map(user => <User user={user}></User>)}
    </div>
  );
}

export default App;

import {useEffect, useState, useContext} from 'react'
import Admin from '@/functions/Admin'

import ErrorContext from '@/context/ErrorContext';

export default function SamplePage({throwError}) {
  const errors = useContext(ErrorContext);
  const [users, setUsers] = useState(null);

  let admin = new Admin();

  useEffect(() => {
    (async () => {
      let users = await admin.ListUsers();
      setUsers(users);
    })()
  }, [])

  return (
    <div>
      <p>Sample Page</p>
      <button
        onClick={() =>
          errors.throw(
            `Test error ${Math.floor(Math.random() * 100)}`,
            errors.WARN
          )
        }
      >
        Warn
      </button>
      <button
        onClick={() =>
          errors.throw(
            `Test error ${Math.floor(Math.random() * 100)}`,
            errors.ERROR
          )
        }
      >
        Error
      </button>
      <button
        onClick={() =>
          errors.throw(
            `Test error ${Math.floor(Math.random() * 100)}`,
            errors.SUCCESS
          )
        }
      >
        Success
      </button>
      {users?.length > 0 &&
        users.map((user, index) => (
          <div key={index}>
            <p>{user.phoneNumber}</p>
            <p>{user.name}</p>
          </div>
        ))}
    </div>
  );
}

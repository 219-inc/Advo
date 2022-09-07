import { useEffect, useState, useContext } from "react";
import Admin from "@/functions/Admin";

import ErrorContext from "@/context/ErrorContext";

import { userTableHeaders } from "@/constants";

export default function SamplePage({ throwError }) {
  const errors = useContext(ErrorContext);
  const [users, setUsers] = useState(null);

  let admin = new Admin();

  useEffect(() => {
    (async () => {
      let users = await admin.ListUsers();
      setUsers(users);
    })();
  }, []);

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
            <span>{JSON.stringify(user)}</span>
          </div>
        ))}

      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {userTableHeaders.map((header, index) => (
                <th key={index} scope="col" class="py-3 px-6">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 &&
              users.map((user, index) => (
                <tr
                  key={index}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.id}
                  </th>
                  <td class="py-4 px-6">{user.name}</td>
                  <td class="py-4 px-6">{user.phoneNumber}</td>
                  <td class="py-4 px-6">{user.status}</td>
                  <td class="py-4 px-6">{user.isUserEnabled}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

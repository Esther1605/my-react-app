// // import React, { useState } from 'react';
// // import ExpenseForm from './expense-tracker/components/ExpenseForm';

// // const App = () => {
// //   // Handle form submission in the App component
// //   const handleExpenseSubmit = (expense: {
// //     description: string;
// //     amount: number;
// //     category: string;
// //   }) => {
// //     console.log(expense);
// //   };

// //   return (
// //     <div className="App">
// //       <h1>Expense Form Tracker</h1>
// //       <ExpenseForm onSubmit={handleExpenseSubmit} />
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useEffect, useRef } from 'react';

// const App = () => {
//   const ref = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     // side effect, its changing something outside of the component, so the component
//     //  is no longer PureComponent, to make it pure we can use useEffect hook
//     if (ref.current) {
//       ref.current.focus();
//     }
//   });

//   useEffect(() => {
//     document.title = 'My App';
//   });

//   return (
//     <div>
//       {/* /* want to put focus on the input * i will use ref hook/ */}
//       <input ref={ref} type="text" className="form-control" />
//     </div>
//   );
// };

// export default App;

import axios from 'axios';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  title: string;

  // properties  in the API
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    // get return a promise and if the promise is resolved then we get the response object,
    // if the promise is rejected then we get the error object

    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      });
    // .catch((err) => {
    //   setError(err.message);
    // }); // res.data is an array of users

    return () => {
      controller.abort();
    };
  }, []);

  const deleteUser = (user: User) => {
    // optimistic update
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete(`https://jsonplaceholder.typicode.com/xusers/' + {user.id}`)
      .then(() => {
        console.log('User deleted');
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const newUser = { id: 0, title: 'Esther' };
    setUsers([newUser, ...users]);

    axios
      .post<User>('https://jsonplaceholder.typicode.com/users', newUser)
      .then((res) => {
        // console.log(res.data);
        setUsers([res.data, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(users);
      });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary-mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between ">
            {user.title}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </>
  );
};

export default App;

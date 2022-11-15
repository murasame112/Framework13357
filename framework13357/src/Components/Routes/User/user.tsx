import {FC} from "react";
import React from 'react';
import { useState, useEffect } from 'react';

export const User: FC = () => {

    const [users, setUsers] = useState<{name: string }[]>([]);
    
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(usersArr => {
            console.log(usersArr);
            setUsers(usersArr);
        });
// https://dev.to/coderjay06/how-to-build-a-search-bar-4673

    }, []);
    return(
        <>
        {users.length > 0 && (
          <div>
            {users.map(user => (
              <p>{user.name}</p>
            ))}
          </div>
        )}
      </>
    );
}
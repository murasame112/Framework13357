import {FC} from "react";
import React from 'react';
import { useState, useEffect } from 'react';

export const User: FC = () => {

    const [users, setUsers] = useState<[][]>([]);
    
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(usersArr => {
            console.log(usersArr);
            setUsers(usersArr);
        });


        
        // .then(usersArr => {
        //     console.log(usersArr);
        //     setUsers(usersArr);
        // });
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
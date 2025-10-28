import React, { use } from "react";

const Users = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log(users);

  return (
    <div>
      <div>
        <h3>Add a user: </h3>
        <form>
          <input type="text" /> <br />
          <input type="email" name="" id="" />
          <br />
          <button>Add User</button>
        </form>
      </div>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} <br /> Email: {user.email}
          </p>
        ))}
        
      </div>
    </div>
  );
};

export default Users;

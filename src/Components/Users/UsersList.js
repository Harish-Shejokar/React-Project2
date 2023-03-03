import React from "react";
import Card from "../UI/Card";
import Classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (


    <Card className={Classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={Math.random()}>
              {user.name} ({user.age} Years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;

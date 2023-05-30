import React, { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  user: {
    username: string;
    email: string;
    password: string;
  };
  children: ReactNode;
}

export const Home = ({ user, children }: Props) => {
  return (
    <div className="container">
      <h1>Welcome {user.username}</h1>
      <div>{children}</div>
    </div>
  );
};

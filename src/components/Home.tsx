import React, { ReactNode, useEffect, useState } from "react";
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
  const [userList, setUserList] = useState([] as any);
  const getUsers = async () => {
    let data = await fetch("https://reqres.in/api/users?page=1");
    let users = (await data.json()).data;
    data = await fetch("https://reqres.in/api/users?page=2");
    users = [...users, ...(await data.json()).data];
    setUserList(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="container mt-2">
      <div className="row">
        <h1 className="col-sm-8 col-md-6 col-lg-4">
          Welcome {user.username}</h1>
        <div
          className="text-right d-flex align-items-center justify-content-end col-sm-4 col-md-6 col-lg-8"
          
        >
          {children}
        </div>
      </div>
      <div className="row">
        {userList.map((user: any) => (
          <div className="col-sm-8 col-md-6 col-lg-4" key={user.id}>
            <div className="card mb-3 shadow-sm bg-white rounded">
              <img
                src={user.avatar}
                alt={user.first_name}
                height={100}
                width={100}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-capitalize font-weight-bold mb-0">
                  {user.first_name} {user.last_name}
                </h5>
                <p className="card-text text-capitalize mb-0">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

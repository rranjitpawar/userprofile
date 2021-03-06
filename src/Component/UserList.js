import React, { useState, useEffect, Fragment } from "react";
import { getUserList } from "../helper/userHelper";
import { Link } from "react-router-dom";
import Base from "./Base";

const UserList = () => {
  const [Users, setUsers] = useState([]);

  const loadUsers = () => {
    getUserList().then((data) => {
      if (data.error) {
        //setUsers({ error: data.error });
      } else {
        console.log(data.users);
        // commented temporarily
        // setUsers(data.users);
        localStorage.setItem("Users", JSON.stringify(data.users));
        //console.log(Users);
        // return data;
      }
    });
  };

  useEffect(() => {
    console.log("In use effect");
    loadUsers();
    console.log(Users);
  }, []);

  const displayUserList = () => {
    const userList = JSON.parse(localStorage.getItem("Users"));
    // console.log(userList);
    return (
      <div className="row rounded-pill">
        <div className=" col-lg-10 offset-sm-1 mt-5 py-5">
          <div className="col-lg-12 align-items-center">
            <div className="col-12 pb-5 pl-0 ml-0 pr-0 mr-0 rcorners2 bg-light">
              <div className="p-5 h3 font-weight-normal text-muted">
                Select an account
              </div>
              <div
                className="bg-white col-12 pl-0 ml-0"
                style={{ overflowY: "scroll", maxHeight: "430px" }}
              >
                {userList !== null &&
                  userList.map((user, index) => {
                    return (
                      <Fragment>
                       
                        <div
                          key={index}
                          className="col-10 pb-5 pt-4 border-bottom"
                          style={{ marginTop: "-15px", marginLeft:"80px" }}
                        >
                          <Link to={`/profile/${user.id}`}>
                            <span className="col-2 pl-0 float-left">
                              <img
                                className="rounded-circle"
                                src={user.profilepicture}
                                height="38px"
                                width="38px"
                              />
                            </span>
                            <span className="col-10 float-left pl-0 pb-3 text-left text-secondary h4 font-weight-normal">
                              {user.name}
                            </span>
                          </Link>
                        </div>
                      </Fragment>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base className="col-6 offset-3" title="Users list">
      {displayUserList()}
    </Base>
  );
};

export default UserList;

import React, { useState, useEffect } from "react";
import Base from "./Base";
import { Link } from "react-router-dom";

const UserProfile = ({ match }) => {
  const allUsersList = JSON.parse(localStorage.getItem("Users"));
  let usr = allUsersList.find((element) => element.id == match.params.userId);

  const [user, setUser] = useState({});

  const loadUserProfile = () => {
    console.log(match.params.userId);
    const allUsers = JSON.parse(localStorage.getItem("Users"));
    return allUsers.find((element) => element.id == match.params.userId);
    // setUser({...user, user:userData});
  };

  const printUser = (user) => {
    const { name, catchPhrase, bs } = usr.company;
    console.log(bs);
  };

  useEffect(() => {
    setUser(loadUserProfile());
  }, []);

  return (
    <Base className="col-12" title="User profile">
      <div className="col-12 p-5">
        {/* LEFT MENU */}
        <div
          className="col-2 float-left rounded-lg"
          style={{ minHeight: "800px", background: "#3C40C6" }}
        >
          <ul className="w-75 list-unstyled text-white h4 font-weight-normal text-left pl-3 pt-5">
            <li className="border-bottom text-white">Profile</li>
            <li className="border-bottom text-white-50">Posts</li>
            <li className="border-bottom text-white-50">Gallery</li>
            <li className="text-white-50">ToDo</li>
          </ul>
        </div>
        {/* HEADER */}
        <div className="col-10 float-left">
          <div className="row ml-3 pl-5 pb-5 border-bottom text-dark h3 font-weight-normal">
            <div className="col-9 text-left">Profile</div>
            <div className="col-3 text-right">
              <span className="col-2 float-left">
                <img
                  className="rounded-circle"
                  src={user.profilepicture}
                  height="38px"
                  width="38px"
                />
              </span>
              {user.name}
            </div>
          </div>
        </div>
        {/* USER PROFILE */}
        <div className="col-10 float-left pt-5">
          <div className="col-5 float-left text-center">
            {/* USER DETAILS */}
            <div
              className="col-12 float-left border-right"
              style={{ height: "650px" }}
            >
              <div className="col-12">
                <img
                  src={user.profilepicture}
                  className="rounded-circle"
                  height="265px"
                  width="267px"
                />
                <div className="col-12 h4 text-center pt-3 font-weight-normal text-dark">
                  {user.name}
                  <div className="pl-0 ml-0 col-3">
                    <ul className="list-unstyled h4 font-weight-normal text-right">
                      <li className="text-muted pl-0 pr-0">
                        Username&nbsp;&nbsp;:
                      </li>
                      <li className="text-muted pl-0 pr-0">
                        e-mail&nbsp;&nbsp;:
                      </li>
                      <li className="text-muted pl-0 pr-0">
                        Phone&nbsp;&nbsp;:
                      </li>
                      <li className="text-muted pl-0 pr-0">
                        Website&nbsp;&nbsp;:
                      </li>
                    </ul>
                  </div>
                  <div className="pl-0 ml-0 col-9 float-right">
                    <ul className="list-unstyled h4 font-weight-normal text-left">
                      <li className="text-muted pr-0">
                        <span className="text-dark">{user.username}</span>
                      </li>
                      <li className="text-muted pr-0">
                        <span className="text-dark">{user.email}</span>
                      </li>
                      <li className="text-muted pr-0">
                        <span className="text-dark">{user.phone}</span>
                      </li>
                      <li className="text-muted pr-0">
                        <span className="text-dark">{user.website}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* COMPANY DETAILS */}
            <div className="col-12 float-left ">
              <div className="col-9 offset-1 h4 pt-3 border-top font-weight-normal text-muted">
                Company
              </div>
              <div className="pl-0 ml-0 col-3">
                <ul className="list-unstyled h4 font-weight-normal text-right">
                  <li className="text-muted pl-0 pr-0">Name&nbsp;&nbsp;:</li>
                  <li className="text-muted pl-0 pr-0">
                    catchphrase&nbsp;&nbsp;:
                  </li>
                  <li className="text-muted pl-0 pr-0">bs&nbsp;&nbsp;:</li>
                </ul>
              </div>
              <div className="pl-0 ml-0 col-9 float-right">
                <ul className="list-unstyled h4 font-weight-normal text-left">
                  <li className="text-muted pr-0">
                    <span className="text-dark">{usr.company.name}</span>
                  </li>
                  <li className="text-muted pr-0">
                    <span className="text-dark">{usr.company.catchPhrase}</span>
                  </li>
                  <li className="text-muted pr-0">
                    <span className="text-dark">{usr.company.bs}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-7 float-left text-left">
            <div className="col-12 text-muted h4 font-weight-normal pt-4 pl-4">
              Address
            </div>
            <div className="col-12 text-muted h4 font-weight-normal pt-4 pl-4">
              <div className="pl-4 ml-3 col-2">
                <ul className="list-unstyled h4 font-weight-normal text-right">
                  <li className="text-muted pl-0 pr-0">Street&nbsp;&nbsp;:</li>
                  <li className="text-muted pl-0 pr-0">Suite&nbsp;&nbsp;:</li>
                  <li className="text-muted pl-0 pr-0">City&nbsp;&nbsp;:</li>
                  <li className="text-muted pl-0 pr-0">Zipcode&nbsp;&nbsp;:</li>
                </ul>
              </div>
              <div className="pl-0 ml-0 col-10 float-right">
                <ul className="list-unstyled h4 font-weight-normal text-left">
                  <li className="text-muted pr-0 ml-2">
                    <span className="text-dark">{usr.address.street}</span>
                  </li>
                  <li className="text-muted pr-0 ml-2">
                    <span className="text-dark">{usr.address.suite}</span>
                  </li>
                  <li className="text-muted pr-0 ml-2">
                    <span className="text-dark">{usr.address.city}</span>
                  </li>
                  <li className="text-muted pr-0 ml-2">
                    <span className="text-dark">{usr.address.zipcode}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ADDRESS AND MAP */}
      </div>
    </Base>
  );
};

export default UserProfile;

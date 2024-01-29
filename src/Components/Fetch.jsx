import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fetch.css";
import { Link, Outlet } from "react-router-dom";

const Fetch = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const endPoint = "https://api.github.com/users";
  const [gitIt, setGit] = useState([]);

  const getGIt = () => {
    axios.get(endPoint).then((response) => {
      console.log(response.data);
      setGit(response.data);
    });
  };

  useEffect(() => {
    console.log("useEffect");
    getGIt();
  }, []);

  return (
    <>
      <div className="p-3 bg-black text-white w100">

        <div className=" displayFlex gap-7 p-3 ease-in delay-150">
          {gitIt.map((element, index) => (
            <div key={index}>
              <div className="e-card playing">
                <div className="image"></div>

                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>

                <div className="infotop">
                  <img
                    src={element.avatar_url}
                    alt=""
                    width={100}
                    className="rounded-full mx-auto"
                  />
                  <br></br>
                  <h1>{element.login}</h1>
                  <div className="name">
                    <h3>Type : {element.type}</h3>
                    <h3>ID : {element.id}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fetch;

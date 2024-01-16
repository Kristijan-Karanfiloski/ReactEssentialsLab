import React, { createContext, useState } from "react";
import "./ComponentA.scss";
import ComponentB from "../componentB/ComponentB";

//useContext()= React hook that allows you to share values between multiple levels of components without passing props through each level

//PROVIDER COMPONENT
// 1. import {createContext} from 'react'
// 2. export const MyContext=createContext()
// 3. <MyContext.Provider value={value}>
//       <Child/>
//    </MyContext.Provider>

// CONSUMER COMPONENTS

// 1. import React,{useContext} form 'react'
//    import {MyCOntext} from './ComponentA'
// 2. const value = useContext(MyContext)

export const UserContext = createContext();

function ComponentA() {
  const [user, setuser] = useState("Kristijan");

  return (
    <>
      <div className="box">
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <UserContext.Provider value={user}>
          <ComponentB user={user} />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default ComponentA;

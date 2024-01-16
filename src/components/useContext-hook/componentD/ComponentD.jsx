import React, { useContext } from "react";
import { UserContext } from "../componentA/ComponentA";

function ComponentD() {
  //CONSUMER COMPONENT

  const user = useContext(UserContext);

  return (
    <>
      <div className="box">
        <h1>Component D</h1>
        <h2>{`Bye ${user}`}</h2>
      </div>
      <></>
    </>
  );
}

export default ComponentD;

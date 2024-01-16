import { useEffect, useState } from "react";
import "./UseEffectHook.scss";

const UseEffectHook = () => {
  //! useEffect()= React Hook that tells React  DO SOME CODE WHEN pick one:
  //                This component re-render
  //                This component mounts
  //                This state of a value changes

  //1 useEffect=(()=>{})               // Runs after every re-render
  //2 useEffect=(()=>{},[])           // Runs only on mount
  //3 useEffect=(()=>{},[value])      // Runs on mount + when a value changes

  //USES
  // #1 Event listeners
  // #2 DOM manipulation
  // #3 Subscription (real-time updates)
  // #4 Fetching Data from an API
  // #5 Clean up when a component unmounts

  const [countIncrement, setCountIncrement] = useState(10);
  const [countDecrement, setCountDecrement] = useState(5);
  const [color, setColor] = useState("green");

  ////////////////////////////////////////////////////////////////////////
  //THE POINT OF USING USE EFFECT

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED");
    };
  }, []);

  ////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    document.title = `Count ${countIncrement} ${color}`;
    return () => {
      //some cleanup code
    };
  }, [countIncrement, color]);

  const incrementCount = () => {
    setCountIncrement((c) => c + 1);
  };

  const decrementCount = () => {
    setCountDecrement((c) => c - 1);
  };

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
  };

  return (
    <div className="block">
      <p style={{ color: color }}>CountIncrement :{countIncrement}</p>
      <p>Count Decrement :{countDecrement}</p>

      <div className="block__item">
        <button className="block__item__btn" onClick={incrementCount}>
          Increment
        </button>
        <button className="block__item__btn" onClick={decrementCount}>
          Decrement
        </button>
        <button className="block__item__btn" onClick={changeColor}>
          Change Color
        </button>
      </div>

      <p>Window Width:{width}</p>
      <p>Window Height:{height}</p>
    </div>
  );
};

export default UseEffectHook;

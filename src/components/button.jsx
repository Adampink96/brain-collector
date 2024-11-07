import { useEffect, useState } from "react";

export default function Button() {
  const [count, setCount] = useState(localStorage.getItem("brains") || 0);
  const [bps, setBps] = useState(localStorage.getItem("bps") || 0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + bps);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [bps]);

  //function buyUpgrades(){
  //  setBps(bps + {upgrade.increase});

  // };
  return (
    <div className="container">
      <button
        onClick={function () {
          console.log("you clicked");
          setCount(count + 1);
          localStorage.setItem("brains", count);
        }}
      >
        brains
      </button>
      <p className="para">brains:{count}</p>
      <p className="para">bps:{bps}</p>
      <button disabled={count < 100 ? true : false}>upgrade 1</button>
      <button disabled={count < 500 ? true : false}>upgrade 2</button>
      <button disabled={count < 1000 ? true : false}>upgrade 3</button>
      <button disabled={count < 2000 ? true : false}>upgrade 4</button>
      <button disabled={count < 5000 ? true : false}>upgrade 5</button>
      <button disabled={count < 10000 ? true : false}>upgrade 6</button>
      <button disabled={count < 20000 ? true : false}>upgrade 7</button>
      <button disabled={count < 50000 ? true : false}>upgrade 8</button>
      <button disabled={count < 100000 ? true : false}>upgrade 9</button>
      <button disabled={count < 200000 ? true : false}>upgrade 10</button>
    </div>
  );
}

//function App() {
// const [count, setCount] = useState(0)

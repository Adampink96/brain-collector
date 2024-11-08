import { useState, useEffect } from "react";

export default function Up() {
  const [upgrades, setUpgrades] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setUpgrades(data);
      console.log(data);
    }
    fetchData();
    console.log("yay");
    console.log(fetchData);
  }, []);

  const names = [
    {
      name: "combat knife",
    },
    {
      name: "handgun",
    },
    {
      name: "uzi",
    },
    {
      name: "assult rifle",
    },
    {
      name: "grenade",
    },
    {
      name: "molotov",
    },
    {
      name: "flamethrower",
    },
    {
      name: "rocket launcher",
    },
    {
      name: "nuke",
    },
    {
      name: "brain desimation",
    },
  ];
  function buyUpgrades(upgrade) {
    setBps(bps + upgrade.increase);
    setCount(count - upgrade.cost);
    localStorage.setItem("bps", bps, "brains", count);
  }
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("brains")) || 0
  );
  const [bps, setBps] = useState(parseInt(localStorage.getItem("bps")) || 1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + bps);
    }, 1000);
    localStorage.setItem("bps", bps);
    return () => {
      clearInterval(interval);
    };
  }, [bps]);

  let biteAudio = new Audio("./brainbite.mp3");
  let resetAudio = new Audio("./reset.mp3");
  return (
    // <div className="container">
    <div>
      <img
        onClick={function () {
          console.log("you clicked");
          setCount(count + 1);
          biteAudio.play();
          localStorage.setItem("brains", count);
        }}
        src="./zombie1.jpg"
        alt="zombie"
      />
      {/* <button
        className="container"
        onClick={function () {
          console.log("you clicked");
          setCount(count + 1);
          biteAudio.play();
          localStorage.setItem("brains", count);
        }}
      >
        brains
      </button> */}
      <button
        className="container"
        onClick={function () {
          console.log("reset");
          resetAudio.play();
          setCount(0);
          setBps(1);
          localStorage.clear("brains");
        }}
      >
        reset
      </button>
      <p className="para">brains:{count}</p>
      <p className="para">bps:{bps}</p>

      <h2>upgrades</h2>
      <ul>
        {upgrades.map((upgrade, index) => (
          <button onClick={() => buyUpgrades(upgrade)} key={index}>
            {upgrade.cost}
            &nbsp;
            {upgrade.increase}
            &nbsp;
            {names[index].name}
          </button>
        ))}
      </ul>
    </div>
  );
}

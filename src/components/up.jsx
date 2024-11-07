import { useState, useEffect } from "react";

export default function Up() {
  const [upgrades, setUpgrades] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https:cookie-upgrade-api.vercel.app/api/upgrades"
      );
      const data = await response.json();
      setUpgrades(data);
    }
    fetchData();
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
  const [bps, setBps] = useState(parseInt(localStorage.getItem("bps")) || 0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + bps);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [bps]);

  return (
    <div>
      <h2>upgrades</h2>
      <ul>
        {upgrades.map((upgrade, index) => (
          <button onClick={() => buyUpgrades(upgrade)} key={index}>
            {upgrade.cost}

            {upgrade.increase}

            {names[index].name}
          </button>
        ))}
      </ul>

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
        <button
          onClick={function () {
            console.log("reset");
          }}
        >
          reset
        </button>
        <p className="para">brains:{count}</p>
        <p className="para">bps:{bps}</p>
      </div>
    </div>
  );
}

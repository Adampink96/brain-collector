import { useState } from "react";

export default function Show() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  return (
    <div>
      <button onClick={handleShow}>
        {show ? "Hide instructions" : "Show instructions"}
      </button>
      {show && (
        <p>
          Welcome to Brain Collector, collect as many brains as possible hitting
          the brains button. the more brains you collect the more upgrades you
          can purchase. the upgrade button displays both the cost to brains
          first and the increase to the bps. now go harvest those brains .....
          youve got abit of red on you.
        </p>
      )}
    </div>
  );
}

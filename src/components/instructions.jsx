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
          can purchase. the upgrade buttons numbers corespond to the list. the
          cost and affect to the bps is shown next to each upgrade. enjoy and
          collect them brains.
        </p>
      )}
    </div>
  );
}

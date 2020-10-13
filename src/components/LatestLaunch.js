import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LatestLaunch() {
  const [launchData, setLaunchData] = useState(null);
  const [launchId, setLaunchId] = useState(null);

  // useEffect
  // 1st argument: callback
  // 2nd argument: dependency array

  useEffect(() => {
    console.log("Hello I am a side effect");
    async function getLaunchData() {
      const response = await axios.get(
        "https://api.spacexdata.com/v4/launches/latest"
      );

      console.log(response.data);
      // set the state
      setLaunchData(response.data);
      // set to latest launch Id
      setLaunchId(response.data.id);
    }

    getLaunchData();
  }, []);

  useEffect(() => {
    console.log("Launch id has changed:", launchId);
    console.log("fetch more data");
  }, [launchId]);

  if (launchData === null) {
    return <h1>Loading</h1>;
  }

  const message =
    launchData.success === true ? "Elon did a thing" : "Elon did a stupid";

  function decrementLaunchId() {
    setLaunchId(launchId - 1);
  }

  return (
    <div>
      <h1>{launchData.name}</h1>
      <img src={launchData.links.patch.small} />
      <h4>{message}</h4>
      <button onClick={decrementLaunchId}>Previous launch</button>
      Viewing launchId: {launchId}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LatestLaunch() {
  const [launchData, setLaunchData] = useState(null);

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
    }

    getLaunchData();
  }, []);

  if (launchData === null) {
    return <h1>Loading</h1>;
  }

  const message =
    launchData.success === true ? "Elon did a thing" : "Elon did a stupid";

  return (
    <div>
      <h1>{launchData.name}</h1>
      <img src={launchData.links.patch.small} />
      <h4>{message}</h4>
    </div>
  );
}

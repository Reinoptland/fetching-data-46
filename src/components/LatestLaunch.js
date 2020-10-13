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

      console.log(response);
    }

    getLaunchData();
  }, []);

  if (launchData === null) {
    return <h1>Loading</h1>;
  }

  return <div>Hello World</div>;
}

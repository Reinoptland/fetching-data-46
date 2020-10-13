import React, { useState } from "react";

export default function LatestLaunch() {
  const [launchData, setLaunchData] = useState(null);

  if (launchData === null) {
    return <h1>Loading</h1>;
  }

  return <div>Hello World</div>;
}

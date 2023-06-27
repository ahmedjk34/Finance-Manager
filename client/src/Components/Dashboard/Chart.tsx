import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from "react-chartjs-2";
type Props = {};

function Chart({}: Props) {
  const [labels, setLabels] = useState(null);
  const [reoccurrence, setReoccurrence] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/expenses/graphData")
      .then((response) => {
        setLabels(Object.keys(response.data));
        setReoccurrence(Object.values(response.data));
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(labels, reoccurrence);
  return (
    <div>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              data: reoccurrence,
              backgroundColor: ["red", "green", "purple", "yellow"],
            },
          ],
        }}
        options={[]}
      ></Pie>
    </div>
  );
}

export default Chart;

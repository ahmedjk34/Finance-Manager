import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut, Pie } from "react-chartjs-2";
type Props = {};

function Chart({}: Props) {
  const [labels, setLabels] = useState(undefined);
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
  return (
    <div className="chart-container">
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
        options={{
          responsive: true,
        }}
      ></Pie>
    </div>
  );
}

export default Chart;

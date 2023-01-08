import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  PieController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

interface DataConfig {
  label: string;
  data: number[];
  backgroundColor: string[];
}

interface Props {
  config: { labels: string[]; datasets: DataConfig[] };
}

export default function PieChart({ config }: Props): JSX.Element {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    PieController,
  );
  return <Pie data={config} />;
}

import { useEffect, useState } from "react";
import { FormResponse } from "@/types";
import PieChart from "../../PieChart/PieChart";

export const countries = {
  brasil: {
    amount: 0,
    color: "#47C15A",
  },
  argentina: {
    amount: 0,
    color: "#8BEEF5",
  },
  chile: {
    amount: 0,
    color: "#E54848",
  },
  colombia: {
    amount: 0,
    color: "#F7EB59",
  },
  mexico: {
    amount: 0,
    color: "#FFBE67)",
  },
  peru: {
    amount: 0,
    color: "#E988CC",
  },
  uruguay: {
    amount: 0,
    color: "#9D8596",
  },
  venezuela: {
    amount: 0,
    color: "#557A8C",
  },
};

interface Props {
  data: FormResponse[];
}
type Country =
  | "brasil"
  | "argentina"
  | "chile"
  | "colombia"
  | "mexico"
  | "peru"
  | "uruguay"
  | "venezuela";

export default function ChartCountries({ data }: Props): JSX.Element {
  const [dataset, setDataset] = useState({
    labels: [""],
    datasets: [
      {
        label: "Personas",
        data: [0],
        backgroundColor: ["#fff"],
      },
    ],
  });
  const handleCountriesData = (): void => {
    data.forEach((response) => {
      countries[response.country_of_origin as Country].amount += 1;
    });
  };
  const prepareDataset = (): void => {
    const labels = Object.keys(countries).map(
      (name) => name.charAt(0).toUpperCase() + name.slice(1),
    );
    const data = Object.values(countries).map((country) => country.amount);
    const backgroundColor = Object.values(countries).map(
      (country) => country.color,
    );

    setDataset({
      labels,
      datasets: [
        {
          label: "Personas",
          data,
          backgroundColor,
        },
      ],
    });
  };

  useEffect(() => {
    handleCountriesData();
    prepareDataset();

    return () => {
      Object.keys(countries).forEach((country) => {
        countries[country as Country].amount = 0;
      });
    };
  }, []);

  return <PieChart config={dataset} />;
}

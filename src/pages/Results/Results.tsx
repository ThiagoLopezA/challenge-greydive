import { useEffect, useState } from "react";
import { getResponses } from "@/database";
import { ChartCountries, ChartCountriesFallback } from "@/components";
import { FormResponse } from "@/types";

export default function Results(): JSX.Element {
  const [results, setResults] = useState([] as FormResponse[]);
  const [loading, setLoading] = useState(true);
  const handleResponses = async (): Promise<void> => {
    const responses = await getResponses();
    const data = responses.docs.map((doc) => doc.data());
    setResults(data as FormResponse[]);
  };

  useEffect(() => {
    handleResponses()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {loading ? <ChartCountriesFallback /> : <ChartCountries data={results} />}
    </>
  );
}

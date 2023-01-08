/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from "react";
import { getResponses } from "@/database";
import { ChartCountries, ChartCountriesFallback } from "@/components";
import { FormResponse } from "@/types";

export default function Results(): JSX.Element {
  const [results, setResults] = useState<FormResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleResponses = async (): Promise<void> => {
    try {
      const responses = await getResponses();
      const data = responses.docs.map((doc) => doc.data()) as FormResponse[];
      setResults(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleResponses();
  }, []);

  return (
    <>
      {loading ? <ChartCountriesFallback /> : <ChartCountries data={results} />}
    </>
  );
}

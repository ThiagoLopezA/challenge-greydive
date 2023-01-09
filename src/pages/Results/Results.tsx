/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from "react";
import { getResponses } from "@/database";
import {
  ChartCountries,
  ChartCountriesFallback,
  Container,
  Response,
  ResponseFallback,
} from "@/components";
import { Grid, Stack } from "@mui/material";
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
      <Grid item xs={11} md={4}>
        <Container>
          {loading ? (
            <ChartCountriesFallback />
          ) : (
            <ChartCountries data={results} />
          )}
        </Container>
      </Grid>
      <Grid item xs={11} md={8} lg={8}>
        {loading ? (
          <ResponseFallback />
        ) : (
          <Stack>
            {results.map((result, i) => {
              return <Response key={i} data={result} />;
            })}
          </Stack>
        )}
      </Grid>
    </>
  );
}

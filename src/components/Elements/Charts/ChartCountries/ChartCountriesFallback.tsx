import { Skeleton, Box } from "@mui/material";

export default function ChartCountriesFallback(): JSX.Element {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Skeleton variant="rounded" width={250} height={70} />
        <Skeleton
          variant="circular"
          width={280}
          height={280}
          sx={{ marginTop: 2 }}
        />
      </Box>
    </>
  );
}

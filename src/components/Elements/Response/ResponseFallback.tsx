import { Skeleton } from "@mui/material";

export default function ResponseFallback(): JSX.Element {
  return (
    <>
      <Skeleton
        variant="rounded"
        width="100%"
        height={80}
        sx={{ marginBottom: 1 }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={80}
        sx={{ marginBottom: 1 }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={80}
        sx={{ marginBottom: 1 }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={80}
        sx={{ marginBottom: 1 }}
      />
    </>
  );
}

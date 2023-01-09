/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Grid, styled, Box } from "@mui/material";
import { Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const Wrapper = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: "#303030",
  margin: 0,
  padding: "1rem",
});

export default function Layout(): JSX.Element {
  return (
    <Wrapper container spacing={1}>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
}

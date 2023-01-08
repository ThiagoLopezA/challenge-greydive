/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Grid, styled, Box } from "@mui/material";
import { Navbar } from "@/components";
import { Outlet } from "react-router-dom";

const Wrapper = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#303030",
  margin: 0,
});

const Container = styled(Box)({
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 5,
  border: "1px solid #ccc",
  boxShadow: "rgba(209, 65, 90, 0.2) 0px 7px 29px 0px",
  minHeight: "27rem",
});

export default function Layout(): JSX.Element {
  return (
    <Wrapper container>
      <Grid item xs={11} md={6} lg={4}>
        <Navbar />
        <Container>
          <Outlet />
        </Container>
      </Grid>
    </Wrapper>
  );
}

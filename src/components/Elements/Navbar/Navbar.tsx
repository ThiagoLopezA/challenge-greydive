import React from "react";
import { ButtonGroup, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar(): JSX.Element {
  const handleNavigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: 40,
        margin: 4,
        justifyContent: "center",
      }}
    >
      <ButtonGroup>
        <Button
          variant="primary"
          sx={{ marginRight: 0.2 }}
          onClick={() => {
            handleNavigate("/survey");
          }}
        >
          Formulario
        </Button>
        <Button
          variant="primary"
          sx={{ marginLeft: 0.2 }}
          onClick={() => {
            handleNavigate("/results");
          }}
        >
          Resultados
        </Button>
      </ButtonGroup>
    </Box>
  );
}

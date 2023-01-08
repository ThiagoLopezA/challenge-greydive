import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            textTransform: "none",
            backgroundColor: "#d30070",
            color: "#fff",
            borderRadius: 15,
            transition: "500ms",
            padding: ".6rem",
            fontSize: ".9rem",
            "&:hover": {
              backgroundColor: "#A8004E",
            },
          },
        },
      ],
    },
  },
});

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

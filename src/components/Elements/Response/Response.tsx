import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Typography,
  Stack,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/MailOutline";
import CakeIcon from "@mui/icons-material/CakeOutlined";
import EarthIcon from "@mui/icons-material/PublicOutlined";
import { FormResponse } from "@/types";
import { Timestamp } from "firebase/firestore";
import moment from "moment";

const ItemWrapper = styled(Stack)({
  alignItems: "center",
});

interface Props {
  data: FormResponse;
}

export default function Response({ data }: Props): JSX.Element {
  const { seconds, nanoseconds } = data.birth_date;
  const birthDate = new Timestamp(seconds, nanoseconds).toDate();
  const formattedDate = moment(birthDate).format("DD/MM/YYYY");
  return (
    <Accordion sx={{ width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ alignItems: "center" }}
      >
        <Avatar />
        <Typography
          variant="subtitle1"
          sx={{ marginLeft: 1, alignSelf: "center" }}
        >
          Respuesta de <span style={{ fontWeight: 800 }}>{data.full_name}</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ItemWrapper direction="row">
          <MailIcon sx={{ color: "#d30070", height: 18, width: 22 }} />
          <Typography sx={{ fontWeight: 400 }}>Email: {data.email}</Typography>
        </ItemWrapper>
        <ItemWrapper direction="row">
          <CakeIcon sx={{ color: "#d30070", height: 18, width: 22 }} />
          <Typography sx={{ fontWeight: 400 }}>
            Fecha de nacimiento: {formattedDate}
          </Typography>
        </ItemWrapper>
        <ItemWrapper direction="row">
          <EarthIcon sx={{ color: "#d30070", height: 18, width: 22 }} />
          <Typography sx={{ fontWeight: 400 }}>
            País de origen: {data.country_of_origin}
          </Typography>
        </ItemWrapper>
      </AccordionDetails>
    </Accordion>
  );
}

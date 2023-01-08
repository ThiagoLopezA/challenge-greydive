/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SurveyItem, FieldValues } from "@/types";
import { ItemHandler } from "@/components";
import { Stack } from "@mui/material";
import { FormikProps } from "formik";
interface Props {
  inputs: SurveyItem[];
  formik: FormikProps<FieldValues>;
}

export default function Survey({ inputs, formik }: Props): JSX.Element {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        {inputs.map((item: SurveyItem, i: number) => {
          return <ItemHandler key={i} input={item} config={formik} />;
        })}
      </Stack>
    </form>
  );
}

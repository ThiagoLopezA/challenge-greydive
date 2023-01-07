/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SurveyItem } from "../../types";
import { Stack } from "@mui/material";
import { items } from "../../json/db.json";
import { ItemHandler } from "../../components";
import * as Yup from "yup";
import { useFormik } from "formik";

const valuesInitializer = (inputs: SurveyItem[]) => {
  const values = inputs.reduce((obj, item) => {
    if (item.name != null) {
      const name: string = item.name;
      if (item.type === "checkbox") return { ...obj, [name]: false };
      if (item.type === "date") return { ...obj, [name]: new Date() };
      return { ...obj, [name]: "" };
    }
    return { ...obj };
  }, {});
  return values;
};

type Schemas =
  | Yup.StringSchema
  | Yup.NumberSchema
  | Yup.BooleanSchema
  | Yup.DateSchema;

const validationsInitializer = (inputs: SurveyItem[]): object => {
  const cases = {
    text: Yup.string(),
    number: Yup.number(),
    email: Yup.string().email(),
    select: Yup.string(),
    checkbox: Yup.boolean(),
    date: Yup.date(),
  };
  const validations = inputs.reduce((vals, item) => {
    if (item.name != null && item.type !== "submit") {
      const name: string = item.name;
      const initial: Schemas = cases[item.type];
      if (item.required !== null && item.required === true)
        return {
          ...vals,
          [name]: initial.required("Este campo es requerido"),
        };
      return { ...vals, [name]: initial };
    }
    return { ...vals };
  }, {});
  const schema = Yup.object().shape(validations);
  return schema;
};

export default function Survey(): JSX.Element {
  const inputs = items as SurveyItem[];
  const initialValues = valuesInitializer(inputs);
  const validationSchema = validationsInitializer(inputs);
  const onSubmit = (values: object): void => {
    console.log(values);
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  console.log(formik.errors);
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

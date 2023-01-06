import { SurveyItem, ItemType } from "../../types";
import { Stack } from "@mui/material";
import { items } from "../../json/db.json";
import { ItemHandler } from "../../components";
import * as Yup from "yup";
import { useFormik } from "formik";

const valuesInitializer = (inputs: SurveyItem[]): object => {
  const values = inputs.reduce((obj, item) => {
    if (item.name != null) {
      const name: string = item.name;
      return { ...obj, [name]: "" };
    }
    return { ...obj };
  }, {});
  return values;
};

const validationsInitializer = (inputs: SurveyItem[]): object => {
  const cases = {
    text: Yup.string(),
    number: Yup.number(),
    email: Yup.string().email(),
    select: Yup.string(),
    checkbox: Yup.boolean(),
    date: Yup.date(),
  };
  // const validations = {};
  const validations = inputs.reduce((vals, item) => {
    if (item.name != null) {
      const name: string = item.name;
      const initial = cases[item.type as ItemType];
      return { ...vals, [name]: initial };
    }
    return { ...vals };
  }, {});
  const schema = Yup.object().shape(validations);
  return schema;
};

export default function Survey(): JSX.Element {
  const inputs: SurveyItem[] = items;
  const initialValues = valuesInitializer(inputs);
  const validationSchema = validationsInitializer(inputs);
  const onSubmit = (values: object): void => {
    console.log(values);
  };
  const formik = useFormik({ validationSchema, initialValues, onSubmit });
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

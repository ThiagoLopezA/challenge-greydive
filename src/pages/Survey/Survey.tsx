/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SurveyForm } from "@/components";
import { items } from "@/data/db.json";
import { SurveyItem, Schemas } from "@/types";
import { alerts } from "@/utils/alerts.utils";
import { useFormik } from "formik";
import { saveResponse } from "@/database";
import * as Yup from "yup";

const checkType = (type: string): boolean => {
  const types = ["text", "number", "email", "select", "checkbox", "date"];
  return types.includes(type);
};
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
      if (
        item.required !== null &&
        item.required === true &&
        checkType(item.type)
      )
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
  const onSubmit = async (values: object): Promise<void> => {
    await saveResponse(values);
    await alerts.success(
      "¡Gracias por responder este formulario!",
      "Tu respuesta fue guardada con exito",
    );
    formik.resetForm();
  };
  const initialValues = valuesInitializer(inputs);
  const validationSchema = validationsInitializer(inputs);
  const formik = useFormik({ validationSchema, initialValues, onSubmit });
  return <SurveyForm formik={formik} inputs={inputs} />;
}

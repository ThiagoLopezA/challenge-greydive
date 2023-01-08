import * as Yup from "yup";
import { FormikProps } from "formik";
export interface SurveyOption {
  label: string;
  value: string;
}
export type ItemType =
  | "text"
  | "number"
  | "email"
  | "checkbox"
  | "select"
  | "date"
  | "submit";

export interface SurveyItem {
  type: ItemType;
  label: string;
  name: string;
  required?: boolean;
  options?: SurveyOption[];
}

export type Schemas =
  | Yup.StringSchema
  | Yup.NumberSchema
  | Yup.BooleanSchema
  | Yup.DateSchema;

export interface FormResponse {
  birth_date: {
    nanoseconds: number;
    seconds: number;
  };
  country_of_origin: string;
  email: string;
  full_name: string;
  terms_and_conditions: boolean;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface FieldValues {
  [key: string]: string;
}

export interface FieldProps {
  item: SurveyItem;
  config: FormikProps<FieldValues>;
}

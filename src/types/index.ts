import * as Yup from "yup";
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

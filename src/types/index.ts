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
  | "date";

export interface SurveyItem {
  type: string;
  label: string;
  name?: string;
  required?: boolean;
  options?: SurveyOption[];
}

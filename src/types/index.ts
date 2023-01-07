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

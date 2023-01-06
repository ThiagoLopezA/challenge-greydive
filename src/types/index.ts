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

// export interface ItemConfig {
//   handleSubmit: () => void;
//   handleChange: () => void;
//   values: object;
//   errors: object;
//   touched: object;
// }

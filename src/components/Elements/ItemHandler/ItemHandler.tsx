import { SurveyItem } from "../../../types";
import { TextField, Checkbox, MenuItem, Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { FormikProps } from "formik";
interface Props {
  input: SurveyItem;
  config: FormikProps<object>;
}

interface FieldProps {
  item: SurveyItem;
  config: FormikProps<object>;
}

/**
 * {
 *  name: "name",
 *  age: "age",
 *  email: "email",
 * }
 */

function InputField({ item, config }: FieldProps): JSX.Element {
  const { type, label, name } = item;
  return (
    <TextField
      type={type}
      name={name}
      onChange={config.handleChange}
      onBlur={config.handleBlur}
      value={name != undefined && config.values[name]}
      error={config.touched[name] && Boolean(config.errors[name])}
      helperText={config.touched[name] && config.errors[name]}
      label={label}
    />
  );
}

function SelectField({ item, config }: FieldProps): JSX.Element {
  const { label, name } = item;
  return (
    <TextField
      label={label}
      name={name}
      onChange={config.handleChange}
      onBlur={config.handleBlur}
      value={config.values[name]}
      error={config.touched[name] && Boolean(config.errors[name])}
      helperText={config.touched[name] && config.errors[name]}
      select
    >
      {item.options?.map((option, i) => {
        return (
          <MenuItem value={option.value} key={i}>
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
}

function DateField({ item, config }: FieldProps): JSX.Element {
  const { label, name } = item;
  return (
    <DesktopDatePicker
      label={label}
      name={name}
      onChange={config.handleChange}
      onBlur={config.handleBlur}
      value={config.values[name]}
      error={config.touched[name] && Boolean(config.errors[name])}
      helperText={config.touched[name] && config.errors[name]}
      inputFormat="MM/DD/YYYY"
      // value={value}
      // onChange={handleChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

function SubmitField({ item, config }: FieldProps): JSX.Element {
  const { label } = item;
  return <Button type="submit">{label}</Button>;
}

export default function ItemHandler({ input, config }: Props): JSX.Element {
  const { type } = input;
  switch (type) {
    case "text":
    case "number":
    case "email":
      return <InputField item={input} config={config} />;
    case "select":
      return <SelectField item={input} config={config} />;
    case "checkbox":
      return <Checkbox />;
    case "date":
      return <DateField item={input} config={config} />;
    default:
      return <SubmitField item={input} config={config} />;
  }
}

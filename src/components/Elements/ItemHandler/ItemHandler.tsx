/* eslint-disable react/jsx-props-no-spreading */
import { SurveyItem, FieldProps, FieldValues } from "@/types";
import {
  TextField,
  Checkbox,
  MenuItem,
  Button,
  TextFieldProps,
  FormControlLabel,
  Box,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { FormikProps } from "formik";
import moment from "moment";

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface Props {
  input: SurveyItem;
  config: FormikProps<FieldValues>;
}

function InputField({ item, config }: FieldProps): JSX.Element {
  const { type, label, name } = item;
  return (
    <TextField
      type={type}
      name={name}
      onChange={config.handleChange}
      onBlur={config.handleBlur}
      value={config.values[name]}
      error={Boolean(config.touched[name]) && Boolean(config.errors[name])}
      helperText={Boolean(config.touched[name]) && config.errors[name]}
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
      error={Boolean(config.touched[name]) && Boolean(config.errors[name])}
      helperText={Boolean(config.touched[name]) && config.errors[name]}
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
  const handleDate = (date: moment.Moment | null, name: string): void => {
    if (date !== null) config.setFieldValue(name, date.toDate());
  };
  return (
    <DesktopDatePicker
      label={label}
      onChange={(date: moment.Moment | null) => {
        handleDate(date, name);
      }}
      value={config.values[name]}
      PopperProps={{
        placement: "auto",
      }}
      inputFormat="DD-MM-yyyy"
      renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
        <TextField
          {...params}
          sx={{
            "& .MuiSelected": {
              color: "red",
            },
          }}
          name={name}
          error={
            (config.touched[name] ?? false) && Boolean(config.errors[name])
          }
          helperText={(config.touched[name] ?? false) && config.errors[name]}
        />
      )}
    />
  );
}

function SubmitField({ item, config }: FieldProps): JSX.Element {
  const { label } = item;
  return (
    <Button type="submit" variant="primary" size="large">
      {label}
    </Button>
  );
}

function CheckField({ item, config }: FieldProps): JSX.Element {
  const { name, label, required } = item;
  const isRequired = !!(required ?? false);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={Boolean(config.values[name])}
          onChange={config.handleChange}
          required={isRequired}
          sx={{
            color: "#d30070",
            "&.Mui-checked": {
              color: "#d30070",
            },
          }}
        />
      }
      label={label}
      name={name}
    />
  );
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
      return <CheckField item={input} config={config} />;
    case "date":
      return <DateField item={input} config={config} />;
    case "submit":
      return <SubmitField item={input} config={config} />;
    default:
      return (
        <Box
          sx={{
            backgroundColor: "#e57373",
            padding: 2,
            borderRadius: 1,
            border: "1px solid #d32f2f",
            color: "#f3f3f3",
          }}
        >
          El tipo asignado en el JSON no es valido.
        </Box>
      );
  }
}

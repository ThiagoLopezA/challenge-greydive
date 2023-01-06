import { SurveyItem } from "../../../types";
import { TextField, Checkbox, MenuItem, Button } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

interface Props {
  input: SurveyItem;
}

function InputField({ item }: { item: SurveyItem }): JSX.Element {
  const { type, label } = item;
  return <TextField type={type} label={label} />;
}

function SelectField({ item }: { item: SurveyItem }): JSX.Element {
  const { label } = item;
  return (
    <TextField label={label} select>
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

function DateField({ item }: { item: SurveyItem }): JSX.Element {
  const { label } = item;
  return (
    <DesktopDatePicker
      label={label}
      inputFormat="MM/DD/YYYY"
      // value={value}
      // onChange={handleChange}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} />}
    />
  );
}

export default function ItemHandler({ input }: Props): JSX.Element {
  const { type, label } = input;
  switch (type) {
    case "text":
    case "number":
    case "email":
      return <InputField item={input} />;
    case "select":
      return <SelectField item={input} />;
    case "checkbox":
      return <Checkbox />;
    case "date":
      return <DateField item={input} />;
    default:
      return <Button>{label}</Button>;
  }
}

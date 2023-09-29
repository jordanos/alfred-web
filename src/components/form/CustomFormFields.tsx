import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import {
  DateTimePicker,
  MobileDatePicker,
  TimePicker,
} from '@mui/x-date-pickers';
import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldOptionsType = { value: any; label: string }[];

export interface BaseFieldProps {
  name: string;
  label: string;
  options?: FieldOptionsType | undefined;
  required: boolean;
  type?: string | undefined;
}

interface FieldProps extends BaseFieldProps {
  control: Control<FieldValues>;
}

const defaultProps = { type: 'text', options: undefined };

export const CustomTextField: FC<FieldProps> = ({
  name,
  control,
  label,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          variant="standard"
          sx={{ my: 1 }}
          label={label}
          {...field}
          error={!!error}
          helperText={error ? error.message : null}
          {...rest}
        />
      )}
    />
  );
};

CustomTextField.defaultProps = {
  ...defaultProps,
};

export const CustomTextAreaField: FC<FieldProps> = ({
  name,
  control,
  label,
  ...rest
}) => {
  const multiline = true;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          variant="standard"
          sx={{ my: 1 }}
          label={label}
          {...field}
          error={!!error}
          helperText={error ? error.message : null}
          multiline={multiline}
          minRows={multiline ? 3 : undefined}
          maxRows={multiline ? 10 : undefined}
          {...rest}
        />
      )}
    />
  );
};

CustomTextAreaField.defaultProps = {
  ...defaultProps,
};

export const CustomSwitchField: FC<Omit<FieldProps, 'type' | 'options'>> = ({
  name,
  control,
  label,
  required,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormGroup>
          <FormControlLabel
            required={required}
            control={<Switch checked={field.value} onChange={field.onChange} />}
            label={label}
          />
        </FormGroup>
      )}
    />
  );
};

export const CustomSelectField: FC<FieldProps> = ({
  name,
  control,
  label,
  options,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl variant="standard" fullWidth sx={{ my: 1 }} {...rest}>
          <InputLabel id={`${name}Label`}>{label}</InputLabel>
          {error && (
            <FormHelperText id={`${name}Helper`} sx={{ color: 'error' }}>
              {error.message}
            </FormHelperText>
          )}
          <Select
            variant="standard"
            fullWidth
            label={label}
            {...field}
            {...rest}
            error={!!error}
          >
            {options?.map((item) => (
              <MenuItem key={item.label} value={item.value}>
                <Box>{item.label}</Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

CustomSelectField.defaultProps = {
  ...defaultProps,
};

export const CustomDateField: FC<FieldProps> = ({
  name,
  control,
  label,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MobileDatePicker
          sx={{ my: 1 }}
          label={label}
          {...field}
          {...rest}
          slotProps={{
            textField: {
              variant: 'standard',
              fullWidth: true,
              error: !!error,
              helperText: error ? error.message : null,
              ...rest,
            },
          }}
        />
      )}
    />
  );
};

CustomDateField.defaultProps = {
  ...defaultProps,
};

export const CustomDateTimeField: FC<FieldProps> = ({
  name,
  control,
  label,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DateTimePicker
          sx={{ my: 1 }}
          label={label}
          {...field}
          {...rest}
          slotProps={{
            textField: {
              variant: 'standard',
              fullWidth: true,
              error: !!error,
              helperText: error ? error.message : null,
              ...rest,
            },
          }}
        />
      )}
    />
  );
};

CustomDateTimeField.defaultProps = {
  ...defaultProps,
};

export const CustomTimeField: FC<FieldProps> = ({
  name,
  control,
  label,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TimePicker
          sx={{ my: 1 }}
          label={label}
          {...field}
          {...rest}
          slotProps={{
            textField: {
              variant: 'standard',
              fullWidth: true,
              error: !!error,
              helperText: error ? error.message : null,
              ...rest,
            },
          }}
        />
      )}
    />
  );
};

CustomTimeField.defaultProps = {
  ...defaultProps,
};

interface ButtonProps {
  isSubmitting: boolean;
  isDisabled?: boolean;
  text?: string;
}

export const SubmitButton: FC<ButtonProps> = ({
  isSubmitting,
  isDisabled,
  text = 'Continue',
  ...props
}) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      disabled={isSubmitting || isDisabled}
      sx={{ my: 1 }}
      {...props}
    >
      {isSubmitting ? <CircularProgress size={22} /> : text}
    </Button>
  );
};

SubmitButton.defaultProps = {
  isDisabled: false,
  text: 'submit',
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormField } from 'components/form/CustomForm';

export const getInitialValues = (
  fields: FormField[]
): { [key: string]: any } => {
  const init: { [key: string]: any } = {};
  fields.forEach((field) => {
    init[field.name] = field.initValue;
  });
  return init;
};

import { ErrorMessage, Field, Label } from './FormField.styled';

export const FormField = ({ label, type, name }) => {
  return (
    <Label>
      {label}
      <Field type={type} name={name} />
      <ErrorMessage name={name} component="span" />
    </Label>
  );
};

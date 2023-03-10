// import './form-input.styles.jsx';
import { FormInputLabel, Group, Input } from './form-input.styles';
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps}></Input>
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

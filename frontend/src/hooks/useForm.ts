import { useState } from 'react';

type UseFormProps = {
  initialValues: any;
  onSubmit: (values: any) => void;
};

type UseFormReturn = {
  values: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const useForm = ({ initialValues, onSubmit }: UseFormProps): UseFormReturn => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};

export default useForm;

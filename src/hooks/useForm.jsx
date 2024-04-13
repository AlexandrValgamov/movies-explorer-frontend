import React, { useCallback, useEffect } from 'react';
import { emailPattern, namePattern } from '../utils/constants';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'email' && !emailPattern.test(value)) {
      target.setCustomValidity('Email должен быть действительным.');
    } else if (name === 'name' && !namePattern.test(value)) {
      target.setCustomValidity(
        'Имя может содержать только буквы латиницы, кириллицы, пробелы и дефисы.',
      );
    } else target.setCustomValidity('');

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: target.validationMessage,
    }));
    setIsValid(target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return { values, handleChange, errors, isValid, resetForm };
}

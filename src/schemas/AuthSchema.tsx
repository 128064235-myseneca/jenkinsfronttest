import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(8).required(),
});

export const validationSchema = yup.object().shape(
  {
    firstName: yup.string().required(),
    lastName: yup.string().max(5).required(),
    min: yup.number().min(10),
    max: yup.number().max(20),
    minDate: yup.date().min('2021-08-01'),
    maxDate: yup.date().max('2021-08-01'),
    minLength: yup.string().min(2),
    minRequiredLength: yup.string().min(2).required(),
    selectNumber: yup.string().required(),
    pattern: yup.string().matches(/\d+/),
    radio: yup.string().required(),
    checkbox: yup.string().required(),
    exclusivelyRequiredOne: yup.string().when('exclusivelyRequiredTwo', {
      is: '',
      then: yup.string().required(),
      otherwise: yup.string().length(0),
    }),
    exclusivelyRequiredTwo: yup.string().when('exclusivelyRequiredOne', {
      is: '',
      then: yup.string().required(),
      otherwise: yup.string().length(0),
    }),
  },
  [['exclusivelyRequiredOne', 'exclusivelyRequiredTwo']],
);

import {string, object} from 'yup';

const formValidationSchema = () =>
  object().shape({
      username: string().nullable().required("cant be blank").min(2,"min 2 characters required."),
      password: string().nullable().required("cant be blank").min(2,"min 2 characters required.")
  });

export {formValidationSchema};

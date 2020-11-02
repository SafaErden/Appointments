import {string, object} from 'yup';
import i18n from 'i18next';

const formValidationSchema = () =>
  object().shape({
      username: string().nullable().required(i18n.t('validation.blank')).min(2,i18n.t('validation.min2')),
      password: string().nullable().required(i18n.t('validation.blank')).min(2,i18n.t('validation.min2'))
  });

export {formValidationSchema};

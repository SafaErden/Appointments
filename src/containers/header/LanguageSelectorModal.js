import React from 'react';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import FormikField from '../../components/FormikField';

const handleSubmit = option => {
  localStorage.setItem('lang', option.target.value);
  window.location.reload();
};

const languages = {
  en: 'English',
  tr: 'Turkish',
};

const LanguageSelectorModal = () => {
  const { t } = useTranslation();
  const options = Object.keys(languages).map(key => {
    return (<option value={key} key={Math.random()}>{languages[key]}</option>);
  });

  return (
    <div className="modal fade text-dark" id="languageSelectorModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{t('selectLanguage')}</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body d-flex justify-content-center p-5">
            <Formik>
              {() => (
                <Form className="col-12 text-center">
                  <FormikField onChange={handleSubmit} as="select" name="preferredLanguage">
                    {options}
                  </FormikField>
                </Form>
              )}
            </Formik>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">{t('close')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectorModal;

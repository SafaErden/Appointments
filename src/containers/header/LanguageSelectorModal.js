import {Formik, Form} from 'formik';
import  FormikField from "../../components/FormikField";
const handleSubmit = (option) =>{
  localStorage.setItem('lang', option.target.value);
  window.location.reload();
}

const languages = {
  en: "English",
  tr: "Turkish"
}

const LanguageSelectorModal = () => {
  
  const lang = localStorage.getItem('lang') || 'en';
  const options = Object.keys(languages).map(function(key,index) {
    const selected = lang===key ? "selected" : "";
    return (<option value={key} key = {index} selected={selected}>{languages[key]}</option>);
  });

    return (
        <div className="modal fade text-dark" id="languageSelectorModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Selecyour preferred language</h5>
                <button className="close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex justify-content-center p-5">
                  <Formik>
                    {() => (
                    <Form className="col-12 text-center">
                      <FormikField onChange = {handleSubmit}  as="select" name="preferredLanguage">
                        {options}
                      </FormikField>
                    </Form>
                  )
                  }
                </Formik>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn bg-first text-white" data-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default LanguageSelectorModal;
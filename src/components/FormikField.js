import {Field} from 'formik';

const FormikField = ({style="", as="", name="", handleChange="", errors="", touched="", type="", ...props}) => {
    const className= errors[name] && touched[name] ? "border rounded border-danger" : "";
    return(
        <>
        <div className={`form-group input-group m-0 ${className} ${style}`}>
            <Field
                {...props}
                /*onChange={handleChange}*/
                name={name}
                className="form-control"
                type={type}
                as={as}
            />
        </div>
        {errors[name] && touched[name] && <small  className="text-danger m-0 p-0 "><em>{errors[name]}</em></small >}
        </>
)};

export default FormikField;
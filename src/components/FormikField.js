import {Field} from 'formik';

const FormikField = ({classProp="", style="", as="", name="", errors="", touched="", type="", ...props}) => {
    const className= errors[name] && touched[name] ? "border rounded border-danger" : "";
    return(
        <>
        <div className={`form-group input-group m-0 ${className} ${style} ${classProp}`}>
            <Field
                {...props}
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
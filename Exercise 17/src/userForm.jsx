import { useState } from "react";

function useForm(initialValues) {

    const [values, setValues] = useState(initialValues);

  
    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    };


    const handleSubmit = (callback) => {
        return (e) => {
            e.preventDefault();
            callback(values);
        };
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return {
        values,
        handleChange,
        handleSubmit,
        resetForm
    };
}

export default useForm;
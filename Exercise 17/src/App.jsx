
import useForm from "./userForm";
import styles from './app.module.css'

function App() {

    const {
        values,
        handleChange,
        handleSubmit,
        resetForm
    } = useForm({
        username: "",
        phone:"",
        email: "",
        password: "",
        Comformpassword: "",

    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);

        alert("Registration Successful!");
        resetForm();
    };

    return (

        <div className="container">

            <form onSubmit={handleSubmit(onSubmit)}>

                <h1>Registration Form</h1>

                <input
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={values.username}
                    onChange={handleChange}
                    required
                /><br/>
             

                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                    required
                /><br/>

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    required
                /><br/>
                <input
                    type="Comformpassword"
                    name="Comformpassword"
                    placeholder="Comform password"
                    value={values.Comformpassword}
                    onChange={handleChange}
                    required
                /><br/>

                <button type="submit" className= {styles.regisrtration}>
                    Register
                </button>

            </form>

        </div>

    );
}

export default App;
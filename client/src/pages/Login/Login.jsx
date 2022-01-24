import './login.css';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {

    const history = useHistory();
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const inputHandler = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    // useEffect( () => {

    //     const login = async () => {
    //         if(Object.keys(formErrors).length === 0 && isSubmit === true){
    //             try{
    //                 const {data} = await publicRequest.post("/auth/login", formValues);
    //                 if(data) {
    //                     localStorage.setItem("profile", JSON.stringify(data));
    //                     setTimeout( () => {
    //                         history.push("/");
    //                     }, 500); 
    //                 }
    //             } catch(err){
    //                 setFormErrors({password: "wrong username or password"});
    //             }
    //         }
    //     };
    //     login();
    // });

    const validate = (values) => {
        const errors = {};
        if(!values.username){
            errors.username = "Username is required";
        }
        if(!values.password){
            errors.password = "Password is required";
        }
        return errors;
    };

    return (
        <div className="l-container">
            <div className="l-wrapper">
                <form className='l-form' onSubmit={handleSubmit}>
                    <h1 className='l-title'>SIGN IN</h1>
                    <input 
                        className='l-input'
                        placeholder="username"
                        name="username"
                        value={formValues.username} 
                        onChange={inputHandler}
                    />
                    <p className='error-message'>{formErrors.username}</p>
                    <input 
                        className='l-input' 
                        type="password"
                        placeholder="password" 
                        name="password"
                        value={formValues.password} 
                        onChange={inputHandler}
                    />
                    <p className='error-message'>{formErrors.password}</p>
                    <button className='l-button' type="submit">LOGIN</button>
                    <Link style={{textDecoration: "none"}} to="#"><span className='con'>DO NOT YOU REMEMBER THE PASSWORD?</span></Link>
                    <Link style={{textDecoration: "none"}} to="/register"><span className='con'>CREATE A NEW ACCOUNT</span></Link>
                </form>
            </div>
        </div>
    )
}
export default Login;

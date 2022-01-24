import './register.css';
import { useState, useEffect  } from 'react';
import { useHistory } from 'react-router';

const Register = () => {

    const history = useHistory();
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

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

    //     const register = async () => {
    //         if(Object.keys(formErrors).length === 0 && isSubmit === true){
    //             try{
    //                 const res = await publicRequest.post("/auth/register", formValues);
    //                 if(res){
    //                     history.push("/login");
    //                 }
    //             } catch(err){
    //                 console.log(err);
    //             }
    //         }
    //     };
    //     register();
    // });

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if(!values.firstName){
            errors.firstName = "First Name is required";
        }
        if(!values.lastName){
            errors.lastName = "Last Name is required";
        }
        if(!values.username){
            errors.username = "Username is required";
        } else if(values.username.length < 5) {
            errors.username = "Username must be more than 4 characters";
        }
        if(!values.email){
            errors.email = "Email is required";
        } else if(!regex.test(values.email)){
            errors.email = "Email is not valid";
        }
        if(!values.password){
            errors.password = "Password is required";
        }else if(values.password.length < 4){
            errors.password = "Password must be more than 3 characters";
        }else if(values.password.length > 10){
            errors.password = "Password must be not more than 10 characters";
        }
        if(!values.confirmPassword){
            errors.confirmPassword = "Confirm Password is required";
        }else if(values.password !== values.confirmPassword){
            errors.confirmPassword = "Both the passwords must be same";
        }

        return errors;
    };

    return (
            <div className='r-container'>
                <div className="r-wrapper">
                    <h1 className="r-title">CREATE AN ACCOUNT</h1>
                    <form className="r-form" onSubmit={handleSubmit}>
                        <div className="input-div">
                            <input 
                                className="r-input"
                                placeholder="last name" 
                                name="lastName" 
                                value={formValues.lastName} 
                                onChange={inputHandler}
                            />
                            <p className='error-message'>{formErrors.firstName}</p>
                        </div>
                        <div className="input-div">
                            <input 
                                className="r-input"
                                placeholder="last name" 
                                name="lastName" 
                                value={formValues.lastName} 
                                onChange={inputHandler}
                            />
                            <p className='error-message'>{formErrors.lastName}</p>
                        </div>
                        <div className="input-div">
                            <input 
                                className="r-input"
                                placeholder="username" 
                                name="username" 
                                value={formValues.username} 
                                onChange={inputHandler}
                            />
                            <p className='error-message'>{formErrors.username}</p>
                        </div>
                        <div className="input-div">
                            <input 
                                className="r-input"
                                placeholder="email"
                                name="email" 
                                value={formValues.email}
                                onChange={inputHandler}
                            />
                            <p className='error-message'>{formErrors.email}</p>
                        </div>
                        <div className="input-div">
                            <input 
                                className="r-input"
                                type="password"
                                placeholder="password" 
                                name="password" 
                                value={formValues.password} 
                                onChange={inputHandler}
                            />
                            <p className='error-message'>{formErrors.password}</p>
                        </div>
                        <div className="input-div">
                            <input 
                                className="r-input"
                                type="password"
                                placeholder="confirm password" 
                                name="confirmPassword" 
                                value={formValues.confirmPassword} 
                                onChange={inputHandler}
                            />
                            <p className='error-message'>{formErrors.confirmPassword}</p>
                        </div>
                        <p className="agreement">
                            By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </p>
                        <button className='r-button' type="submit">CREATE</button>
                    </form>
                </div>
            </div>
    )
}

export default Register;

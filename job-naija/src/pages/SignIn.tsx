import { useState } from 'react';
import styles from '../styles/Auth.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import Container from '../components/Container';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { GridLoader } from 'react-spinners';
import MessageDisplayCard from '../components/MessageDisplayCard';
import { useUser } from '../hooks/useUser';

const SignIn = () => {
  const { signIn, loading, signInError } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const successMessage = location.state?.successMessage;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const success = await signIn(formData.email, formData.password);
    if (success) {
      navigate('/', {
        state: {
          successMessage: `Welcome ${formData.email}!`,
        },
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.auth_wrapper}>
      <Container>
        <div className={styles.auth_container}>
          <Link className={styles.back_link} to={'/'}>
            <IoArrowBackCircleSharp />
            Back to website
          </Link>
          {successMessage && (
            <MessageDisplayCard message={successMessage} type="success" />
          )}
          <div className={styles.auth_form_container}>
            {loading && (
              <GridLoader
                color="#333"
                margin={30}
                size={50}
                className={styles.auth_loading}
              />
            )}
            <h2>Welcome</h2>
            <form onSubmit={handleSubmit} aria-labelledby="signin-form">
              <div className={styles.form_input_group}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                />
              </div>
              <div className={styles.form_input_group}>
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  aria-required="true"
                />
                <span
                  className={styles.password_toggle}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {signInError && (
                <div role="alert" aria-live="assertive">
                  <MessageDisplayCard message={signInError} type="error" />
                </div>
              )}

              <button type="submit" className={styles.form_btn}>
                Sign In
              </button>
            </form>

            <p className={styles.form_redirect_link}>
              New here? <Link to="/auth/join">Create an Account</Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
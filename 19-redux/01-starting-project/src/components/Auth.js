import classes from './Auth.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';

const Auth = () => {


  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  }
  const authTrue = useSelector((state) => state.auth.isAuthenticated)

  return (
    <>
      {!authTrue && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={handleLogin}>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <button type="submit">Login</button>
            </form>
          </section>
        </main>
      )}
    </>
  );
};

export default Auth;

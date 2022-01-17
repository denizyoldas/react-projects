import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const passwordInptRef = useRef();
  const authCtx = useContext(AuthContext);
  const idToken = authCtx.token;
  const submitHandler = (event) => {
    event.preventDefault();

    const password = passwordInptRef.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=[API_KEY]',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken,
          password,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {});
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={passwordInptRef}
          minLength="7"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

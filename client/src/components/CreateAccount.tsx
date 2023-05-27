import { useState } from 'react';
import supabase from '../config/supabaseClient.js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

// interface InitialValues {
//   email?: string;
//   password?: string;
// }

// const initialEmail: InitialValues = { email: '' };
// const initialPassword = { password: '' };

// const { email, password, error } = await supabase.auth.signUp({
//   email: 'example@email.com',
//   password: 'example-password',
// });

const CreateAccount = () => {
  // const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState<string>('');

  // const handleSubmit: (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const credentials = { password: password };
  //   console.log(credentials);
  // };

  console.log(supabase);

  return (
    <div className='createAccount'>
      <div className='header'>
        <h3>Create Account</h3>
      </div>
      <form>
        <label>
          Email:{' '}
          <input
            className='email'
            // value={values.email}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              // const email = e.currentTarget.value;
            }}
            type='text'
            placeholder='yourName@theInternet.com'
          />
        </label>

        <label>
          Password:{' '}
          <input
            className='password'
            // value={values.password}
            // onChange={(e: React.FormEvent<HTMLInputElement>) => {
            //   const password = e.currentTarget.value;
            // }}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              // setPassword(e.currentTarget);
            }}
            type='text'
            placeholder='**********'
          />
        </label>
      </form>
      <button
      // onClick={async (e) => {
      //   await supabase.auth.signUp(values.email, values.password);
      // }}
      >
        Create Account
      </button>
    </div>
  );
};

export default CreateAccount;

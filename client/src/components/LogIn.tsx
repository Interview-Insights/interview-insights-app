// import { useState } from 'react';
import supabase from '../config/supabaseClient.js';

import { Auth, Typography, Button } from '@supabase/ui';
// import { Auth, Typography, Button } from '@/supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';

// // const { email, password, error } = await supabase.auth.signUp({
// //   email: 'example@email.com',
// //   password: 'example-password',
// // });

// const LogIn = () => {
//   const [email, setEmail] = useState('');

//   const [password, setPassword] = useState('');

//   async function signInWithEmail() {
//     const { data, error } = await supabase.auth.signInWithOtp({
//       email: email,
//       options: {
//         emailRedirectTo: '/home',
//       },
//     });
//   }
//   console.log(supabase);

//   return (
//     <div className='createAccount'>
//       <div className='header'>
//         <h3>Log In</h3>
//       </div>
//       <form>
//         <label>
//           Email:{' '}
//           <input
//             className='email'
//             onChange={(e) => {
//               console.log(e.currentTarget.value);
//               setEmail(e.currentTarget.value);
//             }}
//             type='text'
//             placeholder='yourName@theInternet.com'
//           />
//         </label>

//         <label>
//           Password:{' '}
//           <input
//             className='password'
//             // value={values.password}
//             // onChange={(e: React.FormEvent<HTMLInputElement>) => {
//             //   const password = e.currentTarget.value;
//             // }}
//             onChange={(e) => {
//               console.log(e.currentTarget.value);
//               // setPassword(e.currentTarget);
//             }}
//             type='text'
//             placeholder='**********'
//           />
//         </label>
//       </form>
//       <button
//         onClick={(e) => {
//           signInWithEmail();
//         }}
//       >
//         Send My Magic Link!
//       </button>
//     </div>
//   );
// };

// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   'https://your-project-url.supabase.co',
//   'PROJECT_ANON_KEY'
// );

const Container = (props) => {
  console.log(supabase);
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

export default function AuthBasic() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth supabaseClient={supabase} />
      </Container>
    </Auth.UserContextProvider>
  );
}
// export default LogIn;

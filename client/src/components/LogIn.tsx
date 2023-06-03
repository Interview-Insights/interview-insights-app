import supabase from '../config/supabaseClient.js';
import { Auth, Typography, Button, dark } from '@supabase/ui';

const Container = (props) => {
  const { user } = Auth.useUser();

  const containerStyle = {
    color: 'blue', // Change to the color you want
    backgroundColor: 'white', // Change to the color you want
    // Add any other styles you need
  };
  const textStyle = {
    color: 'red', // Change to the color you want
    // Add any other styles you need
  };
  const buttonStyle = {
    color: 'green', // Change to the color you want
    backgroundColor: 'lightgray', // Change to the color you want
    // Add any other styles you need
  };
  if (user)
    return (
      <div style={containerStyle}>
        <Typography.Text style={textStyle}>
          Signed in: {user.email}
        </Typography.Text>
        <Button
          block
          style={buttonStyle}
          onClick={() => props.supabaseClient.auth.signOut()}
        >
          Sign out
        </Button>
      </div>
    );
  return <div style={containerStyle}>{props.children}</div>;
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

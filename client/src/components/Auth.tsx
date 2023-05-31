import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import getClient from '../config/supabaseClient.js';

export function SupabaseAuth() {
  const supabase = getClient();

  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
    </Auth.UserContextProvider>
  );
}

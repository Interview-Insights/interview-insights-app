import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import getClient from '../config/supabaseClient.js';
import styles from '../assets/styles/Auth.module.scss';

export function SupabaseAuth() {
  const supabase = getClient();

  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <div className={styles.auth}>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
      </div>
    </Auth.UserContextProvider>
  );
}

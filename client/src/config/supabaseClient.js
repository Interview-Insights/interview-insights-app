import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ufizcxjigfqphpbmyxxr.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmaXpjeGppZ2ZxcGhwYm15eHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5NzgyNzksImV4cCI6MjAwMDU1NDI3OX0.f_cvZHgVVTkSaRT05S8egLX_cMwK1rNTn1HiuYG2RaQ';

let client;
export default function getClient() {
  if (!client) {
    client = createClient(supabaseUrl, supabaseKey);
  }
  return client;
}

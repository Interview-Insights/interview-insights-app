import { createClient } from '@supabase/supabase-js';
// require('dotenv').config();

const supabaseUrl =
  // process.env.SUPABASE_URL |
  'https://ufizcxjigfqphpbmyxxr.supabase.co';
const supabaseKey =
  // process.env.ANON_KEY |
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmaXpjeGppZ2ZxcGhwYm15eHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5NzgyNzksImV4cCI6MjAwMDU1NDI3OX0.f_cvZHgVVTkSaRT05S8egLX_cMwK1rNTn1HiuYG2RaQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://smrihgtcfytifpolhuow.supabase.co'; // replace with your Supabase project URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtcmloZ3RjZnl0aWZwb2xodW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkxOTQ2NjYsImV4cCI6MjAwNDc3MDY2Nn0.yUSvA9JEVnL9pH_BqyZKNPeOJxW43CHTjO4pwJZ_x7c'; // replace with your Supabase secret key

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {localStorage: false});
export default supabase;


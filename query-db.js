import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bfwkdcokgqurrkpxpjoj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdG9kYXFkYWhteGF1dmlhcWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1MDE4NzYsImV4cCI6MjA3NzA3Nzg3Nn0.BNAOMNX8DHCkRBtg97yf_SVDpkS8Ri80TbiICodeDis';

const supabase = createClient(supabaseUrl, supabaseKey);

async function readDatabase() {
  try {
    // Query the pg_tables system table to list all public tables
    const { data, error } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public');

    if (error) {
      // If that doesn't work, try a different approach
      console.log('Attempting direct SQL query...');
      const { data: tables, error: sqlError } = await supabase
        .rpc('exec', { sql: "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';" });
      
      if (sqlError) throw sqlError;
      console.log('Tables:', tables);
    } else {
      console.log('Tables:', data);
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

readDatabase();


import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fcxhopqzliwwbrccuqxs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjeGhvcHF6bGl3d2JyY2N1cXhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwMjYyMjgsImV4cCI6MjAwMTYwMjIyOH0.2QbJg9e9a0Fc68GsYZft3bYR3gH-jCqunK-BnwXG5Co";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

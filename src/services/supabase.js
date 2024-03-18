import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lxjthiuwslprriwpejih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4anRoaXV3c2xwcnJpd3BlamloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3ODY2NTEsImV4cCI6MjAyNjM2MjY1MX0.HuhDVk66xr03p7BfmLZW2bRw8YEB_AZas-l06pEETPQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

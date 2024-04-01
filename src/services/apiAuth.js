import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

export async function getCurrentUser() {
  // get user token from locale storage with getSession()
  const { data: session } = await supabase.auth.getSession();
  console.log(session.session);
  if (!session.session) return null;
  const { data, error } = await supabase.auth.getUser();
  console.log(data);

  if (error) throw new Error(error.message);
  return data?.user;
}

"use client";
import { useSupabase } from "../supabase-provider";

export default function Login() {
  const { supabase } = useSupabase();

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="m-3 flex h-72 w-72 max-w-lg flex-col items-center justify-evenly rounded-md border border-gray-500/25 bg-opacity-100 p-3 p-3 text-xl text-white backdrop-blur-md">
        <button className="rounded-md bg-white px-6 py-3 text-gray-950" onClick={signInWithGoogle}>
          Login Google
        </button>
        <button className="rounded-md bg-white px-6 py-3 text-gray-950" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

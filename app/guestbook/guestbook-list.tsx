import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import GuestbookDelete from "./guestbook-delete";
import GuestbookRealtime from "./guestbook-realtime";

export default async function GuestBookList() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  let { data, status, statusText } = await supabase
    .from("guestbook")
    .select("id, created_at, text,user_id, profiles(*)")
    .order("created_at", { ascending: false });

  return <GuestbookRealtime serverComments={data}></GuestbookRealtime>;
}

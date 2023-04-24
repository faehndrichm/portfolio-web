import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import GuestbookDelete from "./guestbook-delete";

export default async function GuestBookList() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const colors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];

  const hashString = (string) =>
    string
      .split("")
      .map((char) => char.charCodeAt(0))
      .reduce((a, b) => a + b, 0);

  let { data, status, statusText } = await supabase
    .from("guestbook")
    .select("id, created_at, text,user_id, profiles(*)")
    .order("created_at", { ascending: false });

  let {
    data: {
      session: { user },
    },
  } = await supabase.auth.getSession();

  return (
    <div className="guestbook-list divide-y text-white">
      {data.map((gb) => (
        <div key={gb.id} className="flex flex-row gap-3 border-gray-500/25 py-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-${
              colors[hashString(gb?.profiles["full_name"] ?? "?") % colors.length]
            }-600 text-xl font-bold`}>
            {(gb?.profiles["full_name"] ?? "?")[0]}
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-1 ">
              <span>{gb.profiles["full_name"]}</span>
              <span className="text-xs text-gray-300">
                {"at "}
                {new Date(gb.created_at).toLocaleDateString("de-AT")}{" "}
                {new Date(gb.created_at).toLocaleTimeString("de-AT")}
              </span>
              {user.id === gb.user_id && <GuestbookDelete guestbook={gb}></GuestbookDelete>}
            </div>
            <div className="whitespace-pre-wrap">{gb.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

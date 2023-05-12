"use client";
import { useEffect, useState } from "react";
import { useSupabase } from "../supabase-provider";
import GuestbookDelete from "./guestbook-delete";

const colors = [
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

export default function GuestbookRealtime({ serverComments }) {
  let { supabase, user } = useSupabase();
  const [comments, setComments] = useState(serverComments);

  useEffect(() => {
    const channel = supabase
      .channel("realtime guestbook")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "guestbook",
        },
        async (payload) => {
          console.log(payload);
          const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", payload.new.user_id)
            .limit(1)
            .single();
          const newComment = { ...payload.new, profiles: data };
          setComments((c) => [newComment, ...c]);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "DELETE",
          schema: "public",
          table: "guestbook",
        },
        async (payload) => {
          console.log(payload);
          setComments((c) => c.filter((cm) => cm.id !== payload.old.id));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <div className="guestbook-list divide-y font-lato text-white">
      {comments.map((gb) => {
        const color = colors[hashString(gb?.profiles["full_name"] ?? "?") % colors.length];
        return (
          <div key={gb.id} className="flex flex-row gap-3 border-gray-500/25 py-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-${color}-600 to-${color}-400 font-montserat text-xl font-bold`}>
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
                {user?.id && user.id === gb.user_id && (
                  <GuestbookDelete guestbook={gb}></GuestbookDelete>
                )}
              </div>
              <div className="whitespace-pre-wrap">{gb.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

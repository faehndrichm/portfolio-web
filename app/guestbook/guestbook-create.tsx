"use client";
import { useSupabase } from "../supabase-provider";
import { useState } from "react";

export default function GuestbookCreate() {
  const { supabase, user } = useSupabase();
  const [comment, setComment] = useState("");

  const addGuestBookEntry = async (event) => {
    event.preventDefault();
    let res = await supabase.from("guestbook").insert({ text: comment });
    setComment("");
  };

  const handleCommentChange = function (event) {
    if (event.target.value !== null) {
      setComment(event.target.value);
    }
  };

  return (
    <form className="flex flex-col items-start gap-3" onSubmit={addGuestBookEntry}>
      <textarea
        id="comment"
        className="w-full appearance-none border-b border-gray-500/25 bg-gray-950 text-white outline-none focus:border-b-2 focus:border-white"
        value={comment}
        placeholder="Add Comment..."
        onChange={handleCommentChange}
      />
      <button
        type="submit"
        disabled={!comment}
        className="text-md rounded-full border  border-gray-500/25 bg-opacity-50 px-4 py-1 text-white  backdrop-blur-md hover:bg-white hover:text-gray-950 disabled:bg-gray-800 disabled:text-gray-300 disabled:shadow-none">
        Kommentieren
      </button>
    </form>
  );
}

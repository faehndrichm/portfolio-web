import GuestBookList from "./guestbook-list";
import GuestbookCreate from "./guestbook-create";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Guestbook() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <GuestBookList></GuestBookList>
    </>
  );
}

import GuestBookList from "./guestbook-list";
import GuestbookCreate from "./guestbook-create";

export default async function Guestbook() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-6">
      <h2 className="w-full text-xl text-white">Guestbook</h2>
      <GuestbookCreate></GuestbookCreate>
      {/* @ts-expect-error Async Server Component */}
      <GuestBookList></GuestBookList>
    </div>
  );
}

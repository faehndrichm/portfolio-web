import GuestBookList from "./guestbook-list";
import GuestbookCreate from "./guestbook-create";

export default async function Guestbook() {
  return (
    <div className="mx-6 my-6 flex max-w-6xl flex-col items-stretch gap-6 md:mx-auto">
      <h2 className="w-full text-2xl text-white md:text-3xl">Guestbook</h2>
      <GuestbookCreate></GuestbookCreate>
      {/* @ts-expect-error Async Server Component */}
      <GuestBookList></GuestBookList>
    </div>
  );
}

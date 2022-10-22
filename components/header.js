
 export default function Header() {

return (
  <header className="fixed z-10 w-full bg-gray-800 shadow-white/20 shadow-lg text-white text-xl flex justify-center p-3 ">
    <div className="max-w-6xl w-full mx-6 flex gap-3 items-center justify-between">
      <div className="font-bold cursor-pointer text-3xl transition ease-in-out delay-150 hover:scale-110 hover:text-purple-600">
        MF
      </div>
      <div className="hidden md:flex gap-3 items-center ">
        <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
          Lustige Algos
        </div>
        <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
          Projekte
        </div>
        <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
          Meine Hobbys
        </div>
        <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
          Über mich
        </div>
        <div className="text-base font-bold p-3 underline-offset-4 cursor-pointer hover:underline">
          Sonstiges
        </div>
      </div>
      <svg
        className="w-6 h-6 cursor-pointer transition ease-in-out delay-100 hover:scale-125 "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
  </header>
);
      }
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  let data = [0, 1, 2, 3, 4, 5];
  return (
    <div className="animate-pulse divide-y text-white">
      {data.map((x) => {
        return (
          <div key={x} className="flex w-64 flex-row items-start gap-3 border-gray-500/25 py-3">
            <div
              className="h-10 w-10 flex-none  rounded-full
             bg-gradient-to-r from-slate-700 to-slate-500"></div>
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex flex-row items-stretch gap-1">
                <div className="h-2 flex-1 rounded bg-slate-700"></div>
                <div className="h-2 flex-1 rounded bg-slate-700"></div>
              </div>
              <div className="h-2 rounded bg-slate-700"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

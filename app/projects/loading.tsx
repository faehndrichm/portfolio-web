export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center">
      <span className="h-16 w-16 animate-ping rounded-full bg-gray-500 opacity-75"></span>
    </div>
  );
}

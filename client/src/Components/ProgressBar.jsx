export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-zinc-700 h-4 rounded-full overflow-hidden">
      <div
        className="bg-purple-600 h-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default function Card({ title, children }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 shadow hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {children}
    </div>
  );
}

export default function Badge({ text, color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-500',
    red: 'bg-red-600',
  };

  return (
    <span className={`text-sm px-3 py-1 rounded-full text-white ${colors[color]}`}>
      {text}
    </span>
  );
}

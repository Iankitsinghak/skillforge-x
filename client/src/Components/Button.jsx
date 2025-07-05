export default function Button({ children, onClick, variant = 'primary' }) {
  const base = 'px-4 py-2 rounded-xl font-semibold transition';
  const variants = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    outline: 'border border-gray-400 hover:border-white text-white',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

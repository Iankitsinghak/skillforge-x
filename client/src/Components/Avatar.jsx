export default function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-16 h-16 rounded-full border-4 border-purple-600 object-cover"
    />
  );
}

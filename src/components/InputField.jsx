

export default function InputField({
  placeholder, value, onchange, type
}) {
  return (
    <input
      type={type}
      id="voice-search"
      className="bg-white text-gray-900 text-sm w-full p-2 border rounded focus:ring-0 focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onchange(e.target.value)}
    />
  );
}

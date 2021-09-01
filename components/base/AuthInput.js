const AuthInput = ({
  label,
  type = "text",
  labelColor,
  className,
  ringColor,
  state,
  onChange,
  required,
}) => {
  const id = label.toLowerCase().split(" ").join("-");

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <label className={labelColor ? labelColor : "text-gray-100"} htmlFor={id}>
        {label}
        {required && <span className="text-red-700 ml-2">*</span>}
      </label>
      <input
        required={required}
        className={`w-full rounded-md shadow-sm mt-1 ${
          ringColor
            ? ringColor
            : "focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-indigo-500"
        }`}
        value={state}
        id={id}
        onChange={onChange}
        type={type}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
};

export default AuthInput;

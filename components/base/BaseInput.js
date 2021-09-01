import { useField, ErrorMessage } from "formik";

const BaseInput = ({
  label,
  type = "text",
  labelColor,
  className,
  ringColor,
  required,
  ...props
}) => {
  const id = label.toLowerCase().split(" ").join("-");
  const [field, meta] = useField(props);

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
        } ${
          meta.touched &&
          meta.error &&
          "ring-1 ring-red-500 ring-offset-1 ring-offset-red-500"
        }`}
        id={id}
        type={type}
        placeholder={`Enter ${label.toLowerCase()}`}
        {...field}
        {...props}
      />
      <span className="text-red-500">
        <ErrorMessage name={field.name} />
      </span>
    </div>
  );
};

export default BaseInput;

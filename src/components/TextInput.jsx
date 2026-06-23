import { useId } from "react";

export default function TextInput({
  label,
  placeholder,
  hint,
  error,
  disabled = false,
  leftIcon,
  rightIcon,
  value,
  onChange,
}) {
  const id = useId();

  const hasError = !!error;

  return (
    <div className="w-full max-w-md">
      {/* LABEL */}
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-neutral-900"
        >
          {label}
        </label>
      )}

      {/* INPUT WRAPPER */}
      <div
        className={`relative flex items-center rounded-md border px-3 py-2 transition
        ${
          hasError
            ? "border-red-600"
            : "border-neutral-200 focus-within:border-indigo-600"
        }
        ${
          disabled
            ? "bg-neutral-100 cursor-not-allowed"
            : "bg-white"
        }
        `}
      >
        {/* LEFT ICON */}
        {leftIcon && (
          <div className="absolute left-3 text-neutral-400">
            {leftIcon}
          </div>
        )}

        {/* INPUT */}
        <input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          className={`w-full bg-transparent outline-none text-sm text-neutral-900
            ${leftIcon ? "pl-10" : "pl-0"}
            ${rightIcon ? "pr-10" : "pr-0"}
            ${disabled ? "text-neutral-400" : ""}
          `}
        />

        {/* RIGHT ICON */}
        {rightIcon && (
          <div className="absolute right-3 text-neutral-400">
            {rightIcon}
          </div>
        )}
      </div>

      {/* HINT */}
      {hint && !error && (
        <p
          id={`${id}-hint`}
          className="mt-1 text-sm text-neutral-500"
        >
          {hint}
        </p>
      )}

      {/* ERROR */}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}
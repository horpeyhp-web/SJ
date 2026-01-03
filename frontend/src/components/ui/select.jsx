import React from "react";

/* Main Select component */
export function Select({ value, onChange, children, className = "" }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`select ${className}`}
    >
      {children}
    </select>
  );
}

/* Option item */
export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

/* Compatibility wrappers (do nothing, but prevent import errors) */
export function SelectTrigger({ children }) {
  return <>{children}</>;
}

export function SelectContent({ children }) {
  return <>{children}</>;
}

export function SelectValue({ placeholder }) {
  return <option value="">{placeholder}</option>;
}

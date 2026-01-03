import React from "react";

export function Label({ htmlFor, children, className = "", ...props }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`label text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

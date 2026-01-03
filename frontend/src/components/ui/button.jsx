import React from "react";

export function Button({ children, onClick, className }) {
  return (
    <button 
        onClick={onClick} 
        className={`btn ${className}`}
    >
      {children}
    </button>
  );
}

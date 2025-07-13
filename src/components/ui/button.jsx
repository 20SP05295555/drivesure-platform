import React from 'react';

export function Button({ children, variant, className }) {
  let base = "px-4 py-2 rounded border flex items-center justify-center";
  let variantClasses = variant === 'outline' ? "border-gray-500 text-gray-700" : "bg-blue-600 text-white";

  return <button className={`${base} ${variantClasses} ${className}`}>{children}</button>;
}

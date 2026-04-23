import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 transition-colors focus-visible:ring-brand-500",
  secondary:
    "bg-surface-0 text-brand-500 border border-brand-500 hover:bg-brand-50 transition-colors focus-visible:ring-brand-500",
  ghost:
    "text-ink-600 hover:text-ink-900 hover:bg-surface-2 transition-colors",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 transition-colors focus-visible:ring-accent-500",
  none: "",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  external,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:ring-2 cursor-pointer";
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

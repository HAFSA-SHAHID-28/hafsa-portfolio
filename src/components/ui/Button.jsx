const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    gap-2
    whitespace-nowrap
    rounded-md
    px-5
    py-3
    font-body
    text-sm
    font-medium
    tracking-wide
    transition-all
    duration-normal
    ease-smooth
    focus-visible:outline-2
    focus-visible:outline-accent
    focus-visible:outline-offset-4
  `;

  const variants = {
    primary: `
      bg-accent
      text-white
      hover:bg-accent-hover
      hover:-translate-y-0.5
      active:translate-y-0
    `,

    secondary: `
      border
      border-border
      bg-surface
      text-text
      hover:border-border-hover
      hover:bg-surface-hover
      hover:-translate-y-0.5
      active:translate-y-0
    `,

    ghost: `
      px-2
      py-2
      text-text-secondary
      hover:text-text
    `,
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const SPRING = { stiffness: 300, damping: 20, mass: 0.4 };

const SIZE_STYLES = {
  sm: "min-h-9 px-3.5 text-xs gap-1.5",
  md: "min-h-11 px-5 text-sm gap-2",
  lg: "min-h-12 px-6 text-sm sm:min-h-13 sm:px-7 sm:text-base gap-2.5",
};

const ICON_SIZE = { sm: 13, md: 15, lg: 16 };

// Static per-variant classes — colors pulled straight from the @theme tokens,
// nothing hardcoded.
const VARIANT_STYLES = {
  primary: "border border-accent bg-accent text-white",
  secondary: "border border-border bg-surface text-text",
  outline: "border border-border bg-transparent text-text",
  ghost: "border border-transparent bg-transparent text-text-secondary",
};

function Arrow({ external, size }) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <motion.span
      aria-hidden="true"
      className="relative z-10 inline-flex shrink-0 items-center justify-center"
      variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: external ? -3 : 0 } }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <Icon size={size} strokeWidth={2.25} />
    </motion.span>
  );
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  showArrow = true,
  ...props
}) => {
  const ref = useRef(null);

  // Spring-smoothed magnetic pull — capped so it stays a "nudge", not a jump.
  const pullX = useMotionValue(0);
  const pullY = useMotionValue(0);
  const springX = useSpring(pullX, SPRING);
  const springY = useSpring(pullY, SPRING);

  // Spotlight position, only meaningfully used on the primary variant.
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotBg = useMotionTemplate`radial-gradient(160px circle at ${spotX}% ${spotY}%, rgba(255,255,255,0.16), transparent 72%)`;

  const handlePointerMove = (e) => {
    if (disabled || e.pointerType === "touch") return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    const pull = size === "lg" ? 6 : size === "sm" ? 3 : 4.5;
    pullX.set((relX - 0.5) * pull * 2);
    pullY.set((relY - 0.5) * pull * 2);

    spotX.set(relX * 100);
    spotY.set(relY * 100);
  };

  const handlePointerLeave = () => {
    pullX.set(0);
    pullY.set(0);
  };

  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
  const iconSize = ICON_SIZE[size];

  const classes = `
    group relative inline-flex items-center justify-center overflow-hidden
    whitespace-nowrap rounded-md font-body font-medium tracking-[-0.01em]
    select-none
    focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4
    disabled:pointer-events-none disabled:opacity-40
    ${SIZE_STYLES[size]} ${VARIANT_STYLES[variant]} ${className}
  `;

  const Tag = motion[href ? "a" : "button"];

  const content = (
    <>
      {/* Primary: cursor-tracking spotlight */}
      {variant === "primary" && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background: spotBg }}
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.25 }}
        />
      )}

      {/* Primary: soft glow that grows on hover, replaces a static box-shadow */}
      {variant === "primary" && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 -z-10 rounded-md"
          style={{ background: "var(--color-accent)", filter: "blur(18px)" }}
          variants={{ rest: { opacity: 0.25 }, hover: { opacity: 0.5 } }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Secondary/outline: underline that draws in from the center */}
      {(variant === "secondary" || variant === "outline") && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px origin-center bg-accent"
          variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      <motion.span
        className="relative z-10"
        variants={{
          rest: { color: "inherit" },
          hover:
            variant === "secondary" || variant === "outline"
              ? { color: "var(--color-accent-hover)" }
              : variant === "ghost"
              ? { color: "var(--color-text)" }
              : {},
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>

      {showArrow && <Arrow external={isExternal} size={iconSize} />}
    </>
  );

  return (
    <Tag
      ref={ref}
      href={href && !disabled ? href : undefined}
      type={!href ? type : undefined}
      onClick={onClick}
      disabled={!href ? disabled : undefined}
      aria-disabled={href && disabled ? true : undefined}
      tabIndex={href && disabled ? -1 : undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={classes}
      initial="rest"
      whileHover={disabled ? "rest" : "hover"}
      whileTap={disabled ? "rest" : { scale: 0.97 }}
      animate="rest"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {content}
    </Tag>
  );
};

export default Button;
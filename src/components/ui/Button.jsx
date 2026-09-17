import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const MAGNETIC_SPRING = {
  stiffness: 420,
  damping: 24,
  mass: 0.35,
};

const SIZE_STYLES = {
  sm: "min-h-9 px-3.5 text-xs gap-1.5",
  md: "min-h-11 px-5 text-sm gap-2",
  lg: "min-h-12 px-6 text-sm sm:min-h-13 sm:px-7 sm:text-base gap-2.5",
};

const ICON_SIZE = {
  sm: 13,
  md: 15,
  lg: 16,
};

const VARIANT_STYLES = {
  primary: `
    border
    border-accent/80
    bg-accent
    text-white
  `,

  secondary: `
    border
    border-border
    bg-surface
    text-text
  `,

  outline: `
    border
    border-border
    bg-transparent
    text-text
  `,

  ghost: `
    border
    border-transparent
    bg-transparent
    text-text-secondary
  `,
};

const Arrow = ({ external, size }) => {
  const Icon = external ? ArrowUpRight : ArrowRight;

  return (
    <motion.span
      aria-hidden="true"
      className="
        relative
        z-20
        inline-flex
        shrink-0
        items-center
        justify-center
      "
      variants={{
        rest: {
          x: 0,
          y: 0,
        },
        hover: {
          x: 4,
          y: external ? -4 : 0,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 520,
        damping: 24,
        mass: 0.3,
      }}
    >
      <Icon
        size={size}
        strokeWidth={2.2}
      />
    </motion.span>
  );
};

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

  const pullX = useMotionValue(0);
  const pullY = useMotionValue(0);

  const springX = useSpring(
    pullX,
    MAGNETIC_SPRING
  );

  const springY = useSpring(
    pullY,
    MAGNETIC_SPRING
  );

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const spotlight = useMotionTemplate`
    radial-gradient(
      180px circle at ${spotlightX}% ${spotlightY}%,
      rgba(255,255,255,0.20),
      rgba(117,98,232,0.14) 28%,
      transparent 72%
    )
  `;

  const handlePointerMove = (event) => {
    if (
      disabled ||
      event.pointerType === "touch"
    ) {
      return;
    }

    const rect =
      ref.current?.getBoundingClientRect();

    if (!rect) return;

    const relativeX =
      (event.clientX - rect.left) /
      rect.width;

    const relativeY =
      (event.clientY - rect.top) /
      rect.height;

    const pull =
      size === "lg"
        ? 5
        : size === "sm"
        ? 2.5
        : 4;

    pullX.set(
      (relativeX - 0.5) *
        pull *
        2
    );

    pullY.set(
      (relativeY - 0.5) *
        pull *
        2
    );

    spotlightX.set(relativeX * 100);
    spotlightY.set(relativeY * 100);
  };

  const handlePointerLeave = () => {
    pullX.set(0);
    pullY.set(0);

    spotlightX.set(50);
    spotlightY.set(50);
  };

  const isExternal =
    typeof href === "string" &&
    /^https?:\/\//.test(href);

  const iconSize = ICON_SIZE[size];

  const Tag = motion[href ? "a" : "button"];

  const classes = `
    group
    relative
    inline-flex
    items-center
    justify-center
    overflow-hidden
    whitespace-nowrap
    rounded-md
    font-body
    font-medium
    tracking-[-0.01em]
    select-none

    focus-visible:outline-2
    focus-visible:outline-accent
    focus-visible:outline-offset-4

    disabled:pointer-events-none
    disabled:opacity-40

    ${SIZE_STYLES[size]}
    ${VARIANT_STYLES[variant]}
    ${className}
  `;

  const content = (
    <>
      {/* PRIMARY LIGHT FIELD */}
      {variant === "primary" && (
        <>
          <motion.span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
            "
            style={{
              background: spotlight,
            }}
            variants={{
              rest: {
                opacity: 0,
              },
              hover: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
            }}
          />

          {/* Moving sheen */}
          <motion.span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-[45%]
              top-0
              z-[1]
              h-full
              w-[38%]
              rotate-[16deg]
              bg-white/[0.13]
              blur-[10px]
            "
            variants={{
              rest: {
                x: "-120%",
                opacity: 0,
              },
              hover: {
                x: "430%",
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* Outer atmospheric glow */}
          <motion.span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -inset-1
              z-[-1]
              rounded-md
              bg-accent
              blur-[14px]
            "
            variants={{
              rest: {
                opacity: 0.16,
                scale: 0.96,
              },
              hover: {
                opacity: 0.34,
                scale: 1.02,
              },
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          />

          {/* Inner edge */}
          <motion.span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-[2]
              rounded-md
              border
              border-white/[0.10]
            "
            variants={{
              rest: {
                opacity: 0.45,
              },
              hover: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.16,
            }}
          />
        </>
      )}

      {/* SECONDARY / OUTLINE EDGE */}
      {(variant === "secondary" ||
        variant === "outline") && (
        <>
          <motion.span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              rounded-md
              border
              border-accent
            "
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            variants={{
              rest: {
                opacity: 0,
                scale: 0.96,
              },
              hover: {
                opacity: 0.8,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
            }}
          />

          <motion.span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              z-[1]
              h-px
              w-[70%]
              -translate-x-1/2
              origin-center
              bg-accent
            "
            variants={{
              rest: {
                scaleX: 0,
                opacity: 0,
              },
              hover: {
                scaleX: 1,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          <motion.span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              z-0
              rounded-md
              bg-accent/[0.055]
            "
            variants={{
              rest: {
                opacity: 0,
              },
              hover: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.16,
            }}
          />
        </>
      )}

      {/* GHOST */}
      {variant === "ghost" && (
        <motion.span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-1
            bottom-0
            z-0
            h-px
            origin-center
            bg-accent
          "
          variants={{
            rest: {
              scaleX: 0,
              opacity: 0,
            },
            hover: {
              scaleX: 0.75,
              opacity: 0.8,
            },
          }}
          transition={{
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      )}

      {/* LABEL */}
      <motion.span
        className="
          relative
          z-10
          inline-flex
          items-center
        "
        variants={{
          rest: {
            color: "inherit",
          },
          hover:
            variant === "secondary" ||
            variant === "outline"
              ? {
                  color:
                    "var(--color-accent-hover)",
                }
              : variant === "ghost"
              ? {
                  color:
                    "var(--color-text)",
                }
              : {
                  color: "#FFFFFF",
                },
        }}
        transition={{
          duration: 0.14,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.span>

      {showArrow && (
        <Arrow
          external={isExternal}
          size={iconSize}
        />
      )}
    </>
  );

  return (
    <Tag
      ref={ref}
      href={
        href && !disabled
          ? href
          : undefined
      }
      type={
        !href
          ? type
          : undefined
      }
      onClick={onClick}
      disabled={
        !href
          ? disabled
          : undefined
      }
      aria-disabled={
        href && disabled
          ? true
          : undefined
      }
      tabIndex={
        href && disabled
          ? -1
          : undefined
      }
      target={
        isExternal
          ? "_blank"
          : undefined
      }
      rel={
        isExternal
          ? "noopener noreferrer"
          : undefined
      }
      className={classes}
      initial="rest"
      animate="rest"
      whileHover={
        disabled
          ? "rest"
          : "hover"
      }
      whileTap={
        disabled
          ? "rest"
          : {
              scale: 0.975,
            }
      }
      transition={{
        duration: 0.18,
        ease: "easeOut",
      }}
      onPointerMove={
        handlePointerMove
      }
      onPointerLeave={
        handlePointerLeave
      }
      style={{
        x: springX,
        y: springY,
      }}
      {...props}
    >
      {content}
    </Tag>
  );
};

export default Button;
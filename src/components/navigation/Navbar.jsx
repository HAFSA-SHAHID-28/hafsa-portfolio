import hsLogo from "../../assets/logo2.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  {
    label: "About",
    to: "/#about",
  },
  {
    label: "Skills",
    to: "/#skills",
  },
  {
    label: "Projects",
    to: "/#projects",
  },
  {
    label: "Experience",
    to: "/#experience",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // ----------------------------------------
  // Scroll state
  // ----------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ----------------------------------------
  // Close mobile menu on navigation
  // ----------------------------------------

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // ----------------------------------------
  // Scroll to hash target after navigation
  // ----------------------------------------

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }

    const id = location.hash.replace("#", "");

    const scrollToTarget = () => {
      const target = document.getElementById(id);

      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const timeout = window.setTimeout(scrollToTarget, 50);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [location.pathname, location.hash]);

  // ----------------------------------------
  // Lock body scroll when mobile menu opens
  // ----------------------------------------

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // ----------------------------------------
  // Active navigation state
  // ----------------------------------------

  const isCurrentSection = (to) => {
    if (!to.startsWith("/#")) {
      return false;
    }

    return location.pathname === "/" && location.hash === to.replace("/", "");
  };

  // ----------------------------------------
  // Navigation handler
  // ----------------------------------------

  const handleNavClick = (to) => {
    navigate(to);
  };

  // ----------------------------------------
  // Render
  // ----------------------------------------

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          fixed
          inset-x-0
          top-0
          z-50
          px-4
          pt-4
          sm:px-6
          lg:px-8
        "
      >
        <motion.nav
          animate={{
            backgroundColor: isScrolled
              ? "rgba(11, 13, 16, 0.88)"
              : "rgba(11, 13, 16, 0.42)",

            borderColor: isScrolled
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.07)",

            boxShadow: isScrolled
              ? "0 18px 50px rgba(0,0,0,0.28)"
              : "0 8px 30px rgba(0,0,0,0.08)",
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            flex
            h-16
            w-full
            max-w-[1380px]
            items-center
            justify-between
            rounded-lg
            border
            px-4
            backdrop-blur-xl
            sm:px-5
            lg:h-[68px]
            lg:px-6
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <button
            type="button"
            onClick={() => navigate("/")}
            aria-label="Hafsa Shahid home"
            className="
              group
              relative
              flex
              items-center
              gap-3
              rounded-md
              outline-none
              focus-visible:outline-2
              focus-visible:outline-accent
              focus-visible:outline-offset-4
            "
          >
            <span
              aria-hidden="true"
              className="
                relative
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                sm:h-12
                sm:w-12
              "
            >
              <img
                src={hsLogo}
                alt=""
                className="
                  h-full
                  w-full
                  object-contain
                  transition-transform
                  duration-normal
                  ease-out-expo
                  group-hover:scale-[1.04]
                "
              />
            </span>

            <span
              className="
                   hidden
    font-display
    text-base
    sm:text-[20px]
    font-semibold
                tracking-[-0.025em]
                text-text
                transition-colors
                duration-fast
                group-hover:text-accent-hover
                sm:block
              "
            >
              Hafsa Shahid
            </span>
          </button>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active = isCurrentSection(item.to);

              return (
                <motion.button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.to)}
                  whileHover={
                    active
                      ? undefined
                      : {
                          y: -2,
                        }
                  }
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-md
                    px-3
                    py-2
                    text-xs
                    font-medium
                    tracking-[-0.01em]
                    focus-visible:outline-2
                    focus-visible:outline-accent
                    focus-visible:outline-offset-4

                    ${
                      active
                        ? `
                          bg-white/[0.035]
                          text-text
                        `
                        : `
                          text-text-secondary
                          transition-all
                          duration-normal
                          ease-smooth
                          hover:bg-white/[0.035]
                          hover:text-text
                        `
                    }
                  `}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* -----------------------------------------
                      Active underline
                  ----------------------------------------- */}

                  {active && (
                    <motion.span
                      aria-hidden="true"
                      className="
                        absolute
                        inset-x-2
                        bottom-1
                        h-px
                        origin-center
                        bg-accent
                      "
                      initial={{
                        scaleX: 0,
                        opacity: 0,
                      }}
                      animate={{
                        scaleX: 1,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.28,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  )}

                  {/* -----------------------------------------
                      Hover underline
                      Only rendered for inactive tabs
                  ----------------------------------------- */}

                  {!active && (
                    <motion.span
                      aria-hidden="true"
                      className="
                        absolute
                        inset-x-2
                        bottom-1
                        h-px
                        origin-center
                        bg-accent
                      "
                      initial={{
                        scaleX: 0,
                        opacity: 0,
                      }}
                      whileHover={{
                        scaleX: 1,
                        opacity: 0.75,
                      }}
                      transition={{
                        duration: 0.28,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />
                  )}

                  {/* -----------------------------------------
                      Hover border
                      Only rendered for inactive tabs
                  ----------------------------------------- */}

                  {!active && (
                    <motion.span
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-md
                        border
                        border-transparent
                      "
                      whileHover={{
                        borderColor: "rgba(117, 98, 232, 0.18)",
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <div className="hidden items-center lg:flex">
            <motion.button
              type="button"
              onClick={() => handleNavClick("/#contact")}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                inline-flex
                h-10
                items-center
                gap-2
                overflow-hidden
                rounded-md
                border
                border-accent/40
                bg-accent-soft
                px-4
                text-xs
                font-medium
                text-text
                transition-all
                duration-normal
                ease-smooth
                hover:border-accent/70
                hover:bg-accent/[0.18]
                focus-visible:outline-2
                focus-visible:outline-accent
                focus-visible:outline-offset-4
              "
            >
              <span className="relative z-10">Let's Talk</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.9}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-normal
                  ease-out-expo
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />

              {/* Hover sweep */}

              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -translate-x-full
                  bg-white/[0.06]
                  transition-transform
                  duration-slow
                  ease-out-expo
                  group-hover:translate-x-0
                "
              />
            </motion.button>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="
              relative
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              border
              border-border
              bg-surface
              text-text
              transition-all
              duration-normal
              hover:border-border-hover
              hover:bg-surface-hover
              hover:-translate-y-0.5
              focus-visible:outline-2
              focus-visible:outline-accent
              focus-visible:outline-offset-4
              lg:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                >
                  <X size={18} strokeWidth={1.8} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                >
                  <Menu size={18} strokeWidth={1.8} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.nav>
      </motion.header>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}

            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                fixed
                inset-0
                z-40
                cursor-default
                bg-black/60
                backdrop-blur-sm
                lg:hidden
              "
            />

            {/* Menu panel */}

            <motion.div
              initial={{
                opacity: 0,
                y: -14,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                inset-x-4
                top-[92px]
                z-50
                overflow-hidden
                rounded-lg
                border
                border-border
                bg-bg-soft/95
                p-3
                shadow-[0_24px_80px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
                sm:inset-x-6
                lg:hidden
              "
            >
              {/* Mobile links */}

              <div className="space-y-1">
                {NAV_ITEMS.map((item, index) => {
                  const active = isCurrentSection(item.to);

                  return (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.045,
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.to)}
                        className={`
                          group
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-md
                          px-4
                          py-3.5
                          text-left
                          text-sm
                          font-medium
                          transition-all
                          duration-normal

                          ${
                            active
                              ? `
                                bg-white/[0.05]
                                text-text
                              `
                              : `
                                text-text-secondary
                                hover:bg-white/[0.04]
                                hover:text-text
                              `
                          }
                        `}
                      >
                        <span
                          className={
                            active
                              ? ""
                              : "transition-transform duration-normal group-hover:translate-x-0.5"
                          }
                        >
                          {item.label}
                        </span>

                        <span
                          className={`
                            h-1.5
                            w-1.5
                            rounded-full
                            transition-all
                            duration-normal

                            ${
                              active
                                ? "bg-accent shadow-[0_0_14px_var(--color-accent-glow)]"
                                : "bg-transparent group-hover:bg-accent/60"
                            }
                          `}
                        />
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Divider */}

              <div className="my-3 h-px bg-border" />

              {/* Mobile CTA */}

              <div>
                <motion.button
                  type="button"
                  onClick={() => handleNavClick("/#contact")}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    relative
                    flex
                    min-h-11
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-md
                    border
                    border-accent/40
                    bg-accent-soft
                    text-xs
                    font-medium
                    text-text
                    transition-all
                    duration-normal
                    hover:border-accent/70
                    hover:bg-accent/[0.18]
                    focus-visible:outline-2
                    focus-visible:outline-accent
                    focus-visible:outline-offset-4
                  "
                >
                  <span className="relative z-10">Let's Talk</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.9}
                    className="
                      relative
                      z-10
                      transition-transform
                      duration-normal
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-full
                      bg-white/[0.06]
                      transition-transform
                      duration-slow
                      ease-out-expo
                      group-hover:translate-x-0
                    "
                  />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

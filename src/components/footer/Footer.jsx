import hsLogo from "../../assets/logo2.png";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    navigate(to);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-bg-soft">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-52
          -top-52
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-accent/[0.045]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-64
          left-[-12rem]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-accent/[0.025]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="py-16 sm:py-20 lg:py-24">

          {/* =================================================
              CLOSING CTA
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              flex
              flex-col
              gap-8
              overflow-hidden
              border-b
              border-border
              pb-16
              sm:pb-20
              lg:flex-row
              lg:items-end
              lg:justify-between
              lg:gap-16
            "
          >
            {/* subtle CTA atmosphere */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-28
                h-64
                w-64
                rounded-full
                bg-accent/[0.055]
                blur-3xl
              "
            />

            <div className="relative z-10 max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                  LET&apos;S TALK
                </span>
              </div>

              <h2
                className="
                  font-display
                  text-[clamp(2.35rem,5vw,5rem)]
                  font-medium
                  leading-[0.92]
                  tracking-[-0.06em]
                  text-text
                "
              >
                Have a project
                <span className="block text-text-muted">
                  worth discussing?
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-text-secondary sm:text-base">
                I&apos;m open to development opportunities, interesting
                projects and conversations around useful software.
              </p>
            </div>

            {/* CTA button */}

            <motion.a
              href="mailto:hafsa.shahid.dev@gmail.com"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                z-10
                inline-flex
                min-h-12
                shrink-0
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-lg
                border
                border-accent/45
                bg-accent-soft
                px-6
                text-sm
                font-medium
                text-text
                transition-all
                duration-300
                hover:border-accent/70
                hover:bg-accent/[0.18]
                hover:text-white
                hover:shadow-[0_14px_40px_rgba(117,98,232,0.16)]
                sm:px-7
              "
            >
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-20
                  w-16
                  rotate-12
                  bg-white/[0.07]
                  blur-md
                  transition-all
                  duration-700
                  group-hover:left-[120%]
                "
              />

              <Mail
                size={16}
                strokeWidth={1.7}
                className="relative z-10"
              />

              <span className="relative z-10">
                Get in touch
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </motion.a>
          </motion.div>

          {/* =================================================
              FOOTER BODY
          ================================================= */}

          <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-24">

            {/* =================================================
                BRAND
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex items-center gap-4">
                {/* Actual navbar logo */}

                <motion.button
                  type="button"
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    outline-none
                    focus-visible:outline-2
                    focus-visible:outline-accent
                    focus-visible:outline-offset-4
                  "
                >
                  <img
                    src={hsLogo}
                    alt="Hafsa Shahid"
                    className="
                      h-full
                      w-full
                      object-contain
                      transition-transform
                      duration-500
                      ease-out-expo
                    "
                  />
                </motion.button>

                <div>
                  <p className="font-display text-lg font-semibold tracking-[-0.025em] text-text">
                    Hafsa Shahid
                  </p>

                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-text-muted">
                    Frontend-focused MERN Stack Developer
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-md text-sm leading-7 text-text-secondary">
                Building responsive web applications with polished interfaces,
                real functionality and a growing focus on full-stack
                engineering.
              </p>

              {/* Social links */}

              <div className="mt-6 flex items-center gap-3">
                <FooterSocial
                  href="https://github.com/HAFSA-SHAHID-28"
                  label="GitHub"
                  icon="fa-brands fa-github"
                />

                <FooterSocial
                  href="https://www.linkedin.com/in/hafsa-shahid-dev/"
                  label="LinkedIn"
                  icon="fa-brands fa-linkedin-in"
                />

                <FooterSocial
                  href="mailto:hafsa.shahid.dev@gmail.com"
                  label="Email"
                  icon="fa-solid fa-envelope"
                />
              </div>
            </motion.div>

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:min-w-[260px]"
            >
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                Explore
              </p>

              <nav className="grid grid-cols-2 gap-x-10 gap-y-1">
                {NAV_ITEMS.map((item) => (
                  <motion.button
                    key={item.label}
                    type="button"
                    onClick={() => handleNavigation(item.to)}
                    whileHover={{
                      x: 4,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      py-2.5
                      text-left
                      font-display
                      text-sm
                      font-medium
                      text-text-secondary
                      transition-colors
                      duration-300
                      hover:text-text
                    "
                  >
                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.6}
                      className="
                        text-transparent
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-accent
                      "
                    />
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* =================================================
              BOTTOM BAR
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              flex
              flex-col
              gap-5
              border-t
              border-border
              pt-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
                © {new Date().getFullYear()} Hafsa Shahid
              </p>

              <p className="mt-1 text-xs text-text-muted/60">
                Designed &amp; built with React.
              </p>
            </div>

            <div className="flex items-center justify-between gap-6 sm:justify-end">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
                  Open to opportunities
                </span>
              </div>

              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                aria-label="Back to top"
                className="
                  group
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-border
                  bg-surface
                  text-text-muted
                  transition-all
                  duration-300
                  hover:border-accent/40
                  hover:bg-accent-soft
                  hover:text-accent
                "
              >
                <ArrowUp
                  size={16}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

/* =========================================================
   SOCIAL LINK
========================================================= */

const FooterSocial = ({ href, label, icon }) => {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.94,
      }}
      className="
        group
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        overflow-hidden
        rounded-lg
        border
        border-border
        bg-surface
        text-text-muted
        transition-all
        duration-300
        hover:border-accent/40
        hover:bg-accent-soft
        hover:text-accent
        hover:shadow-[0_10px_28px_rgba(117,98,232,0.12)]
      "
    >
      <span
        aria-hidden="true"
        className="
          absolute
          inset-0
          scale-0
          rounded-lg
          bg-accent/10
          transition-transform
          duration-500
          group-hover:scale-100
        "
      />

      <i
        className={`
          ${icon}
          relative
          z-10
          text-[14px]
          transition-transform
          duration-300
          group-hover:scale-110
          group-hover:-rotate-3
        `}
      />
    </motion.a>
  );
};

export default Footer;
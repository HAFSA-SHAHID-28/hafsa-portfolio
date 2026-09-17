import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Container from "../layout/Container";
import Button from "../ui/Button";

const Hero = ({ isLoaded = false }) => {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 45,
    damping: 20,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 45,
    damping: 20,
    mass: 0.8,
  });

  const particles = useMemo(
    () => [
      { left: "8%", top: "22%", size: 2, delay: 0 },
      { left: "18%", top: "68%", size: 1.5, delay: 1.2 },
      { left: "31%", top: "31%", size: 2, delay: 2.1 },
      { left: "44%", top: "18%", size: 1.5, delay: 0.7 },
      { left: "58%", top: "76%", size: 2, delay: 1.8 },
      { left: "68%", top: "28%", size: 1.5, delay: 2.7 },
      { left: "79%", top: "61%", size: 2, delay: 0.4 },
      { left: "91%", top: "25%", size: 1.5, delay: 1.6 },
      { left: "87%", top: "79%", size: 2, delay: 3 },
      { left: "23%", top: "87%", size: 1.5, delay: 2.3 },
    ],
    []
  );

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/HAFSA-SHAHID-28",
      icon: "fa-brands fa-github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hafsa-shahid-dev/",
      icon: "fa-brands fa-linkedin-in",
    },
    {
      label: "Email",
      href: "mailto:hafsa.shahid.dev@gmail.com",
      icon: "fa-solid fa-envelope",
    },
  ];

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const rect = heroRef.current?.getBoundingClientRect();

    if (!rect) return;

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 22);
    mouseY.set(y * 18);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="
        relative
        isolate
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        pt-20
        sm:pt-24
        lg:pt-20
      "
    >
      {/* =========================================================
          HERO BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
          bg-bg
        "
      >
        {/* Main atmosphere */}
        <motion.div
          className="
            absolute
            left-[42%]
            top-[46%]
            h-[620px]
            w-[620px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-accent/[0.075]
            blur-[150px]
          "
          animate={{
            x: [-20, 55, -35, 20, -20],
            y: [20, -35, 30, -15, 20],
            scale: [1, 1.12, 0.94, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary atmosphere */}
        <motion.div
          className="
            absolute
            -right-[12%]
            top-[8%]
            h-[440px]
            w-[440px]
            rounded-full
            bg-accent/[0.035]
            blur-[120px]
          "
          animate={{
            x: [0, -80, -20, 0],
            y: [0, 70, -25, 0],
            scale: [1, 1.16, 0.95, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Light ribbon */}
        <motion.div
          className="
            absolute
            -left-[20%]
            top-[24%]
            h-[260px]
            w-[140%]
            rotate-[-9deg]
            opacity-[0.55]
          "
          style={{
            x: smoothX,
            y: smoothY,
          }}
        >
          <motion.div
            className="
              absolute
              left-0
              top-1/2
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-accent/25
              to-transparent
            "
            animate={{
              x: ["-15%", "15%", "-15%"],
              scaleX: [0.8, 1.05, 0.8],
              opacity: [0.2, 0.75, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="
              absolute
              left-0
              top-[54%]
              h-[80px]
              w-[70%]
              rounded-full
              bg-accent/[0.025]
              blur-[35px]
            "
            animate={{
              x: ["-20%", "80%", "-20%"],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Secondary ribbon */}
        <motion.div
          className="
            absolute
            -left-[25%]
            top-[63%]
            h-[200px]
            w-[150%]
            rotate-[8deg]
            opacity-[0.4]
          "
          animate={{
            x: ["-10%", "12%", "-10%"],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="
              absolute
              top-1/2
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-white/[0.12]
              to-transparent
            "
          />
        </motion.div>

        {/* Large orbit */}
        <motion.div
          className="
            absolute
            left-[58%]
            top-[50%]
            h-[760px]
            w-[760px]
            -translate-x-1/2
            -translate-y-1/2
          "
          style={{
            x: smoothX,
            y: smoothY,
          }}
        >
          <motion.div
            className="
              absolute
              inset-0
              rounded-full
              border
              border-white/[0.055]
            "
            animate={{
              rotate: 360,
              scale: [1, 1.025, 1],
            }}
            transition={{
              rotate: {
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <motion.div
            className="
              absolute
              inset-[12%]
              rounded-full
              border
              border-accent/[0.075]
            "
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="
              absolute
              inset-[25%]
              rounded-full
              border
              border-white/[0.035]
            "
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.span
            className="
              absolute
              left-1/2
              top-0
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-accent
            "
            animate={{
              rotate: 360,
            }}
            style={{
              transformOrigin: "0 380px",
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Technical grid */}
        <motion.div
          className="
            absolute
            inset-[-20%]
            opacity-[0.07]
          "
          style={{
            x: smoothX,
            y: smoothY,
          }}
        >
          <motion.div
            className="
              h-full
              w-full
              [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
              [background-size:64px_64px]
              [mask-image:radial-gradient(ellipse_at_center,black_5%,transparent_70%)]
            "
            animate={{
              backgroundPosition: ["0px 0px", "64px 64px"],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Diagonal structure */}
        <motion.div
          className="
            absolute
            inset-[-40%]
            opacity-[0.055]
          "
          animate={{
            rotate: [0, 1.5, 0, -1.5, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="
              h-full
              w-full
              bg-[repeating-linear-gradient(118deg,transparent_0px,transparent_130px,rgba(255,255,255,0.18)_131px,transparent_132px)]
            "
          />
        </motion.div>

        {/* Particles */}
        <motion.div
          className="absolute inset-0"
          style={{
            x: smoothX,
            y: smoothY,
          }}
        >
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-text"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                opacity: [0.08, 0.5, 0.08],
                scale: [1, 1.7, 1],
              }}
              transition={{
                duration: 3.5 + (index % 3),
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Connecting paths */}
        <motion.svg
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          className="
            absolute
            inset-0
            h-full
            w-full
            opacity-[0.13]
          "
          style={{
            x: smoothX,
            y: smoothY,
          }}
        >
          <motion.path
            d="
              M80 180
              L260 390
              L420 230
              L590 430
              L770 170
              L950 360
              L1130 190
            "
            fill="none"
            stroke="currentColor"
            className="text-text"
            strokeWidth="0.7"
            strokeDasharray="3 14"
            animate={{
              strokeDashoffset: [0, -180],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="
              M130 610
              L320 450
              L510 620
              L690 390
              L880 590
              L1080 420
            "
            fill="none"
            stroke="currentColor"
            className="text-accent"
            strokeWidth="0.6"
            strokeDasharray="2 18"
            animate={{
              strokeDashoffset: [0, 220],
            }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Scan beams */}
        <motion.div
          className="
            absolute
            -left-[30%]
            top-[18%]
            h-px
            w-[160%]
            bg-gradient-to-r
            from-transparent
            via-accent/35
            to-transparent
          "
          animate={{
            x: ["-15%", "15%", "-15%"],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="
            absolute
            -left-[30%]
            top-[78%]
            h-px
            w-[160%]
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
          animate={{
            x: ["15%", "-15%", "15%"],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Energy core */}
        <motion.div
          className="
            absolute
            left-[58%]
            top-1/2
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-accent
          "
          style={{
            x: smoothX,
            y: smoothY,
          }}
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0.35, 0.85, 0.35],
            boxShadow: [
              "0 0 18px rgba(117,98,232,0.15)",
              "0 0 60px rgba(117,98,232,0.42)",
              "0 0 18px rgba(117,98,232,0.15)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(ellipse_at_center,transparent_12%,rgba(7,9,12,0.18)_48%,rgba(7,9,12,0.82)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-56
            bg-gradient-to-t
            from-bg
            to-transparent
          "
        />
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              y: 14,
              filter: "blur(6px)",
            }}
            animate={
              isLoaded
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 14,
                    filter: "blur(6px)",
                  }
            }
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mb-5
              flex
              items-center
              gap-3
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-text-muted
              sm:mb-6
              sm:text-xs
            "
          >
            <motion.span
              aria-hidden="true"
              initial={{
                width: 0,
                opacity: 0,
              }}
              animate={
                isLoaded
                  ? {
                      width: 40,
                      opacity: 1,
                    }
                  : {
                      width: 0,
                      opacity: 0,
                    }
              }
              transition={{
                duration: 0.65,
                delay: 0.22,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px bg-accent"
            />

            <span>Frontend-focused MERN Stack Developer</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 34,
              filter: "blur(10px)",
            }}
            animate={
              isLoaded
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 34,
                    filter: "blur(10px)",
                  }
            }
            transition={{
              duration: 1,
              delay: 0.24,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              max-w-4xl
              font-display
              text-[clamp(2.8rem,5.8vw,5.5rem)]
              font-bold
              leading-[0.94]
              tracking-[-0.06em]
              text-text
            "
          >
            Building web experiences
            <br />

            <motion.span
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={
                isLoaded
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 18,
                    }
              }
              transition={{
                duration: 0.8,
                delay: 0.48,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                inline-block
                text-text-secondary
              "
            >
              with purpose and polish.
            </motion.span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(6px)",
            }}
            animate={
              isLoaded
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    y: 20,
                    filter: "blur(6px)",
                  }
            }
            transition={{
              duration: 0.8,
              delay: 0.62,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-6
              max-w-xl
              text-sm
              leading-6
              text-text-secondary
              sm:mt-7
              sm:text-base
              sm:leading-7
            "
          >
            I build responsive web experiences that bring thoughtful design
            and practical functionality together, from polished frontend
            applications to full-stack web projects.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              isLoaded
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            transition={{
              duration: 0.75,
              delay: 0.78,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-8
              flex
              flex-col
              items-start
              gap-3
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            <Button
              href="/#projects"
              size="lg"
              showArrow
            >
              View selected work
            </Button>

            <Button
              href="/#contact"
              variant="ghost"
              size="lg"
              showArrow={false}
              className="group"
            >
              <span className="inline-flex items-center gap-2">
                Let's talk

                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-normal
                    ease-out-expo
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={
              isLoaded
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            transition={{
              duration: 0.7,
              delay: 0.94,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-9
              flex
              items-center
              gap-3
              sm:mt-10
            "
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.label}
                initial={{
                  opacity: 0,
                  y: 12,
                  scale: 0.88,
                }}
                animate={
                  isLoaded
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : {
                        opacity: 0,
                        y: 12,
                        scale: 0.88,
                      }
                }
                transition={{
                  duration: 0.5,
                  delay: 1.02 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -4,
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                className="
                  group
                  relative
                  inline-flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-border
                  bg-surface/55
                  text-text-muted
                  backdrop-blur-sm
                  transition-colors
                  duration-normal
                  hover:border-border-hover
                  hover:bg-surface-hover
                  hover:text-text
                  focus-visible:outline-2
                  focus-visible:outline-accent
                  focus-visible:outline-offset-4
                  sm:h-12
                  sm:w-12
                "
              >
                {/* Hover glow */}
                <motion.span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-full
                    bg-accent/[0.08]
                  "
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                />

                {/* Icon */}
                <motion.span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-center
                  "
                  whileHover={{
                    rotate:
                      index === 0
                        ? -7
                        : index === 1
                        ? 5
                        : -5,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 18,
                  }}
                >
                  <i
                    aria-hidden="true"
                    className={`${social.icon} text-[15px] sm:text-[16px]`}
                  />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
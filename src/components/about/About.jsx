import {
  ArrowUpRight,
  Code2,
  Database,
  GraduationCap,
  Rocket,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

import Container from "../layout/Container";
import Section from "../layout/Section";

const ABOUT_CARDS = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Computer Science",
    text: "Studying Computer Science and building a stronger foundation in software, programming, and problem-solving.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Learning by building",
    text: "Much of my learning happens through real projects, turning concepts into interfaces and working applications.",
  },
  {
    number: "03",
    icon: Database,
    title: "Growing with MERN",
    text: "My current direction is frontend-focused MERN development, while going deeper into APIs, databases, authentication, and full-stack systems.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Building toward more",
    text: "Long term, I want to use my engineering foundation to build useful software products of my own.",
  },
];

const About = () => {
  return (
    <Section
      id="about"
      className="relative overflow-hidden"
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            -left-[180px]
            top-[18%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-accent/[0.045]
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-[160px]
            bottom-[8%]
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-accent/[0.045]
            blur-[1px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[48%]
            h-px
            w-[70%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-border
            to-transparent
          "
        />
      </div>

      <Container className="relative z-10">
        {/* ─────────────────────────────
            INTRO
        ───────────────────────────── */}

<motion.div
  initial={{
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  viewport={{
    once: true,
    amount: 0.25,
  }}
  transition={{
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1],
  }}
>
  {/* Eyebrow */}
  <div className="mb-5 flex items-center gap-3">
    <motion.span
      initial={{
        width: 0,
      }}
      whileInView={{
        width: 34,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="block h-px bg-accent"
    />

    <span
      className="
        font-mono
        text-[10px]
        uppercase
        tracking-[0.22em]
        text-text-muted
      "
    >
      About me
    </span>
  </div>

  {/* Main heading */}
  <h2
    className="
      max-w-4xl
      font-display
      text-[clamp(2.25rem,4.2vw,4.25rem)]
      font-medium
      leading-[0.95]
      tracking-[-0.055em]
      text-text
    "
  >
    I’m Hafsa, a CS student
    <span className="block text-text-muted">
      building my way into software engineering.
    </span>
  </h2>

  {/* Personal story BELOW heading */}
  <motion.div
    initial={{
      opacity: 0,
      y: 15,
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
      duration: 0.7,
      delay: 0.16,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="
      mt-8
      max-w-2xl
      sm:mt-9
    "
  >
    <p
      className="
        text-sm
        leading-7
        text-text-secondary
        sm:text-base
        sm:leading-8
      "
    >
      I started out in Biology before making the switch to
      Computer Science. Since then, I’ve been learning software
      mostly by building, starting with the fundamentals and
      gradually moving toward complete web applications.
    </p>

    <p
      className="
        mt-5
        text-sm
        leading-7
        text-text-secondary
        sm:text-base
        sm:leading-8
      "
    >
      I enjoy understanding how the pieces of an application
      fit together rather than learning technologies in
      isolation. That mindset has shaped how I approach
      projects, internships, debugging, and new technical
      concepts.
    </p>
  </motion.div>
</motion.div>

        {/* ─────────────────────────────
            DIVIDER
        ───────────────────────────── */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            originX: 0,
          }}
          className="
            mt-16
            h-px
            w-full
            bg-gradient-to-r
            from-accent/45
            via-border
            to-transparent
            sm:mt-20
          "
        />

        {/* ─────────────────────────────
            DIRECTION LABEL
        ───────────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            delay: 0.2,
          }}
          className="
            mb-8
            mt-14
            flex
            items-center
            justify-between
            sm:mb-10
            sm:mt-16
          "
        >
          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-text-muted
            "
          >
            Where I’m headed
          </span>

          <span
            className="
              font-mono
              text-[10px]
              tracking-[0.14em]
              text-text-muted
            "
          >
            CURRENT FOCUS
          </span>
        </motion.div>

        {/* ─────────────────────────────
            PERSONAL PROGRESSION
        ───────────────────────────── */}

        <div className="relative">
          {/* Timeline */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[18px]
              top-6
              bottom-6
              w-px
              bg-border
              sm:left-[23px]
            "
          >
            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 1.7,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                originY: 0,
              }}
              className="
                h-full
                w-full
                bg-gradient-to-b
                from-accent
                via-accent/45
                to-transparent
              "
            />
          </div>

          <div className="space-y-5">
            {ABOUT_CARDS.map((card, index) => (
              <AboutCard
                key={card.number}
                {...card}
                delay={0.12 + index * 0.12}
                active={index === 0}
              />
            ))}
          </div>
        </div>

        {/* ─────────────────────────────
            CLOSING
        ───────────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-20
            border-t
            border-border
            pt-8
            sm:mt-28
            sm:pt-9
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-text-muted
                "
              >
                The bigger picture
              </p>

              <p
                className="
                  mt-3
                  max-w-2xl
                  font-display
                  text-lg
                  leading-7
                  tracking-[-0.02em]
                  text-text
                  sm:text-xl
                "
              >
                I’m building the skills and experience to create
                useful software.
                <span className="text-text-muted">
                  {" "}
                  One project, one problem, and one iteration at a
                  time.
                </span>
              </p>
            </div>

            <motion.div
              animate={{
                y: [0, 5, 0],
                x: [0, 2, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                hidden
                shrink-0
                text-text-muted
                sm:block
              "
            >
              <ArrowDownRightIcon />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

/* ─────────────────────────────────
   ABOUT CARD
───────────────────────────────── */

const AboutCard = ({
  number,
  icon: Icon,
  title,
  text,
  delay,
  active,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 360,
    damping: 28,
    mass: 0.4,
  });

  const springY = useSpring(y, {
    stiffness: 360,
    damping: 28,
    mass: 0.4,
  });

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const rect =
      event.currentTarget.getBoundingClientRect();

    const relativeX =
      (event.clientX - rect.left) / rect.width - 0.5;

    const relativeY =
      (event.clientY - rect.top) / rect.height - 0.5;

    x.set(relativeX * 5);
    y.set(relativeY * 5);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 35,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className="
        group
        relative
        pl-12
        sm:pl-16
      "
    >
      {/* Timeline node */}
      <motion.div
        whileHover={{
          scale: 1.12,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 22,
        }}
        className="
          absolute
          left-0
          top-5
          flex
          h-[37px]
          w-[37px]
          items-center
          justify-center
          rounded-full
          border
          border-border
          bg-bg
          text-text-muted
          transition-colors
          duration-200
          group-hover:border-accent/50
          group-hover:text-text
          sm:h-[47px]
          sm:w-[47px]
        "
      >
        <Icon
          size={16}
          strokeWidth={1.7}
        />

        {active && (
          <motion.span
            aria-hidden="true"
            animate={{
              opacity: [0.15, 0.55, 0.15],
              scale: [0.9, 1.18, 0.9],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-[-5px]
              rounded-full
              border
              border-accent/40
            "
          />
        )}
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{
          borderColor: "rgba(255,255,255,0.16)",
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          relative
          overflow-hidden
          rounded-xl
          border
          border-border
          bg-surface/45
          px-5
          py-5
          backdrop-blur-sm
          sm:px-6
          sm:py-6
        "
      >
        {/* Hover atmosphere */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
          style={{
            background:
              "radial-gradient(circle at 12% 50%, rgba(117,98,232,0.11), transparent 42%)",
          }}
        />

        {/* Hover accent line */}
        <motion.div
          aria-hidden="true"
          className="
            absolute
            left-0
            top-0
            h-px
            w-0
            bg-accent
            transition-all
            duration-500
            ease-out
            group-hover:w-24
          "
        />

        <div
          className="
            relative
            z-10
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-start
            sm:justify-between
          "
        >
          <div className="max-w-2xl">
            <div
              className="
                mb-3
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.16em]
                  text-text-muted
                "
              >
                {number}
              </span>

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-5
                  bg-border
                  transition-all
                  duration-300
                  group-hover:w-8
                  group-hover:bg-accent/50
                "
              />
            </div>

            <h3
              className="
                font-display
                text-lg
                font-medium
                tracking-[-0.025em]
                text-text
                sm:text-xl
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-text-muted
                sm:text-[15px]
              "
            >
              {text}
            </p>
          </div>

          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              gap-5
              sm:flex-col
              sm:items-end
              sm:justify-between
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-border
                bg-bg-soft
                text-text-muted
                transition-all
                duration-200
                group-hover:border-accent/40
                group-hover:text-text
                sm:h-10
                sm:w-10
              "
            >
              <Icon
                size={17}
                strokeWidth={1.7}
              />
            </div>

            <ArrowUpRight
              size={17}
              strokeWidth={1.6}
              className="
                text-text-muted
                transition-all
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-text
              "
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ArrowDownRightIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7 7L17 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M17 9V17H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default About;
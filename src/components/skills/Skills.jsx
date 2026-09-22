import { useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Database,
  GitBranch,
  Globe2,
  Server,
  Zap,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

import Container from "../layout/Container";
import Section from "../layout/Section";

const SKILL_CATEGORIES = {
  frontend: {
    label: "Frontend",
    icon: Globe2,
    description:
      "The area where I have the strongest hands-on experience — building responsive interfaces and interactive web experiences.",
    skills: [
      {
        name: "HTML5",
        short: "HTML",
        mark: "5",
        description:
          "Semantic structure, accessible markup, and clean page foundations.",
        accent: "primary",
      },
      {
        name: "CSS3",
        short: "CSS",
        mark: "3",
        description:
          "Responsive layouts, Flexbox, Grid, animations, and custom styling.",
        accent: "secondary",
      },
      {
        name: "JavaScript",
        short: "JS",
        mark: "JS",
        description:
          "Application logic, DOM interaction, async workflows, APIs, and browser functionality.",
        accent: "primary",
      },
      {
        name: "React",
        short: "R",
        mark: "⚛",
        description:
          "Component-based interfaces, state, routing, reusable UI, and application flows.",
        accent: "secondary",
      },
      {
        name: "Bootstrap",
        short: "BS",
        mark: "B",
        description:
          "Responsive layouts and utility-driven interface development.",
        accent: "primary",
      },
    ],
  },

  backend: {
    label: "Backend",
    icon: Server,
    description:
      "Growing from frontend development into the server-side systems that power complete web applications.",
    skills: [
      {
        name: "Node.js",
        short: "Node",
        mark: "N",
        description:
          "Server-side JavaScript and backend application development.",
        accent: "primary",
      },
      {
        name: "Express.js",
        short: "EXP",
        mark: "E",
        description:
          "REST APIs, middleware, routing, controllers, and backend structure.",
        accent: "secondary",
      },
      {
        name: "REST APIs",
        short: "API",
        mark: "{}",
        description:
          "Connecting frontend applications with structured backend services.",
        accent: "primary",
      },
    ],
  },

  integrations: {
    label: "Integrations",
    icon: Zap,
    description:
      "Project-level experience connecting applications with databases, real-time systems, and external services.",
    skills: [
      {
        name: "MongoDB",
        short: "DB",
        mark: "M",
        description:
          "Document-based data storage for MERN applications.",
        accent: "primary",
      },
      {
        name: "Mongoose",
        short: "ODM",
        mark: "M",
        description:
          "Schema modeling and database interaction in Node.js applications.",
        accent: "secondary",
      },
      {
        name: "Socket.IO",
        short: "IO",
        mark: "↔",
        description:
          "Real-time, event-based communication between clients and servers.",
        accent: "primary",
      },
      {
        name: "JWT",
        short: "AUTH",
        mark: "◆",
        description:
          "Token-based authentication and protected application flows.",
        accent: "secondary",
      },
      {
        name: "Cloudinary",
        short: "MEDIA",
        mark: "C",
        description:
          "Cloud-based media handling and image upload workflows.",
        accent: "primary",
      },
      {
        name: "Nodemailer",
        short: "MAIL",
        mark: "✉",
        description:
          "Application-triggered email workflows and notifications.",
        accent: "secondary",
      },
      {
        name: "Stripe",
        short: "PAY",
        mark: "$",
        description:
          "Payment integration experience within full-stack projects.",
        accent: "primary",
      },
      {
        name: "Axios",
        short: "HTTP",
        mark: "↗",
        description:
          "HTTP communication between frontend applications and APIs.",
        accent: "secondary",
      },
    ],
  },

  workflow: {
    label: "Workflow",
    icon: GitBranch,
    description:
      "The tools I use around the development process to build, version, debug, and ship projects.",
    skills: [
      {
        name: "Git",
        short: "GIT",
        mark: "↯",
        description:
          "Version control and structured project history.",
        accent: "primary",
      },
      {
        name: "GitHub",
        short: "GH",
        mark: "GH",
        description:
          "Repositories, collaboration, project history, and public code.",
        accent: "secondary",
      },
      {
        name: "Vite",
        short: "VITE",
        mark: "V",
        description:
          "Modern frontend development and build tooling.",
        accent: "primary",
      },
      {
        name: "Deployment",
        short: "SHIP",
        mark: "↑",
        description:
          "Deploying and maintaining live web projects.",
        accent: "secondary",
      },
      {
        name: "Debugging",
        short: "DEBUG",
        mark: "⌁",
        description:
          "Tracing problems through application logic and implementation.",
        accent: "primary",
      },
    ],
  },
};

const CATEGORY_ORDER = [
  "frontend",
  "backend",
  "integrations",
  "workflow",
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const category = SKILL_CATEGORIES[activeCategory];

  return (
    <Section
      id="skills"
      className="relative overflow-hidden"
    >
      <SkillsBackground />

      <Container className="relative z-10">
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
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
            <div className="mb-5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 30 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-px bg-accent"
              />

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-text-muted
                "
              >
                Skills
              </span>
            </div>

            <h2
              className="
                max-w-3xl
                font-display
                text-[clamp(2.25rem,4vw,4rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.055em]
                text-text
              "
            >
              What I work with
              <span className="block text-text-muted">
                to build for the web.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
            }}
            className="
              max-w-md
              lg:pb-1
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
              Frontend development is my strongest area, with
              growing full-stack capability through hands-on
              MERN projects and application integrations.
            </p>
          </motion.div>
        </div>

        {/* CATEGORY NAV */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mt-12
            flex
            gap-2
            overflow-x-auto
            border-b
            border-border
            pb-3
            scrollbar-none
            sm:mt-14
            sm:gap-3
          "
        >
          {CATEGORY_ORDER.map((key) => {
            const item = SKILL_CATEGORIES[key];
            const Icon = item.icon;
            const active = activeCategory === key;

            return (
              <CategoryButton
                key={key}
                active={active}
                label={item.label}
                Icon={Icon}
                onClick={() => setActiveCategory(key)}
              />
            );
          })}
        </motion.div>

        {/* ACTIVE CATEGORY DESCRIPTION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-3">
              <span
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.18em]
                  text-accent
                "
              >
                0{CATEGORY_ORDER.indexOf(activeCategory) + 1}
              </span>

              <span className="h-px w-8 bg-border" />

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-text-muted
                "
              >
                {category.label}
              </span>
            </div>

            <p
              className="
                max-w-2xl
                text-sm
                leading-6
                text-text-muted
                sm:text-right
              "
            >
              {category.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* SKILLS GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-7
              grid
              gap-4
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {category.skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* FOOTER SIGNAL */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-border
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-accent
                shadow-[0_0_10px_rgba(117,98,232,0.7)]
              "
            />

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-text-muted
              "
            >
              Current stack
            </span>
          </div>

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.14em]
              text-text-muted
            "
          >
            Frontend → MERN → Full-stack
          </span>
        </motion.div>
      </Container>
    </Section>
  );
};

/* ─────────────────────────────────
   CATEGORY BUTTON
───────────────────────────────── */

const CategoryButton = ({
  active,
  label,
  Icon,
  onClick,
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{
        scale: 0.97,
      }}
      className={`
        group
        relative
        flex
        shrink-0
        items-center
        gap-2.5
        overflow-hidden
        rounded-full
        border
        px-4
        py-2.5
        text-sm
        transition-colors
        duration-300
        ${
          active
            ? "border-text bg-text text-bg"
            : "border-border bg-transparent text-text-muted hover:border-border-hover hover:text-text"
        }
      `}
    >
      {active && (
        <motion.span
          layoutId="skills-active-pill"
          className="
            absolute
            inset-0
            rounded-full
            bg-text
          "
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 32,
          }}
        />
      )}

      <Icon
        size={14}
        strokeWidth={1.8}
        className="relative z-10"
      />

      <span className="relative z-10 font-medium">
        {label}
      </span>

      {active && (
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="
            relative
            z-10
            h-1.5
            w-1.5
            rounded-full
            bg-accent
          "
        />
      )}
    </motion.button>
  );
};

/* ─────────────────────────────────
   SKILL CARD
───────────────────────────────── */

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 24,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 24,
    mass: 0.4,
  });

  const spotlight = useMotionTemplate`
    radial-gradient(
      260px circle at ${springX}% ${springY}%,
      rgba(117,98,232,0.12),
      transparent 72%
    )
  `;

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;

    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set(
      ((event.clientX - rect.left) / rect.width) * 100
    );

    mouseY.set(
      ((event.clientY - rect.top) / rect.height) * 100
    );
  };

  const handlePointerLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.article
      ref={ref}
      initial={{
        opacity: 0,
        y: 22,
        filter: "blur(5px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.055,
        ease: [0.16, 1, 0.3, 1],
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group"
    >
      <motion.div
        whileHover={{
          y: -5,
        }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 28,
        }}
        className="
          relative
          h-full
          min-h-[255px]
          overflow-hidden
          rounded-2xl
          border
          border-border
          bg-surface/70
          p-6
          sm:min-h-[275px]
          sm:p-7
        "
      >
        {/* Cursor glow */}
        <motion.div
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
            background: spotlight,
          }}
        />

        {/* Ambient top glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-32
            w-32
            rounded-full
            bg-accent/[0.04]
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-accent/[0.10]
          "
        />

        {/* Animated border */}
        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-2xl
            border
            border-transparent
          "
          whileHover={{
            borderColor:
              "rgba(117,98,232,0.38)",
          }}
          transition={{
            duration: 0.3,
          }}
        />

        {/* TOP */}
        <div
          className="
            relative
            z-10
            flex
            items-start
            justify-between
          "
        >
          <SkillMark
            mark={skill.mark}
            accent={skill.accent}
          />

          <motion.div
            initial={{
              opacity: 0.35,
            }}
            whileHover={{
              opacity: 1,
              rotate: 8,
              x: 2,
              y: -2,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              text-text-muted
              group-hover:text-text
            "
          >
            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
            />
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mt-8">
          <div className="flex items-baseline gap-2">
            <h3
              className="
                font-display
                text-xl
                font-semibold
                tracking-[-0.035em]
                text-text
                sm:text-[1.4rem]
              "
            >
              {skill.name}
            </h3>

            <motion.span
              initial={{
                opacity: 0,
                x: -4,
              }}
              whileHover={{
                opacity: 1,
                x: 0,
              }}
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-accent
              "
            >
              {skill.short}
            </motion.span>
          </div>

          <p
            className="
              mt-3
              max-w-sm
              text-sm
              leading-6
              text-text-secondary
            "
          >
            {skill.description}
          </p>
        </div>

        {/* BOTTOM SIGNAL */}
        <div
          className="
            absolute
            bottom-6
            left-6
            right-6
            flex
            items-center
            justify-between
            sm:bottom-7
            sm:left-7
            sm:right-7
          "
        >
          <div className="flex items-center gap-2">
            <motion.span
              className="
                h-1
                w-1
                rounded-full
                bg-text-muted
                transition-all
                duration-300
                group-hover:h-1.5
                group-hover:w-6
                group-hover:bg-accent
              "
            />

            <span
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-text-muted
              "
            >
              Hands-on
            </span>
          </div>

          <span
            className="
              font-mono
              text-[8px]
              tracking-[0.12em]
              text-text-muted
            "
          >
            0{index + 1}
          </span>
        </div>

        {/* Bottom accent sweep */}
        <motion.div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            h-px
            bg-gradient-to-r
            from-accent
            to-transparent
          "
          initial={{
            width: "0%",
            opacity: 0,
          }}
          whileHover={{
            width: "55%",
            opacity: 1,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </motion.div>
    </motion.article>
  );
};

/* ─────────────────────────────────
   SKILL MARK
───────────────────────────────── */

const SkillMark = ({ mark, accent }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.06,
        rotate: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 22,
      }}
      className="
        relative
        flex
        h-14
        w-14
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-border
        bg-bg-soft
        text-text
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
      "
    >
      <span
        aria-hidden="true"
        className={`
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          ${
            accent === "primary"
              ? "bg-accent/[0.10]"
              : "bg-white/[0.045]"
          }
        `}
      />

      <span
        className="
          relative
          z-10
          font-display
          text-base
          font-bold
          tracking-[-0.04em]
        "
      >
        {mark}
      </span>

      <span
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-accent
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </motion.div>
  );
};

/* ─────────────────────────────────
   BACKGROUND
───────────────────────────────── */

const SkillsBackground = () => {
  return (
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
          scale: 0.75,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.1,
        }}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute
          left-[18%]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-accent/[0.035]
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -16, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-[180px]
          bottom-[12%]
          h-[400px]
          w-[400px]
          rounded-full
          border
          border-accent/[0.035]
          blur-[2px]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "54px 54px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />

      <motion.div
        animate={{
          y: ["-10%", "110%"],
          opacity: [0, 0.28, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-accent/40
          to-transparent
        "
      />
    </div>
  );
};

export default Skills;
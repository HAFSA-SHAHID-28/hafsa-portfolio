import { useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Monitor,
  Server,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Container from "../layout/Container";
import Section from "../layout/Section";

/* ─────────────────────────────────
   DATA
───────────────────────────────── */

const SKILL_GROUPS = {
  frontend: {
    label: "Frontend",
    index: "01",
    icon: Monitor,
    description:
      "The area where most of my development work currently happens.",
    skills: [
      {
        name: "HTML",
        detail: "Semantic markup & structure",
        icon: Globe,
      },
      {
        name: "CSS",
        detail: "Layouts, styling & responsive interfaces",
        icon: Layers3,
      },
      {
        name: "JavaScript",
        detail: "Application logic & browser APIs",
        icon: Braces,
      },
      {
        name: "TypeScript",
        detail: "Typed JavaScript development",
        icon: Terminal,
      },
      {
        name: "React",
        detail: "Component-driven applications",
        icon: Code2,
      },
      {
        name: "Vite",
        detail: "Modern frontend tooling",
        icon: Zap,
      },
      {
        name: "Tailwind CSS",
        detail: "Utility-first interface styling",
        icon: Wrench,
      },
      {
        name: "Bootstrap",
        detail: "Responsive UI development",
        icon: Layers3,
      },
    ],
  },

  backend: {
    label: "Backend",
    index: "02",
    icon: Server,
    description:
      "Growing deeper into the systems behind the interfaces I build.",
    skills: [
      {
        name: "Node.js",
        detail: "Server-side JavaScript",
        icon: Server,
      },
      {
        name: "Express.js",
        detail: "Routing & REST APIs",
        icon: Braces,
      },
      {
        name: "MongoDB",
        detail: "Document-based data storage",
        icon: Database,
      },
      {
        name: "Firebase",
        detail: "Backend services & application data",
        icon: Cloud,
      },
      {
        name: "Postman",
        detail: "API development & testing",
        icon: Terminal,
      },
    ],
  },

  tools: {
    label: "Tools & Workflow",
    index: "03",
    icon: Wrench,
    description:
      "Tools I use to build, version, test, deploy and maintain projects.",
    skills: [
      {
        name: "Git",
        detail: "Version control",
        icon: GitBranch,
      },
      {
        name: "GitHub",
        detail: "Repositories & collaboration",
        icon: GitBranch,
      },
      {
        name: "Vercel",
        detail: "Web deployment",
        icon: Zap,
      },
      {
        name: "Netlify",
        detail: "Web deployment",
        icon: Globe,
      },
      {
        name: "Cloudinary",
        detail: "Media storage & delivery",
        icon: Cloud,
      },
      {
        name: "EmailJS",
        detail: "Client-side email integration",
        icon: Terminal,
      },
    ],
  },

  motion: {
    label: "Motion & Interaction",
    index: "04",
    icon: Zap,
    description:
      "Technologies I use to make interfaces feel more responsive and alive.",
    skills: [
      {
        name: "Motion",
        detail: "React animation & interaction",
        icon: Zap,
      },
      {
        name: "GSAP",
        detail: "Advanced interface animation",
        icon: Zap,
      },
      {
        name: "Motion Design",
        detail: "Interaction, transitions & visual feedback",
        icon: Layers3,
      },
      {
        name: "Responsive Design",
        detail: "Consistent experiences across screen sizes",
        icon: Monitor,
      },
    ],
  },
};

const GROUP_KEYS = Object.keys(SKILL_GROUPS);

/* ─────────────────────────────────
   MAIN
───────────────────────────────── */

const Skills = () => {
  const [activeGroup, setActiveGroup] = useState("frontend");

  const current = SKILL_GROUPS[activeGroup];
  const CurrentIcon = current.icon;

  return (
    <Section
      id="skills"
      className="
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-36
      "
    >
      {/* Ambient background */}
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
            amount: 0.1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            left-[25%]
            top-[8%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-accent/[0.025]
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, 18, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-[180px]
            bottom-[12%]
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-accent/[0.025]
            blur-[1px]
          "
        />
      </div>

      <Container className="relative z-10">
        {/* ─────────────────────────
            HEADER
        ───────────────────────── */}

        <motion.header
          initial={{
            opacity: 0,
            y: 28,
            filter: "blur(7px)",
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
          <div className="flex items-center gap-3">
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
              className="h-px bg-accent"
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
              Skills
            </span>
          </div>

          {/* Main heading */}
         <h2
  className="
    mt-6
    max-w-4xl
    font-display
    text-[clamp(2.25rem,4.2vw,4.25rem)]
    font-medium
    leading-[0.95]
    tracking-[-0.055em]
    text-text
  "
>
  Technologies I use
  <span className="block text-text-muted">
    to turn ideas into interfaces.
  </span>
</h2>
          

          {/* Paragraph BELOW heading */}
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
              A practical toolkit built around frontend development,
              with growing experience across backend systems,
              integrations, deployment and interaction design.
            </p>
          </motion.div>
        </motion.header>

        {/* Header divider */}
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
            delay: 0.18,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            originX: 0,
          }}
          className="
            mt-14
            h-px
            w-full
            bg-gradient-to-r
            from-accent/40
            via-border
            to-transparent
            sm:mt-16
          "
        />

        {/* ─────────────────────────
            SKILLS AREA
        ───────────────────────── */}

        <div
          className="
            mt-8
            lg:mt-10
          "
        >
          <div
            className="
              grid
              lg:grid-cols-[240px_minmax(0,1fr)]
              xl:grid-cols-[270px_minmax(0,1fr)]
            "
          >
            {/* CATEGORY NAV */}

            <motion.aside
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
                delay: 0.12,
              }}
              className="
                border-b
                border-border
                py-6
                lg:border-b-0
                lg:border-r
                lg:py-8
                lg:pr-8
                xl:pr-10
              "
            >
              <div
                className="
                  mb-5
                  flex
                  items-center
                  justify-between
                  lg:mb-7
                "
              >
                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-text-muted
                  "
                >
                  Categories
                </span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    text-text-muted/45
                  "
                >
                  {String(GROUP_KEYS.length).padStart(2, "0")}
                </span>
              </div>

              <nav
                aria-label="Skill categories"
                className="
                  grid
                  grid-cols-2
                  gap-x-4
                  sm:grid-cols-4
                  lg:block
                "
              >
                {GROUP_KEYS.map((key) => (
                  <CategoryItem
                    key={key}
                    item={SKILL_GROUPS[key]}
                    active={activeGroup === key}
                    onClick={() => setActiveGroup(key)}
                  />
                ))}
              </nav>
            </motion.aside>

            {/* SKILL CONTENT */}

            <div
              className="
                min-w-0
                lg:pl-8
                xl:pl-12
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGroup}
                  initial={{
                    opacity: 0,
                    y: 12,
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
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  {/* Group header */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      border-b
                      border-border
                      py-7
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      lg:py-8
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          bg-surface/40
                          text-text-muted
                        "
                      >
                        <CurrentIcon
                          size={16}
                          strokeWidth={1.6}
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-2.5">
                          <span
                            className="
                              font-mono
                              text-[9px]
                              tracking-[0.16em]
                              text-accent
                            "
                          >
                            {current.index}
                          </span>

                          <span
                            className="
                              font-display
                              text-base
                              font-medium
                              tracking-[-0.02em]
                              text-text
                              sm:text-lg
                            "
                          >
                            {current.label}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p
                      className="
                        max-w-lg
                        text-xs
                        leading-6
                        text-text-muted
                        sm:text-right
                        sm:text-sm
                      "
                    >
                      {current.description}
                    </p>
                  </div>

                  {/* Skill rows */}

                  <div>
                    {current.skills.map((skill, index) => (
                      <SkillRow
                        key={skill.name}
                        skill={skill}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ─────────────────────────
            FOOTER SIGNAL
        ───────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-text-muted
            "
          >
            Current focus
          </span>

          <div
            className="
              flex
              items-center
              gap-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.15em]
              text-text-muted
            "
          >
            <span className="text-text">
              Frontend
            </span>

            <span className="text-accent">
              →
            </span>

            <span>
              MERN
            </span>

            <span className="text-accent">
              →
            </span>

            <span>
              Full-stack
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

/* ─────────────────────────────────
   CATEGORY ITEM
───────────────────────────────── */

const CategoryItem = ({
  item,
  active,
  onClick,
}) => {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        relative
        flex
        w-full
        items-center
        gap-3
        py-3
        text-left
        lg:py-3.5
      "
    >
      <motion.span
        animate={{
          scaleY: active ? 1 : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          -left-[1px]
          top-1/2
          hidden
          h-6
          w-px
          -translate-y-1/2
          origin-center
          bg-accent
          lg:block
        "
      />

      <span
        className={`
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          transition-all
          duration-300
          ${
            active
              ? "border-accent/40 bg-accent/[0.08] text-text"
              : "border-transparent text-text-muted group-hover:border-border group-hover:text-text"
          }
        `}
      >
        <Icon
          size={14}
          strokeWidth={1.7}
        />
      </span>

      <span
        className={`
          min-w-0
          font-display
          text-sm
          tracking-[-0.01em]
          transition-all
          duration-300
          ${
            active
              ? "translate-x-1 text-text"
              : "text-text-muted group-hover:translate-x-1 group-hover:text-text"
          }
        `}
      >
        {item.label}
      </span>

      <span
        className={`
          ml-auto
          hidden
          font-mono
          text-[8px]
          transition-opacity
          duration-300
          lg:block
          ${
            active
              ? "text-accent opacity-100"
              : "text-text-muted opacity-0 group-hover:opacity-50"
          }
        `}
      >
        {item.index}
      </span>
    </button>
  );
};

/* ─────────────────────────────────
   SKILL ROW
───────────────────────────────── */

const SkillRow = ({
  skill,
  index,
}) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 18,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.055,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        flex
        min-h-[76px]
        items-center
        gap-4
        border-b
        border-border
        sm:min-h-[86px]
        sm:gap-6
      "
    >
      {/* Hover line */}

      <motion.span
        aria-hidden="true"
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          originX: 0,
        }}
        className="
          absolute
          bottom-[-1px]
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-accent
          via-accent/30
          to-transparent
        "
      />

      {/* Number */}

      <span
        className="
          hidden
          w-6
          shrink-0
          font-mono
          text-[9px]
          tracking-[0.1em]
          text-text-muted/40
          sm:block
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}

      <motion.div
        whileHover={{
          x: 3,
          scale: 1.08,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 22,
        }}
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-border
          bg-surface/30
          text-text-muted
          transition-colors
          duration-300
          group-hover:border-accent/30
          group-hover:bg-accent/[0.06]
          group-hover:text-text
          sm:h-10
          sm:w-10
        "
      >
        <Icon
          size={16}
          strokeWidth={1.6}
        />
      </motion.div>

      {/* Text */}

      <div className="min-w-0 flex-1">
        <h3
          className="
            font-display
            text-base
            font-medium
            tracking-[-0.025em]
            text-text
            transition-transform
            duration-300
            group-hover:translate-x-1
            sm:text-lg
          "
        >
          {skill.name}
        </h3>

        <p
          className="
            mt-1
            truncate
            text-xs
            text-text-muted
            sm:text-sm
          "
        >
          {skill.detail}
        </p>
      </div>

      {/* Arrow */}

      <motion.div
        initial={{
          opacity: 0,
          x: -5,
        }}
        whileHover={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          hidden
          text-accent
          sm:block
        "
      >
        <ArrowUpRight
          size={17}
          strokeWidth={1.5}
        />
      </motion.div>
    </motion.div>
  );
};

export default Skills;
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
import { motion } from "motion/react";

import Container from "../layout/Container";
import Section from "../layout/Section";

/* ─────────────────────────────────
   DATA
───────────────────────────────── */

const SKILL_GROUPS = [
  {
    index: "01",
    label: "Frontend",
    icon: Monitor,
    description:
      "Building responsive interfaces and interactive web applications.",
    skills: [
      { name: "React", icon: Code2 },
      { name: "JavaScript", icon: Braces },
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Layers3 },
      { name: "TypeScript", icon: Terminal },
      { name: "Vite", icon: Zap },
      { name: "Tailwind CSS", icon: Wrench },
      { name: "Bootstrap", icon: Layers3 },
    ],
  },

  {
    index: "02",
    label: "Backend",
    icon: Server,
    description:
      "Developing the systems and APIs behind the interfaces I build.",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Braces },
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Cloud },
      { name: "Postman", icon: Terminal },
    ],
  },

  {
    index: "03",
    label: "Tools & Workflow",
    icon: Wrench,
    description:
      "Tools I use to manage code, integrate services and deploy projects.",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Vercel", icon: Zap },
      { name: "Netlify", icon: Globe },
      { name: "Cloudinary", icon: Cloud },
      { name: "EmailJS", icon: Terminal },
    ],
  },

  {
    index: "04",
    label: "Motion & Interaction",
    icon: Zap,
    description:
      "Creating responsive interactions, transitions and animated interfaces.",
    skills: [
      { name: "Motion", icon: Zap },
      { name: "GSAP", icon: Zap },
      { name: "Responsive Design", icon: Monitor },
      { name: "Motion Design", icon: Layers3 },
    ],
  },
];

/* ─────────────────────────────────
   MAIN
───────────────────────────────── */

const Skills = () => {
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
      {/* ─────────────────────────
          AMBIENT BACKGROUND
      ───────────────────────── */}

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
            left-[18%]
            top-[8%]
            h-[560px]
            w-[560px]
            rounded-full
            bg-accent/[0.025]
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, 22, 0],
            y: [0, -18, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-[180px]
            bottom-[8%]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-accent/[0.025]
            blur-[1px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            top-[42%]
            h-px
            bg-gradient-to-r
            from-transparent
            via-border/[0.35]
            to-transparent
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
              to build and ship web applications.
            </span>
          </h2>

          {/* Paragraph */}

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

        {/* ─────────────────────────
            DIVIDER
        ───────────────────────── */}

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
            SKILL CARDS
        ───────────────────────── */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:mt-12
            sm:grid-cols-2
            sm:gap-5
            lg:mt-14
            lg:gap-6
          "
        >
          {SKILL_GROUPS.map((group, index) => (
            <SkillCard
              key={group.label}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* ─────────────────────────
            BOTTOM SIGNAL
        ───────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
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
            delay: 0.15,
          }}
          className="
            mt-10
            flex
            flex-col
            gap-3
            border-t
            border-border
            pt-6
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
            Current direction
          </span>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-2
              gap-y-1
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
   SKILL CARD
───────────────────────────────── */

const SkillCard = ({ group, index }) => {
  const Icon = group.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 32,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface/55
        p-6
        transition-colors
        duration-500
        hover:border-accent/30
        hover:bg-surface
        sm:p-7
        lg:p-8
      "
    >
      {/* Hover atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-56
          w-56
          rounded-full
          bg-accent/[0.055]
          opacity-0
          blur-[70px]
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* Top accent line */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{
          originX: 0,
        }}
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-accent
          via-accent/30
          to-transparent
        "
      />

      {/* Header */}

      <div
        className="
          relative
          flex
          items-start
          justify-between
          gap-5
        "
      >
        <div className="flex items-center gap-4">
          {/* Category icon */}

          <motion.div
            whileHover={{
              scale: 1.06,
              rotate: -4,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 20,
            }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-border
              bg-bg-soft/80
              text-text-muted
              transition-all
              duration-300
              group-hover:border-accent/30
              group-hover:bg-accent/[0.06]
              group-hover:text-text
            "
          >
            <Icon
              size={18}
              strokeWidth={1.6}
            />
          </motion.div>

          <div>
            <span
              className="
                block
                font-mono
                text-[9px]
                tracking-[0.16em]
                text-accent
              "
            >
              {group.index}
            </span>

            <h3
              className="
                mt-1
                font-display
                text-xl
                font-medium
                tracking-[-0.035em]
                text-text
                sm:text-[22px]
              "
            >
              {group.label}
            </h3>
          </div>
        </div>

        {/* Corner arrow */}

        <motion.div
          initial={{
            opacity: 0.35,
            x: 0,
            y: 0,
          }}
          whileHover={{
            opacity: 1,
            x: 3,
            y: -3,
          }}
          className="
            text-text-muted
            transition-colors
            duration-300
            group-hover:text-accent
          "
        >
          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
          />
        </motion.div>
      </div>

      {/* Description */}

      <p
        className="
          relative
          mt-6
          max-w-md
          text-sm
          leading-6
          text-text-muted
        "
      >
        {group.description}
      </p>

      {/* Skills */}

      <div
        className="
          relative
          mt-7
          flex
          flex-wrap
          gap-2.5
          sm:gap-3
        "
      >
        {group.skills.map((skill, skillIndex) => (
          <SkillPill
            key={skill.name}
            skill={skill}
            index={skillIndex}
          />
        ))}
      </div>

      {/* Footer */}

      <div
        className="
          relative
          mt-8
          flex
          items-center
          justify-between
          border-t
          border-border
          pt-5
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.16em]
            text-text-muted
          "
        >
          {String(group.skills.length).padStart(2, "0")}{" "}
          technologies
        </span>

        <span
          className="
            font-mono
            text-[9px]
            uppercase
            tracking-[0.16em]
            text-text-muted
            transition-colors
            duration-300
            group-hover:text-text
          "
        >
          View stack
        </span>
      </div>
    </motion.article>
  );
};

/* ─────────────────────────────────
   SKILL PILL
───────────────────────────────── */

const SkillPill = ({ skill, index }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.035,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        inline-flex
        min-h-11
        items-center
        gap-2.5
        rounded-xl
        border
        border-border
        bg-bg-soft/70
        px-4
        py-2.5
        text-sm
        font-medium
        text-text-secondary
        transition-all
        duration-300
        hover:border-accent/30
        hover:bg-accent/[0.06]
        hover:text-text
        sm:min-h-12
        sm:px-4.5
        sm:py-3
        sm:text-[15px]
      "
    >
      <Icon
        size={16}
        strokeWidth={1.6}
        className="
          shrink-0
          text-text-muted
          transition-colors
          duration-300
          group-hover:text-accent
        "
      />

      <span className="whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default Skills;
import {
  Braces,
  Database,
  GitBranch,
  Layers3,
  Server,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";

import Container from "../layout/Container";
import Section from "../layout/Section";

const SKILL_GROUPS = [
  {
    number: "01",
    icon: Layers3,
    title: "Frontend Development",
    description:
      "Building responsive interfaces with a strong focus on structure, interaction, and polished user experience.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  },
  {
    number: "02",
    icon: Server,
    title: "Backend & APIs",
    description:
      "Developing server-side functionality and connecting applications through REST APIs and backend logic.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "03",
    icon: Database,
    title: "Data & Authentication",
    description:
      "Working with application data, authentication flows, protected resources, and database-backed functionality.",
    skills: ["MongoDB", "Mongoose", "JWT", "bcrypt"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Application Integration",
    description:
      "Connecting different parts of an application and working with real-time communication and external services.",
    skills: ["Socket.IO", "Cloudinary", "Nodemailer", "Stripe", "Axios"],
  },
  {
    number: "05",
    icon: GitBranch,
    title: "Development Workflow",
    description:
      "Using version control and practical development workflows to build, iterate, and maintain projects.",
    skills: ["Git", "GitHub", "Vite", "Deployment"],
  },
  {
    number: "06",
    icon: Braces,
    title: "Engineering Direction",
    description:
      "Continuing to strengthen backend architecture, full-stack development, debugging, and production-oriented engineering practices.",
    skills: ["Full-stack MERN", "Debugging", "System Thinking"],
  },
];

const Capabilities = () => {
  return (
    <Section
      id="skills"
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
            scale: 0.75,
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
            -right-[180px]
            top-[10%]
            h-[430px]
            w-[430px]
            rounded-full
            bg-accent/[0.04]
            blur-[130px]
          "
        />

        <motion.div
          animate={{
            x: [0, -12, 0],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[180px]
            bottom-[5%]
            h-[360px]
            w-[360px]
            rounded-full
            border
            border-accent/[0.035]
            blur-[1px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[42%]
            h-px
            w-[72%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-border
            to-transparent
          "
        />
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1fr_0.7fr]
            lg:items-end
            lg:gap-20
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
            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <motion.span
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 30,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  block
                  h-px
                  bg-accent
                "
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
                Technical skills
              </span>
            </div>

            <h2
              className="
                max-w-3xl
                font-display
                text-[clamp(2.1rem,3.9vw,3.6rem)]
                font-medium
                leading-[1.04]
                tracking-[-0.045em]
                text-text
              "
            >
              Tools I use to build
              <span className="text-text-muted">
                {" "}
                real web applications.
              </span>
            </h2>
          </motion.div>

          <motion.p
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
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              max-w-xl
              text-sm
              leading-7
              text-text-secondary
              lg:ml-auto
              sm:text-base
              sm:leading-8
            "
          >
            My strongest area is frontend development, with growing
            full-stack capability through hands-on MERN projects,
            APIs, authentication, databases, and application
            integrations.
          </motion.p>
        </div>

        {/* Divider */}
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

        {/* Skill groups */}
        <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2">
          {SKILL_GROUPS.map((group, index) => (
            <SkillCard
              key={group.number}
              {...group}
              delay={0.08 + index * 0.08}
            />
          ))}
        </div>

        {/* Bottom note */}
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
            mt-16
            border-t
            border-border
            pt-7
            sm:mt-20
            sm:pt-8
          "
        >
          <div
            className="
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
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-text-muted
              "
            >
              Current direction
            </span>

            <span
              className="
                max-w-2xl
                text-sm
                leading-6
                text-text-secondary
                sm:text-right
              "
            >
              Deepening frontend engineering while growing stronger
              across the full MERN stack.
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

const SkillCard = ({
  number,
  icon: Icon,
  title,
  description,
  skills,
  delay,
}) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group"
    >
      <motion.div
        whileHover={{
          y: -3,
          borderColor: "rgba(255,255,255,0.16)",
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          relative
          h-full
          overflow-hidden
          rounded-xl
          border
          border-border
          bg-surface/45
          p-5
          backdrop-blur-sm
          sm:p-6
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
              "radial-gradient(circle at 10% 15%, rgba(117,98,232,0.10), transparent 42%)",
          }}
        />

        {/* Top accent */}
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

        <div className="relative z-10">
          {/* Card header */}
          <div
            className="
              flex
              items-start
              justify-between
              gap-5
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
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
              "
            >
              <Icon
                size={18}
                strokeWidth={1.7}
              />
            </div>

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
          </div>

          <h3
            className="
              mt-5
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
            "
          >
            {description}
          </p>

          {/* Skill pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-md
                  border
                  border-border
                  bg-bg-soft/70
                  px-2.5
                  py-1.5
                  font-mono
                  text-[10px]
                  tracking-[0.02em]
                  text-text-secondary
                  transition-colors
                  duration-200
                  group-hover:border-border-hover
                  group-hover:text-text
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default Capabilities;
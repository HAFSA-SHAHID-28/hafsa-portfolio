import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import Container from "../layout/Container";
import Section from "../layout/Section";
import ProjectCard from "./ProjectCard";

import projects from "../../data/projects";

const Projects = () => {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const secondaryProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <Section
      id="projects"
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
            scale: 0.85,
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
            right-[8%]
            top-[12%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-accent/[0.025]
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 18, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-[200px]
            bottom-[12%]
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-accent/[0.02]
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
              Selected Work
            </span>
          </div>

          {/* Heading */}

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
            Projects that show
            <span className="block text-text-muted">
              how I build.
            </span>
          </h2>

          {/* Paragraph */}

          <motion.p
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
              text-sm
              leading-7
              text-text-secondary
              sm:text-base
              sm:leading-8
            "
          >
            A selection of interfaces, interactive applications and
            full-stack systems built through hands-on development.
          </motion.p>
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
            FEATURED PROJECT
        ───────────────────────── */}

        {featuredProject && (
          <div className="mt-10 sm:mt-12 lg:mt-14">
            <ProjectCard
              project={featuredProject}
              featured
              index={0}
            />
          </div>
        )}

        {/* ─────────────────────────
            SECONDARY PROJECTS
        ───────────────────────── */}

        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-4
            sm:mt-5
            sm:grid-cols-2
            sm:gap-5
            lg:mt-6
            lg:gap-6
          "
        >
          {secondaryProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + 1}
            />
          ))}
        </div>

        {/* ─────────────────────────
            VIEW ALL
        ───────────────────────── */}

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
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mt-10
            flex
            justify-center
            sm:mt-12
          "
        >
          <a
            href="/projects"
            className="
              group
              inline-flex
              items-center
              gap-3
              border-b
              border-border
              pb-2
              font-display
              text-sm
              text-text-secondary
              transition-colors
              duration-300
              hover:border-accent/50
              hover:text-text
            "
          >
            <span>
              View all projects
            </span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
                group-hover:text-accent
              "
            />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Projects;
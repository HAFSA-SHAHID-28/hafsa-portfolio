import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const ProjectCard = ({ project, featured = false, index = 0 }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2.5, 2.5]), {
    stiffness: 180,
    damping: 22,
    mass: 0.5,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      className={`
        group
        relative
        h-full
        ${featured ? "lg:col-span-2" : ""}
      `}
    >
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-4
          rounded-[30px]
          bg-accent/[0.12]
          opacity-0
          blur-[45px]
        "
        whileHover={{
          opacity: 1,
          scale: 1.02,
        }}
        transition={{
          duration: 0.6,
        }}
      />

      {/* Main card */}

      <div
        className="
          relative
          h-full
          overflow-hidden
          rounded-[24px]
          border
          border-border
          bg-surface
          transition-colors
          duration-500
          group-hover:border-accent/30
        "
      >
        {/* Cursor-following light */}

        <ProjectCursorLight mouseX={mouseX} mouseY={mouseY} />

        {/* Top shine */}

        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-[60%]
            top-0
            z-30
            h-full
            w-[45%]
            rotate-[18deg]
            bg-gradient-to-r
            from-transparent
            via-white/[0.07]
            to-transparent
            opacity-0
          "
          whileHover={{
            left: "120%",
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Project image */}

        <ProjectVisual
          project={project}
          featured={featured}
          mouseX={mouseX}
          mouseY={mouseY}
        />

        {/* Content */}

        <div
          className={`
            relative
            z-10
            flex
            flex-col
            ${featured ? "p-7 sm:p-9 lg:p-10 xl:p-12" : "p-6 sm:p-7 lg:p-8"}
          `}
        >
          {/* Number + type */}

          <div className="flex items-center justify-between">
            <span
              className="
                font-mono
                text-[10px]
                tracking-[0.14em]
                text-text-muted
                transition-colors
                duration-300
                group-hover:text-accent
              "
            >
              {project.number}
            </span>

            <span
              className="
                text-right
                text-[10px]
                uppercase
                tracking-[0.13em]
                text-text-muted
              "
            >
              {project.type}
            </span>
          </div>

          {/* Title */}

          <div className="mt-5 flex items-start justify-between gap-5">
            <h3
              className="
                max-w-[85%]
                font-display
                text-[clamp(1.7rem,3vw,2.35rem)]
                font-medium
                leading-[1]
                tracking-[-0.055em]
                text-text
              "
            >
              {project.title}
            </h3>

            <motion.div
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
                text-text-muted
                transition-colors
                duration-300
                group-hover:border-accent/30
                group-hover:bg-accent/[0.08]
                group-hover:text-accent
              "
              whileHover={{
                x: 3,
                y: -3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
            >
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </motion.div>
          </div>

          {/* Description */}

          <p
            className={`
              mt-4
              max-w-xl
              text-[13px]
              leading-7
              text-text-secondary
              ${featured ? "sm:text-sm" : ""}
            `}
          >
            {project.description}
          </p>

          {/* Capability pills */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >
            {project.capabilities.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-border
                  bg-bg-soft/50
                  px-3
                  py-1.5
                  text-[10px]
                  text-text-muted
                  transition-all
                  duration-300
                  group-hover:border-accent/20
                  group-hover:bg-accent/[0.06]
                  group-hover:text-text-secondary
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* Technologies */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              gap-x-4
              gap-y-2
            "
          >
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  text-[10px]
                  text-text-muted
                  transition-colors
                  duration-300
                  group-hover:text-text-secondary
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Links */}

          {(project.liveUrl || project.githubUrl) && (
            <div
              className="
                mt-7
                flex
                items-center
                gap-2
                border-t
                border-border
                pt-5
              "
            >
              {project.liveUrl && (
                <ProjectLink
                  href={project.liveUrl}
                  icon={ExternalLink}
                  label="Live"
                />
              )}

              {project.githubUrl && (
                <ProjectLink
                  href={project.githubUrl}
                  iconType="github"
                  label="GitHub"
                />
              )}
            </div>
          )}
        </div>

        {/* Bottom accent line */}

        <motion.div
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            h-px
            w-full
            origin-left
            scale-x-0
            bg-gradient-to-r
            from-transparent
            via-accent
            to-transparent
            transition-transform
            duration-700
            group-hover:scale-x-100
          "
        />
      </div>
    </motion.article>
  );
};

const ProjectCursorLight = ({ mouseX, mouseY }) => {
  const lightX = useTransform(mouseX, [-0.5, 0.5], [-100, 100]);

  const lightY = useTransform(mouseY, [-0.5, 0.5], [-100, 100]);

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        z-20
        h-64
        w-64
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-accent/[0.08]
        opacity-0
        blur-[70px]
        transition-opacity
        duration-500
        group-hover:opacity-100
      "
      style={{
        x: lightX,
        y: lightY,
      }}
    />
  );
};

/* ─────────────────────────────────────────
   PROJECT LINKS
───────────────────────────────────────── */

const ProjectLink = ({ href, icon: Icon, iconType, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
        group/link
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-border
        bg-bg-soft/60
        px-3.5
        py-2
        text-[11px]
        text-text-secondary
        transition-all
        duration-300
        hover:border-accent/30
        hover:bg-accent/[0.07]
        hover:text-text
      "
    >
      {iconType === "github" ? (
        <i
          className="
            fa-brands
            fa-github
            text-[13px]
            transition-colors
            duration-300
            group-hover/link:text-accent
          "
          aria-hidden="true"
        />
      ) : (
        <Icon
          size={13}
          strokeWidth={1.6}
          className="
            transition-colors
            duration-300
            group-hover/link:text-accent
          "
        />
      )}

      <span>{label}</span>
    </motion.a>
  );
};

/* ─────────────────────────────────────────
   PROJECT VISUAL
───────────────────────────────────────── */

const ProjectVisual = ({ project, featured, mouseX, mouseY }) => {
  const imageX = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const imageY = useTransform(mouseY, [-0.5, 0.5], [-4, 4]);

  return (
    <div
      className={`
        relative
        overflow-hidden
        border-b
        border-border
        bg-bg-soft
        ${
          featured
            ? "min-h-[310px] sm:min-h-[390px] lg:min-h-[430px]"
            : "min-h-[270px] sm:min-h-[300px]"
        }
      `}
    >
      {/* Background atmosphere */}

      <motion.div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-1/2
          h-56
          w-56
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-accent/[0.07]
          blur-[90px]
        "
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Actual project screenshot */}

      <motion.div
        className="
          relative
          flex
          h-full
          min-h-inherit
          items-center
          justify-center
          overflow-hidden
          p-4
          sm:p-6
          lg:p-8
        "
        style={{
          x: imageX,
          y: imageY,
        }}
      >
        <motion.div
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-surface
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            transition-shadow
            duration-500
            group-hover:shadow-[0_35px_100px_rgba(0,0,0,0.48)]
          "
          whileHover={{
            y: -5,
            scale: 1.015,
          }}
          transition={{
            type: "spring",
            stiffness: 170,
            damping: 22,
          }}
        >
          {/* Image */}

          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="
              block
              h-auto
              max-h-[420px]
              min-h-[220px]
              w-full
              object-cover
              object-top
              transition-transform
              duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-[1.025]
              sm:min-h-[240px]
            "
          />

          {/* Image overlay */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-bg/20
              via-transparent
              to-white/[0.03]
              opacity-70
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* Image edge highlight */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-2xl
              border
              border-white/[0.04]
              transition-colors
              duration-500
              group-hover:border-accent/20
            "
          />
        </motion.div>
      </motion.div>


      {/* Project label */}

      <div
        className="
    absolute
    bottom-4
    left-5
    z-20
    flex
    items-center
    gap-2
    font-mono
    text-[9px]
    tracking-[0.14em]
    text-text-muted/60
    transition-colors
    duration-300
    group-hover:text-accent
  "
      >
        <span>{project.title}</span>
      </div>
    </div>
  );
};

export default ProjectCard;

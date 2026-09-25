import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { motion } from "motion/react";

/* ─────────────────────────────────
   MAIN CARD
───────────────────────────────── */

const ProjectCard = ({ project, featured = false, index }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
        filter: "blur(6px)",
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
        duration: 0.75,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface/55
        transition-all
        duration-500
        hover:border-accent/30
        hover:bg-surface
        ${
          featured
            ? "lg:grid lg:grid-cols-[1.15fr_0.85fr]"
            : ""
        }
      `}
    >
      {/* Hover atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-accent/[0.055]
          opacity-0
          blur-[90px]
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />

      {/* ─────────────────────────
          VISUAL PREVIEW
      ───────────────────────── */}

      <ProjectVisual
        type={project.visual}
        featured={featured}
      />

      {/* ─────────────────────────
          CONTENT
      ───────────────────────── */}

      <div
        className={`
          relative
          flex
          flex-col
          ${
            featured
              ? "justify-center p-6 sm:p-8 lg:p-10 xl:p-12"
              : "p-6 sm:p-7"
          }
        `}
      >
        {/* Number + type */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <span
            className="
              font-mono
              text-[9px]
              tracking-[0.16em]
              text-accent
            "
          >
            {project.number}
          </span>

          <span
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[0.13em]
              text-text-muted
            "
          >
            {project.type}
          </span>
        </div>

        {/* Title */}

        <div className="mt-5 flex items-start justify-between gap-4">
          <h3
            className="
              font-display
              text-2xl
              font-medium
              tracking-[-0.045em]
              text-text
              sm:text-[28px]
            "
          >
            {project.title}
          </h3>

          <motion.div
            whileHover={{
              x: 3,
              y: -3,
            }}
            className="
              shrink-0
              text-text-muted
              transition-colors
              duration-300
              group-hover:text-accent
            "
          >
            <ArrowUpRight
              size={19}
              strokeWidth={1.5}
            />
          </motion.div>
        </div>

        {/* Description */}

        <p
          className={`
            mt-4
            text-sm
            leading-7
            text-text-secondary
            ${
              featured
                ? "max-w-xl"
                : "max-w-lg"
            }
          `}
        >
          {project.description}
        </p>

        {/* Capabilities */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-x-3
            gap-y-2
          "
        >
          {project.capabilities.map((item) => (
            <span
              key={item}
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[0.11em]
                text-text-muted
                before:mr-2
                before:text-accent
                before:content-['•']
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Technologies */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            gap-2
          "
        >
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-lg
                border
                border-border
                bg-bg-soft/70
                px-3
                py-2
                text-xs
                text-text-muted
                transition-colors
                duration-300
                group-hover:border-border-hover
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
              mt-8
              flex
              flex-wrap
              items-center
              gap-3
              border-t
              border-border
              pt-5
            "
          >
            {project.liveUrl && (
              <ProjectLink
                href={project.liveUrl}
                icon={ExternalLink}
                label="Live project"
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
    </motion.article>
  );
};

/* ─────────────────────────────────
   PROJECT LINK
───────────────────────────────── */

const ProjectLink = ({
  href,
  icon: Icon,
  iconType,
  label,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group/link
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-border
        px-3.5
        py-2.5
        text-xs
        text-text-secondary
        transition-all
        duration-300
        hover:border-accent/30
        hover:bg-accent/[0.06]
        hover:text-text
      "
    >
      {iconType === "github" ? (
        <i
          className="
            fa-brands
            fa-github
            text-[14px]
            transition-colors
            duration-300
            group-hover/link:text-accent
          "
          aria-hidden="true"
        />
      ) : (
        <Icon
          size={14}
          strokeWidth={1.6}
          className="
            transition-colors
            duration-300
            group-hover/link:text-accent
          "
        />
      )}

      <span>{label}</span>
    </a>
  );
};

/* ─────────────────────────────────
   PROJECT VISUAL
───────────────────────────────── */

const ProjectVisual = ({
  type,
  featured,
}) => {
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
            ? "min-h-[300px] sm:min-h-[390px] lg:min-h-full lg:border-b-0 lg:border-r"
            : "min-h-[230px] sm:min-h-[270px]"
        }
      `}
    >
      {/* Ambient glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-48
          w-48
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-accent/[0.06]
          blur-[80px]
        "
      />

      {/* Technical grid */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-[0.045]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Visual */}

      <div
        className="
          relative
          flex
          h-full
          min-h-inherit
          items-center
          justify-center
          p-6
          sm:p-8
        "
      >
        {type === "supportflow" && (
          <SupportFlowVisual />
        )}

        {type === "zenvyra" && (
          <ZenvyraVisual />
        )}

        {type === "velvorea" && (
          <VelvoreaVisual />
        )}

        {type === "neuronspark" && (
          <NeuronSparkVisual />
        )}

        {type === "charity" && (
          <CharityVisual />
        )}
      </div>

      {/* Preview label */}

      <div
        className="
          absolute
          bottom-4
          left-5
          font-mono
          text-[8px]
          uppercase
          tracking-[0.18em]
          text-text-muted/50
        "
      >
        Project preview
      </div>
    </div>
  );
};

/* ─────────────────────────────────
   SUPPORTFLOW VISUAL
───────────────────────────────── */

const SupportFlowVisual = () => {
  return (
    <div
      className="
        w-full
        max-w-[560px]
        rounded-xl
        border
        border-border
        bg-surface
        p-3
        shadow-2xl
        transition-transform
        duration-700
        group-hover:scale-[1.015]
      "
    >
      <div className="flex items-center gap-2 border-b border-border pb-3">
        <span className="h-2 w-2 rounded-full bg-text-muted/40" />
        <span className="h-2 w-2 rounded-full bg-text-muted/30" />
        <span className="h-2 w-2 rounded-full bg-text-muted/20" />

        <div className="ml-auto h-2 w-24 rounded-full bg-border" />
      </div>

      <div className="grid grid-cols-[72px_1fr] gap-3 pt-3">
        <div className="space-y-2">
          <div className="h-5 rounded bg-accent/15" />
          <div className="h-3 rounded bg-border" />
          <div className="h-3 rounded bg-border" />
          <div className="h-3 rounded bg-border" />
          <div className="h-3 rounded bg-border" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-4 w-28 rounded bg-text/10" />
            <div className="h-6 w-16 rounded bg-accent/10" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <PreviewBlock />
            <PreviewBlock />
            <PreviewBlock />
          </div>

          <div className="rounded-lg border border-border p-3">
            <div className="mb-3 h-3 w-24 rounded bg-text/10" />

            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-border" />
              <div className="h-2 w-[82%] rounded bg-border" />
              <div className="h-2 w-[65%] rounded bg-border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────
   ZENVYRA VISUAL
───────────────────────────────── */

const ZenvyraVisual = () => {
  return (
    <div className="w-full max-w-[440px] space-y-3">
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface p-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-accent/15" />

          <div>
            <div className="h-2.5 w-20 rounded bg-text/10" />
            <div className="mt-2 h-2 w-12 rounded bg-border" />
          </div>
        </div>

        <div className="h-7 w-7 rounded-full border border-border" />
      </div>

      <div className="rounded-xl border border-border bg-surface p-4">
        <div className="h-3 w-32 rounded bg-text/10" />

        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="aspect-square rounded-lg bg-accent/[0.07]" />
          <div className="aspect-square rounded-lg bg-border" />
          <div className="aspect-square rounded-lg bg-border" />
        </div>

        <div className="mt-4 flex gap-3">
          <div className="h-2 w-8 rounded bg-border" />
          <div className="h-2 w-8 rounded bg-border" />
          <div className="h-2 w-8 rounded bg-border" />
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface p-4">
        <div className="flex gap-3">
          <div className="h-8 w-8 rounded-full bg-border" />

          <div className="flex-1">
            <div className="h-2.5 w-24 rounded bg-text/10" />
            <div className="mt-2 h-2 w-full rounded bg-border" />
            <div className="mt-2 h-2 w-[72%] rounded bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────
   VELVOREA VISUAL
───────────────────────────────── */

const VelvoreaVisual = () => {
  return (
    <div className="w-full max-w-[430px] rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center justify-center">
        <div
          className="
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            border
            border-accent/20
            bg-accent/[0.05]
          "
        >
          <div className="h-16 w-16 rounded-full border border-border" />
        </div>
      </div>

      <div className="mx-auto mt-5 h-2 w-40 rounded-full bg-text/10" />

      <div className="mx-auto mt-3 h-2 w-24 rounded-full bg-border" />

      <div className="mt-7 h-1 overflow-hidden rounded-full bg-border">
        <div className="h-full w-[58%] rounded-full bg-accent/60" />
      </div>

      <div className="mt-5 flex items-center justify-center gap-7">
        <div className="h-6 w-6 rounded-full border border-border" />

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/[0.10]">
          <div className="ml-1 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-accent" />
        </div>

        <div className="h-6 w-6 rounded-full border border-border" />
      </div>
    </div>
  );
};

/* ─────────────────────────────────
   NEURONSPARK VISUAL
───────────────────────────────── */

const NeuronSparkVisual = () => {
  return (
    <div className="w-full max-w-[400px] rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center justify-between">
        <div className="h-3 w-24 rounded bg-text/10" />

        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/20 text-[9px] text-accent">
          08
        </div>
      </div>

      <div className="mt-7">
        <div className="h-3 w-full rounded bg-text/10" />
        <div className="mt-2 h-3 w-[78%] rounded bg-border" />
      </div>

      <div className="mt-6 grid gap-2">
        <QuizOption active />
        <QuizOption />
        <QuizOption />
        <QuizOption />
      </div>
    </div>
  );
};

/* ─────────────────────────────────
   CHARITY VISUAL
───────────────────────────────── */

const CharityVisual = () => {
  return (
    <div className="w-full max-w-[430px] rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="h-3 w-20 rounded bg-text/10" />

        <div className="flex gap-2">
          <div className="h-2 w-8 rounded bg-border" />
          <div className="h-2 w-8 rounded bg-border" />
          <div className="h-2 w-8 rounded bg-border" />
        </div>
      </div>

      <div className="grid gap-4 pt-5 sm:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="h-5 w-36 rounded bg-text/10" />
          <div className="mt-3 h-3 w-full rounded bg-border" />
          <div className="mt-2 h-3 w-[82%] rounded bg-border" />

          <div className="mt-6 h-9 w-24 rounded-lg bg-accent/10" />
        </div>

        <div className="aspect-[4/3] rounded-xl bg-accent/[0.06]" />
      </div>
    </div>
  );
};

/* ─────────────────────────────────
   SMALL PREVIEW BLOCK
───────────────────────────────── */

const PreviewBlock = () => {
  return (
    <div className="rounded-lg border border-border p-2.5">
      <div className="h-2 w-8 rounded bg-border" />
      <div className="mt-2 h-4 w-12 rounded bg-text/10" />
    </div>
  );
};

/* ─────────────────────────────────
   QUIZ OPTION
───────────────────────────────── */

const QuizOption = ({ active = false }) => {
  return (
    <div
      className={`
        rounded-lg
        border
        px-3
        py-3
        ${
          active
            ? "border-accent/25 bg-accent/[0.06]"
            : "border-border"
        }
      `}
    >
      <div className="h-2 w-[72%] rounded bg-border" />
    </div>
  );
};

export default ProjectCard;
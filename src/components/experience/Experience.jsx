import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import Container from "../layout/Container";
import Section from "../layout/Section";
import experience from "../../data/experience";

const Experience = () => {
  const timelineRef = useRef(null);
  const cardRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);

  /*
   * ------------------------------------------------------------
   * Timeline height
   * ------------------------------------------------------------
   */

  useEffect(() => {
    if (!timelineRef.current) return;

    const updateHeight = () => {
      if (!timelineRef.current) return;

      setLineHeight(timelineRef.current.offsetHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);

    resizeObserver.observe(timelineRef.current);

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  /*
   * ------------------------------------------------------------
   * Detect active experience card
   * ------------------------------------------------------------
   */

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (!visibleCards.length) return;

        const activeCard = visibleCards[0].target;
        const index = cards.indexOf(activeCard);

        if (index !== -1) {
          setActiveIndex(index);
        }
      },
      {
        threshold: 0.25,
        rootMargin: "-20% 0px -48% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  /*
   * ------------------------------------------------------------
   * Scroll progress
   * ------------------------------------------------------------
   */

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 30%"],
  });

  /*
   * Spring only smooths the scroll signal.
   * The timeline animation itself remains continuous.
   */

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    mass: 0.35,
  });

  /*
   * ------------------------------------------------------------
   * Timeline energy position
   * ------------------------------------------------------------
   */

  const energyY = useTransform(
    smoothProgress,
    [0, 1],
    [0, Math.max(lineHeight - 8, 0)]
  );

  /*
   * ------------------------------------------------------------
   * Energy glow opacity
   * ------------------------------------------------------------
   */

  const energyOpacity = useTransform(
    smoothProgress,
    [0, 0.04, 0.96, 1],
    [0.35, 1, 1, 0.55]
  );

  return (
    <Section id="experience">
      <Container>
        {/* ======================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
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
              EXPERIENCE
            </span>
          </div>

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
            Learning through
            <span className="text-text-muted"> real work.</span>
          </h2>

          <p
            className="
              mt-7
              max-w-2xl
              text-[15px]
              leading-7
              text-text-secondary
              sm:text-[16px]
              sm:leading-8
            "
          >
            My experience so far has been shaped by hands-on
            frontend development, practical projects and
            progressively broader exposure to full-stack
            development.
          </p>
        </motion.div>

        {/* ======================================================
            EXPERIENCE TIMELINE
        ====================================================== */}

        <div
          ref={timelineRef}
          className="
            relative
            sm:pl-12
          "
        >
          {/* ====================================================
              BASE RAIL
          ==================================================== */}

          <div
            aria-hidden="true"
            className="
              absolute
              left-[11px]
              top-2
              bottom-2
              hidden
              w-px
              bg-white/[0.075]
              sm:block
            "
          />

          {/* ====================================================
              SOFT RAIL GLOW
          ==================================================== */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[10px]
              top-2
              hidden
              w-[3px]
              origin-top
              rounded-full
              bg-accent/20
              blur-[4px]
              sm:block
            "
            style={{
              height: Math.max(lineHeight - 4, 0),
              scaleY: smoothProgress,
              opacity: energyOpacity,
            }}
          />

          {/* ====================================================
              ACTIVE ENERGY RAIL
          ==================================================== */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[11px]
              top-2
              hidden
              w-[2px]
              origin-top
              rounded-full
              bg-gradient-to-b
              from-accent
              via-accent/80
              to-accent/20
              sm:block
            "
            style={{
              height: Math.max(lineHeight - 4, 0),
              scaleY: smoothProgress,
            }}
          />

          {/* ====================================================
              MOVING ENERGY COMET
          ==================================================== */}

          <motion.div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[11px]
              top-2
              z-30
              hidden
              -translate-x-1/2
              sm:block
            "
            style={{
              y: energyY,
            }}
          >
            {/* Large atmospheric glow */}

            <motion.span
              className="
                absolute
                left-1/2
                top-1/2
                h-16
                w-16
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-accent/15
                blur-2xl
              "
              animate={{
                scale: [0.85, 1.15, 0.85],
                opacity: [0.45, 0.8, 0.45],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Vertical energy tail */}

            <motion.span
              className="
                absolute
                bottom-[5px]
                left-1/2
                h-16
                w-[2px]
                -translate-x-1/2
                rounded-full
                bg-gradient-to-t
                from-transparent
                via-accent/20
                to-accent/70
                blur-[1px]
              "
              animate={{
                opacity: [0.35, 0.8, 0.35],
                scaleY: [0.75, 1, 0.75],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Outer ring */}

            <motion.span
              className="
                absolute
                left-1/2
                top-1/2
                h-7
                w-7
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-accent/30
              "
              animate={{
                scale: [0.9, 1.35, 0.9],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            {/* Core */}

            <motion.span
              className="
                relative
                block
                h-[9px]
                w-[9px]
                rounded-full
                bg-accent
                shadow-[0_0_18px_rgba(117,98,232,0.95)]
              "
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 1.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* White center */}

            <span
              className="
                absolute
                left-1/2
                top-1/2
                h-[3px]
                w-[3px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white
              "
            />
          </motion.div>

          {/* ====================================================
              EXPERIENCE CARDS
          ==================================================== */}

          <div className="space-y-10 sm:space-y-14 lg:space-y-16">
            {experience.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.article
                  key={item.id}
                  ref={(element) => {
                    cardRefs.current[index] = element;
                  }}
                  initial={{
                    opacity: 0,
                    y: 35,
                    filter: "blur(7px)",
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
                    duration: 0.75,
                    delay: index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  {/* ==================================================
                      EXPERIENCE NODE
                  ================================================== */}

                  <motion.div
                    aria-hidden="true"
                    className="
                      absolute
                      left-0
                      top-10
                      z-20
                      hidden
                      h-[23px]
                      w-[23px]
                      -translate-x-1/2
                      items-center
                      justify-center
                      rounded-full
                      border
                      bg-bg
                      sm:flex
                    "
                    animate={{
                      borderColor: isActive
                        ? "rgba(117,98,232,0.72)"
                        : "rgba(255,255,255,0.10)",
                      boxShadow: isActive
                        ? "0 0 20px rgba(117,98,232,0.22)"
                        : "0 0 0 rgba(117,98,232,0)",
                      scale: isActive ? 1.08 : 1,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <motion.span
                      className="
                        h-[7px]
                        w-[7px]
                        rounded-full
                        bg-accent
                      "
                      animate={{
                        opacity: isActive ? 1 : 0.28,
                        scale: isActive ? 1 : 0.7,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    />
                  </motion.div>

                  {/* ==================================================
                      CONNECTOR
                  ================================================== */}

                  <motion.div
                    aria-hidden="true"
                    className="
                      absolute
                      left-[11px]
                      top-[51px]
                      hidden
                      h-px
                      origin-left
                      sm:block
                    "
                    animate={{
                      width: isActive ? 32 : 20,
                      opacity: isActive ? 1 : 0.35,
                      backgroundColor: isActive
                        ? "rgba(117,98,232,0.72)"
                        : "rgba(255,255,255,0.10)",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />

                  {/* ==================================================
                      CARD
                  ================================================== */}

                  <motion.div
                    animate={{
                      y: isActive ? -2 : 0,
                      borderColor: isActive
                        ? "rgba(117,98,232,0.20)"
                        : "rgba(255,255,255,0.08)",
                      boxShadow: isActive
                        ? "0 18px 60px rgba(0,0,0,0.18)"
                        : "0 0 0 rgba(0,0,0,0)",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      bg-surface
                      p-6
                      sm:p-8
                      lg:p-10
                    "
                  >
                    {/* ==================================================
                        ACTIVE CARD ATMOSPHERE
                    ================================================== */}

                    <motion.div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-64
                        w-64
                        rounded-full
                        bg-accent/10
                        blur-3xl
                      "
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.65,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />

                    {/* Top shine */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-white/[0.12]
                        to-transparent
                      "
                    />

                    {/* ==================================================
                        HEADER
                    ================================================== */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        flex-col
                        gap-6
                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                      "
                    >
                      <div className="min-w-0">
                        <div
                          className="
                            mb-3
                            flex
                            flex-wrap
                            items-center
                            gap-3
                          "
                        >
                          <span
                            className="
                              font-mono
                              text-[10px]
                              font-medium
                              tracking-[0.18em]
                              text-accent
                              sm:text-[11px]
                            "
                          >
                            {item.number}
                          </span>

                          <span className="h-px w-5 bg-white/10" />

                          <span
                            className="
                              font-mono
                              text-[10px]
                              uppercase
                              tracking-[0.16em]
                              text-text-muted
                              sm:text-[11px]
                            "
                          >
                            {item.type}
                          </span>

                          {item.current && (
                            <span
                              className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-success/20
                                bg-success/[0.06]
                                px-2.5
                                py-1
                                font-mono
                                text-[9px]
                                uppercase
                                tracking-[0.14em]
                                text-success
                              "
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-success" />
                              Current
                            </span>
                          )}
                        </div>

                        <h3
                          className="
                            max-w-3xl
                            font-display
                            text-[clamp(1.7rem,2.6vw,2.4rem)]
                            font-medium
                            leading-[1.05]
                            tracking-[-0.035em]
                            text-text
                          "
                        >
                          {item.role}
                        </h3>

                        <div
                          className="
                            mt-3
                            flex
                            flex-wrap
                            items-center
                            gap-x-3
                            gap-y-2
                            text-[14px]
                            text-text-secondary
                            sm:text-[15px]
                          "
                        >
                          <span className="font-medium text-text">
                            {item.company}
                          </span>

                          <span className="text-text-muted/40">
                            /
                          </span>

                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Date / location */}

                      <div
                        className="
                          flex
                          shrink-0
                          flex-col
                          gap-2
                          lg:items-end
                        "
                      >
                        <span
                          className="
                            inline-flex
                            w-fit
                            items-center
                            rounded-full
                            border
                            border-white/[0.08]
                            bg-white/[0.025]
                            px-3
                            py-1.5
                            font-mono
                            text-[10px]
                            tracking-[0.08em]
                            text-text-secondary
                          "
                        >
                          {item.period}
                        </span>

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-[12px]
                            text-text-muted
                            sm:text-[13px]
                          "
                        >
                          <MapPin
                            size={13}
                            strokeWidth={1.6}
                          />

                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* ==================================================
                        DIVIDER
                    ================================================== */}

                    <div
                      className="
                        relative
                        z-10
                        my-7
                        h-px
                        bg-white/[0.07]
                        sm:my-8
                      "
                    />

                    {/* ==================================================
                        DESCRIPTION
                    ================================================== */}

                    <p
                      className="
                        relative
                        z-10
                        max-w-4xl
                        text-[15px]
                        leading-7
                        text-text-secondary
                        sm:text-[16px]
                        sm:leading-8
                      "
                    >
                      {item.description}
                    </p>

                    {/* ==================================================
                        RESPONSIBILITIES
                    ================================================== */}

                    <div
                      className="
                        relative
                        z-10
                        mt-7
                        grid
                        gap-x-10
                        gap-y-3
                        md:grid-cols-2
                      "
                    >
                      {item.responsibilities.map(
                        (responsibility) => (
                          <div
                            key={responsibility}
                            className="
                              flex
                              items-start
                              gap-3
                              text-[14px]
                              leading-6
                              text-text-secondary
                              sm:text-[15px]
                              sm:leading-7
                            "
                          >
                            <span
                              className="
                                mt-[10px]
                                h-1
                                w-1
                                shrink-0
                                rounded-full
                                bg-accent/80
                              "
                            />

                            <span>{responsibility}</span>
                          </div>
                        )
                      )}
                    </div>

                    {/* ==================================================
                        TECHNOLOGIES + PROJECTS
                    ================================================== */}

                    <div
                      className="
                        relative
                        z-10
                        mt-8
                        flex
                        flex-col
                        gap-7
                        border-t
                        border-white/[0.07]
                        pt-7
                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                      "
                    >
                      {/* Technologies */}

                      <div>
                        <div
                          className="
                            mb-3
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.18em]
                            text-text-muted
                          "
                        >
                          Technologies
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="
                                  rounded-md
                                  border
                                  border-white/[0.07]
                                  bg-white/[0.025]
                                  px-2.5
                                  py-1.5
                                  text-[11px]
                                  text-text-secondary
                                  transition-colors
                                  duration-300
                                  group-hover:border-accent/20
                                  group-hover:text-text
                                  sm:text-[12px]
                                "
                              >
                                {technology}
                              </span>
                            )
                          )}
                        </div>
                      </div>

                      {/* Selected projects */}

                      {item.projects?.length > 0 && (
                        <div className="lg:max-w-sm">
                          <div
                            className="
                              mb-3
                              font-mono
                              text-[9px]
                              uppercase
                              tracking-[0.18em]
                              text-text-muted
                            "
                          >
                            Selected projects
                          </div>

                          <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {item.projects.map((project) => (
                              <span
                                key={project}
                                className="
                                  flex
                                  items-center
                                  gap-2
                                  text-[12px]
                                  text-text-secondary
                                  sm:text-[13px]
                                "
                              >
                                <ArrowUpRight
                                  size={12}
                                  className="text-accent"
                                />

                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ==================================================
                        ACTIVE BOTTOM ACCENT
                    ================================================== */}

                    <motion.div
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        bg-accent
                      "
                      animate={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 0.7 : 0,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    />

                    {/* ==================================================
                        CORNER ICON
                    ================================================== */}

                    <motion.div
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-7
                        right-7
                        hidden
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        text-text-muted
                        lg:flex
                      "
                      animate={{
                        borderColor: isActive
                          ? "rgba(117,98,232,0.25)"
                          : "rgba(255,255,255,0.07)",
                        color: isActive
                          ? "rgba(117,98,232,0.9)"
                          : "rgba(112,118,129,1)",
                        rotate: isActive ? 0 : -8,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >
                      <BriefcaseBusiness
                        size={14}
                        strokeWidth={1.5}
                      />
                    </motion.div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
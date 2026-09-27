import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  GraduationCap,
  Palette,
  School,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Section from "../layout/Section";
import Container from "../layout/Container";
import education from "../../data/education";

const iconMap = {
  "Professional Development": BookOpen,
  "Formal Education": GraduationCap,
  "Professional Course": Palette,
  "School Education": School,
};

const Education = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    mass: 0.5,
  });

  const progressHeight = useTransform(
    progress,
    [0, 1],
    ["0%", "100%"]
  );

  const energyY = useTransform(
    progress,
    [0, 1],
    [0, timelineHeight]
  );

  useEffect(() => {
    const updateHeight = () => {
      if (!timelineRef.current) return;
      setTimelineHeight(timelineRef.current.offsetHeight);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <Section id="education">
      <div ref={sectionRef}>
        <Container>
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-3">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 34 }}
                  viewport={{ once: true }}
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
                  EDUCATION
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
                Education &amp;
                <span className="block text-text-muted">
                  development.
                </span>
              </h2>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                mt-7
                max-w-2xl
                text-sm
                leading-7
                text-text-secondary
                sm:text-base
              "
            >
              A combination of formal education, structured technical
              training and independent creative development that shaped my
              path into software development.
            </motion.p>
          </div>

          {/* Education Journey */}
          <div
            ref={timelineRef}
            className="
              relative
              w-full
            "
          >
            {/* Desktop timeline base */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-0
                left-1/2
                top-0
                z-0
                hidden
                w-px
                -translate-x-1/2
                bg-border
                lg:block
              "
            />

            {/* Desktop animated progress */}
            <motion.div
              aria-hidden="true"
              style={{ height: progressHeight }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                z-[1]
                hidden
                w-px
                -translate-x-1/2
                bg-gradient-to-b
                from-accent/0
                via-accent
                to-accent/20
                lg:block
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-full
                  w-4
                  -translate-x-1/2
                  bg-accent/10
                  blur-md
                "
              />
            </motion.div>

            {/* Moving energy core */}
            <motion.div
              aria-hidden="true"
              style={{ y: energyY }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                z-30
                hidden
                -translate-x-1/2
                lg:block
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-12
                  w-12
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-accent/10
                  blur-xl
                "
              />

              <div
                className="
                  relative
                  h-2.5
                  w-2.5
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-accent
                  shadow-[0_0_18px_rgba(117,98,232,0.85)]
                "
              />

              <motion.div
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-0
                  h-5
                  w-5
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-accent/50
                "
              />
            </motion.div>

            {/* Journey items */}
            <div className="relative z-10 flex w-full flex-col gap-8 sm:gap-10 lg:gap-14">
              {education.map((item, index) => (
                <EducationJourneyCard
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

const EducationJourneyCard = ({ item, index }) => {
  const Icon = iconMap[item.type] || GraduationCap;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -35 : 35,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
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
      className="
        relative
        w-full
      "
    >
      {/* Desktop alternating layout */}
      <div
        className="
          hidden
          w-full
          lg:grid
          lg:grid-cols-[minmax(0,1fr)_110px_minmax(0,1fr)]
          lg:items-center
        "
      >
        {/* Left */}
        <div
          className={`
            min-w-0
            ${isLeft ? "col-start-1 pr-8" : "col-start-1"}
          `}
        >
          {isLeft && (
            <EducationCardContent
              item={item}
              Icon={Icon}
              index={index}
            />
          )}
        </div>

        {/* Center */}
        <div
          className="
            col-start-2
            flex
            min-h-full
            items-center
            justify-center
          "
        >
          <TimelineNode index={index} />
        </div>

        {/* Right */}
        <div
          className={`
            min-w-0
            ${!isLeft ? "col-start-3 pl-8" : "col-start-3"}
          `}
        >
          {!isLeft && (
            <EducationCardContent
              item={item}
              Icon={Icon}
              index={index}
            />
          )}
        </div>
      </div>

      {/* Tablet / Mobile layout */}
      <div className="w-full lg:hidden">
        <div className="w-full">
          <EducationCardContent
            item={item}
            Icon={Icon}
            index={index}
          />
        </div>
      </div>
    </motion.div>
  );
};

const TimelineNode = ({ index }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08 + 0.18,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex items-center justify-center"
    >
      {/* Node glow */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.25,
        }}
        className="
          absolute
          h-14
          w-14
          rounded-full
          bg-accent/20
          blur-xl
        "
      />

      {/* Node */}
      <div
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-border-hover
          bg-bg
          shadow-[0_0_0_6px_rgba(7,9,12,0.9)]
          transition-all
          duration-500
          hover:border-accent/60
        "
      >
        <div
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-text-muted
          "
        />
      </div>
    </motion.div>
  );
};

const EducationCardContent = ({ item, Icon, index }) => {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        relative
        w-full
        min-w-0
        overflow-hidden
        rounded-[22px]
        border
        border-border
        bg-surface
        transition-[border-color,box-shadow]
        duration-500
        hover:border-border-hover
        hover:shadow-[0_24px_70px_rgba(0,0,0,0.24)]
      "
    >
      {/* Ambient hover field */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-accent/0
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-accent/[0.07]
        "
      />

      {/* Top accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-0
          bg-accent
          transition-all
          duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:w-full
        "
      />

      <div
        className="
          relative
          z-10
          p-6
          sm:p-7
          md:p-8
          lg:p-9
        "
      >
        {/* Header */}
        <div
          className="
            mb-7
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
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
                bg-bg-soft
                text-text-muted
                transition-all
                duration-500
                group-hover:border-accent/30
                group-hover:bg-accent-soft
                group-hover:text-accent
              "
            >
              <Icon
                size={19}
                strokeWidth={1.6}
                className="
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>

            <p className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
              {item.type}
            </p>
          </div>

          <div
            className="
              flex
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-bg-soft
              px-3
              py-1.5
              font-mono
              text-[9px]
              uppercase
              tracking-[0.1em]
              text-text-muted
              transition-all
              duration-300
              group-hover:border-accent/25
              group-hover:text-text-secondary
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success/70" />
            {item.status}
          </div>
        </div>

        {/* Date */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.1em] text-accent/80">
            {item.period}
          </span>

          <span className="h-px w-10 bg-border transition-all duration-500 group-hover:w-16 group-hover:bg-accent/40" />
        </div>

        {/* Title */}
        <div className="mb-3 flex items-start gap-4">
          <h3
            className="
              min-w-0
              flex-1
              font-display
              text-[1.5rem]
              font-medium
              leading-[1.05]
              tracking-[-0.04em]
              text-text
              transition-colors
              duration-300
              group-hover:text-white
              sm:text-[1.75rem]
              md:text-[1.9rem]
            "
          >
            {item.title}
          </h3>

          <ArrowUpRight
            size={21}
            strokeWidth={1.5}
            className="
              mt-1
              shrink-0
              text-text-muted/30
              transition-all
              duration-500
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-accent
            "
          />
        </div>

        {/* Institution */}
        <p
          className="
            mb-7
            max-w-xl
            font-display
            text-base
            font-medium
            leading-6
            text-text-secondary
            sm:text-[1.05rem]
          "
        >
          {item.institution}
        </p>

        {/* Description */}
        <p
          className="
            mb-8
            max-w-xl
            text-[14px]
            leading-7
            text-text-secondary
            sm:text-[15px]
          "
        >
          {item.description}
        </p>

        {/* Highlights */}
        <div className="grid gap-4">
          {item.highlights.map((highlight, highlightIndex) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08 + highlightIndex * 0.04,
              }}
              className="
                flex
                items-start
                gap-3
                text-[13px]
                leading-6
                text-text-muted
                transition-colors
                duration-300
                group-hover:text-text-secondary
                sm:text-sm
              "
            >
              <span
                className="
                  mt-[5px]
                  flex
                  h-4
                  w-4
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-border
                  text-text-muted/50
                  transition-all
                  duration-300
                  group-hover:border-accent/35
                  group-hover:bg-accent-soft
                  group-hover:text-accent
                "
              >
                <Check size={9} strokeWidth={2} />
              </span>

              <span className="min-w-0">{highlight}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default Education;
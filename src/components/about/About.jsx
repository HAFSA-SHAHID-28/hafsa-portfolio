import { motion } from "motion/react";
import { ArrowUpRight, Code2, Layers3, Rocket } from "lucide-react";

import Container from "../layout/Container";
import Section from "../layout/Section";

const About = () => {
  return (
    <Section id="about" className="overflow-hidden">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(6px)",
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
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-14
            flex
            items-center
            gap-3
            sm:mb-16
          "
        >
          <span
            aria-hidden="true"
            className="
              h-px
              w-8
              bg-accent
            "
          />

          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-text-muted
              sm:text-xs
            "
          >
            About
          </span>
        </motion.div>

        {/* Main Intro */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Left */}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2
              className="
                max-w-4xl
                font-display
                text-[clamp(2rem,4vw,3.8rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.045em]
                text-text
              "
            >
              I’m building my career around{" "}
              <span className="text-text-secondary">
                creating useful software.
              </span>
            </h2>

            <div
              className="
                mt-8
                max-w-2xl
                space-y-5
                text-sm
                leading-7
                text-text-secondary
                sm:mt-9
                sm:text-base
                sm:leading-8
              "
            >
              <p>
                My journey into software development started with a
                transition from Biology to Computer Science. Since then,
                I’ve focused on learning by building, experimenting, and
                understanding how the pieces of an application fit together.
              </p>

              <p>
                Today, I work primarily on frontend development with React
                and JavaScript while continuing to strengthen my backend and
                full-stack capabilities through MERN projects.
              </p>

              <p>
                I’m interested in the space between engineering and products:
                understanding a problem, turning it into a useful experience,
                and gradually building the technical depth to take an idea
                further.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 24,
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
              duration: 0.8,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              lg:pt-2
            "
          >
            {/* Accent line */}
            <div
              aria-hidden="true"
              className="
                absolute
                -left-5
                top-0
                hidden
                h-full
                w-px
                bg-gradient-to-b
                from-accent/60
                via-border
                to-transparent
                lg:block
              "
            />

            <div
              className="
                rounded-xl
                border
                border-border
                bg-surface/50
                p-6
                backdrop-blur-sm
                sm:p-7
              "
            >
              <div
                className="
                  mb-7
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.16em]
                    text-text-muted
                  "
                >
                  Current direction
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                  className="text-text-muted"
                />
              </div>

              <div className="space-y-6">
                <DirectionItem
                  icon={Code2}
                  title="Frontend development"
                  text="Building responsive interfaces with React, JavaScript, HTML and CSS."
                />

                <DirectionItem
                  icon={Layers3}
                  title="Full-stack capability"
                  text="Expanding into APIs, databases, authentication and complete MERN applications."
                />

                <DirectionItem
                  icon={Rocket}
                  title="Product thinking"
                  text="Learning to connect technical decisions with real problems and useful software."
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom progression strip */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
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
                text-xs
                uppercase
                tracking-[0.16em]
                text-text-muted
              "
            >
              Building · Learning · Iterating
            </span>

            <span
              className="
                max-w-md
                text-sm
                leading-6
                text-text-muted
                sm:text-right
              "
            >
              Focused on turning practical experience into stronger
              engineering capability.
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

const DirectionItem = ({
  icon: Icon,
  title,
  text,
}) => {
  return (
    <div className="group flex gap-4">
      <div
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
          bg-bg-soft
          text-text-muted
          transition-[border-color,color]
          duration-150
          ease-out
          group-hover:border-accent/50
          group-hover:text-text
        "
      >
        <Icon
          size={16}
          strokeWidth={1.8}
        />
      </div>

      <div>
        <h3
          className="
            font-display
            text-sm
            font-semibold
            tracking-[-0.01em]
            text-text
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1.5
            text-sm
            leading-6
            text-text-muted
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default About;
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import hsLogo from "../../assets/logo2.png";

const LOADING_DURATION = 4200;
const COMPLETION_HOLD = 650;
const EXIT_DURATION = 850;

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const getStatus = () => {
    if (progress < 24) return "Establishing environment";
    if (progress < 48) return "Loading interface";
    if (progress < 70) return "Preparing components";
    if (progress < 88) return "Synchronizing experience";
    if (progress < 100) return "Finalizing interface";

    return "Interface ready";
  };

  useEffect(() => {
    let animationFrame;
    let completionTimeout;
    let exitTimeout;

    const startTime = performance.now();

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(
        elapsed / LOADING_DURATION,
        1
      );

      /*
        Smooth progression:
        - starts gently
        - moves steadily
        - slows slightly near completion
      */
      const easedProgress =
        1 - Math.pow(1 - rawProgress, 2.2);

      setProgress(Math.round(easedProgress * 100));

      if (rawProgress < 1) {
        animationFrame =
          requestAnimationFrame(updateProgress);
        return;
      }

      setProgress(100);

      completionTimeout = window.setTimeout(() => {
        setIsExiting(true);

        exitTimeout = window.setTimeout(() => {
          onComplete?.();
        }, EXIT_DURATION);
      }, COMPLETION_HOLD);
    };

    animationFrame =
      requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(completionTimeout);
      window.clearTimeout(exitTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: isExiting ? 0 : 1,
      }}
      transition={{
        duration: EXIT_DURATION / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#07080A]
      "
    >
      {/* =====================================================
          AMBIENT FIELD
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Primary atmospheric core */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[460px]
            w-[460px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#4B3A8F]/[0.075]
            blur-[130px]
          "
          animate={{
            scale: [0.82, 1.08, 0.94, 1],
            opacity: [0.3, 0.62, 0.4, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary atmospheric point */}
        <motion.div
          className="
            absolute
            -right-[8%]
            top-[10%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#4B3A8F]/[0.025]
            blur-[110px]
          "
          animate={{
            x: [0, -40, 10, 0],
            y: [0, 35, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Technical grid */}
        <motion.div
          className="
            absolute
            inset-[-10%]
            opacity-[0.04]
          "
          animate={{
            backgroundPosition: [
              "0px 0px",
              "48px 48px",
            ],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.35) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.35) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Horizontal scanning beam */}
        <motion.div
          className="
            absolute
            left-[-25%]
            top-1/2
            h-px
            w-[150%]
            bg-gradient-to-r
            from-transparent
            via-[#7562E8]/35
            to-transparent
          "
          animate={{
            x: ["-12%", "12%", "-12%"],
            opacity: [0, 0.75, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Vertical scanning beam */}
        <motion.div
          className="
            absolute
            left-1/2
            top-[-25%]
            h-[150%]
            w-px
            bg-gradient-to-b
            from-transparent
            via-white/[0.08]
            to-transparent
          "
          animate={{
            y: ["-10%", "10%", "-10%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Outer vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_8%,rgba(7,8,10,0.3)_52%,rgba(7,8,10,0.94)_100%)]
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-[#07080A]
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          TECHNICAL CORNERS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-5
          sm:inset-8
        "
      >
        <div className="absolute left-0 top-0 h-8 w-8 border-l border-t border-white/[0.08]" />
        <div className="absolute right-0 top-0 h-8 w-8 border-r border-t border-white/[0.08]" />
        <div className="absolute bottom-0 left-0 h-8 w-8 border-b border-l border-white/[0.08]" />
        <div className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-white/[0.08]" />

        <div
          className="
            absolute
            left-0
            top-10
            font-mono
            text-[7px]
            uppercase
            tracking-[0.22em]
            text-white/[0.18]
          "
        >
          HS / 001
        </div>

        <div
          className="
            absolute
            bottom-10
            right-0
            font-mono
            text-[7px]
            uppercase
            tracking-[0.22em]
            text-white/[0.18]
          "
        >
          SYSTEM / INIT
        </div>
      </div>

      {/* =====================================================
          MAIN LOADER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-[370px]
          flex-col
          items-center
          px-6
          sm:max-w-[440px]
        "
      >
        {/* ===================================================
            LOGO SYSTEM
        ==================================================== */}

        <motion.div
          animate={{
            scale: isExiting ? 1.18 : 1,
            opacity: isExiting ? 0 : 1,
          }}
          transition={{
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            flex
            h-32
            w-32
            items-center
            justify-center
            sm:h-36
            sm:w-36
          "
        >
          {/* Outer static guide */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              rounded-full
              border
              border-white/[0.045]
            "
          />

          {/* Main rotating ring */}
          <motion.div
            aria-hidden="true"
            className="
              absolute
              inset-0
              rounded-full
              border
              border-transparent
              border-t-[#7562E8]/75
              border-r-white/[0.08]
            "
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner rotating ring */}
          <motion.div
            aria-hidden="true"
            className="
              absolute
              inset-[12%]
              rounded-full
              border
              border-transparent
              border-b-[#7562E8]/65
              border-l-white/[0.06]
            "
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Fine inner circle */}
          <motion.div
            aria-hidden="true"
            className="
              absolute
              inset-[24%]
              rounded-full
              border
              border-white/[0.045]
            "
            animate={{
              scale: [0.94, 1.04, 0.94],
              opacity: [0.4, 0.75, 0.4],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orbiting point */}
          <motion.span
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-0
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-[#7562E8]
              shadow-[0_0_14px_rgba(117,98,232,0.45)]
            "
            animate={{
              rotate: 360,
            }}
            style={{
              transformOrigin: "0 64px",
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Small opposite marker */}
          <motion.span
            aria-hidden="true"
            className="
              absolute
              bottom-[10%]
              left-1/2
              h-1
              w-1
              -translate-x-1/2
              rounded-full
              bg-white/30
            "
            animate={{
              opacity: [0.2, 0.65, 0.2],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo atmosphere */}
          <motion.div
            aria-hidden="true"
            className="
              absolute
              h-20
              w-20
              rounded-full
              bg-[#7562E8]/[0.13]
              blur-[34px]
            "
            animate={{
              scale: [0.78, 1.18, 0.84],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.68,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10
              h-[76px]
              w-[76px]
              sm:h-[84px]
              sm:w-[84px]
            "
          >
            <img
              src={hsLogo}
              alt="HS"
              className="
                h-full
                w-full
                object-contain
                drop-shadow-[0_0_28px_rgba(117,98,232,0.2)]
              "
            />
          </motion.div>
        </motion.div>

        {/* ===================================================
            IDENTITY
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={{
            opacity: isExiting ? 0 : 1,
            y: isExiting ? -8 : 0,
          }}
          transition={{
            delay: 0.65,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-8
            text-center
          "
        >
          <p
            className="
              font-display
              text-sm
              font-semibold
              tracking-[0.08em]
              text-text
              sm:text-base
            "
          >
            Hafsa Shahid
          </p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: isExiting ? 0 : 1,
            }}
            transition={{
              delay: 0.95,
              duration: 0.8,
            }}
            className="
              mt-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-text-muted
              sm:text-[10px]
            "
          >
            Frontend-focused MERN Stack Developer
          </motion.p>
        </motion.div>

        {/* ===================================================
            PROGRESS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: isExiting ? 0 : 1,
            y: isExiting ? 6 : 0,
          }}
          transition={{
            delay: 1.05,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-11
            w-full
          "
        >
          <div
            className="
              mb-3
              flex
              items-center
              justify-between
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-text-muted
              sm:text-[9px]
            "
          >
            <motion.span
              key={getStatus()}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {getStatus()}
            </motion.span>

            <span className="tabular-nums text-text-secondary">
              {String(progress).padStart(3, "0")}%
            </span>
          </div>

          {/* Track */}
          <div
            className="
              relative
              h-px
              w-full
              overflow-hidden
              bg-white/[0.08]
            "
          >
            {/* Progress */}
            <motion.div
              className="
                absolute
                inset-y-0
                left-0
                bg-[#7562E8]
              "
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
            />

            {/* Moving highlight */}
            <motion.div
              aria-hidden="true"
              className="
                absolute
                inset-y-[-2px]
                w-16
                bg-gradient-to-r
                from-transparent
                via-white/45
                to-transparent
                blur-[2px]
              "
              animate={{
                x: ["-100%", "700%"],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Tiny progress markers */}
          <div
            aria-hidden="true"
            className="
              mt-2
              flex
              justify-between
              font-mono
              text-[6px]
              tracking-[0.1em]
              text-white/[0.16]
            "
          >
            <span>00</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </motion.div>

        {/* ===================================================
            STATUS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isExiting ? 0 : 1,
          }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
          className="
            mt-5
            flex
            items-center
            gap-2
            font-mono
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-text-muted
          "
        >
          <motion.span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#7562E8]
            "
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.15, 0.8],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span>
            {progress >= 100
              ? "System ready"
              : "Preparing interface"}
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          EXIT FLASH
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isExiting ? 0.12 : 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          bg-white
        "
      />
    </motion.div>
  );
};

export default LoadingScreen;
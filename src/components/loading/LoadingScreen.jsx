import { useEffect, useState } from "react";
import { motion } from "motion/react";

import hsLogo from "../../assets/logo2.png";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let animationFrame;
    const startTime = performance.now();

    const duration = 2200;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Smooth ease-out progression
      const easedProgress =
        1 - Math.pow(1 - rawProgress, 3);

      setProgress(Math.round(easedProgress * 100));

      if (rawProgress < 1) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsExiting(true);

          setTimeout(() => {
            onComplete?.();
          }, 700);
        }, 350);
      }
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: isExiting ? 0 : 1,
      }}
      transition={{
        duration: 0.7,
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
          ATMOSPHERE
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
        {/* Center glow */}
        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#4B3A8F]/[0.08]
            blur-[120px]
          "
          animate={{
            scale: [0.85, 1.08, 0.92, 1],
            opacity: [0.35, 0.65, 0.4, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid */}
        <motion.div
          className="
            absolute
            inset-[-10%]
            opacity-[0.045]
          "
          animate={{
            backgroundPosition: [
              "0px 0px",
              "48px 48px",
            ],
          }}
          transition={{
            duration: 12,
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

        {/* Horizontal scan */}
        <motion.div
          className="
            absolute
            left-[-20%]
            top-1/2
            h-px
            w-[140%]
            bg-gradient-to-r
            from-transparent
            via-[#7562E8]/40
            to-transparent
          "
          animate={{
            x: ["-8%", "8%", "-8%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Vertical scan */}
        <motion.div
          className="
            absolute
            left-1/2
            top-[-20%]
            h-[140%]
            w-px
            bg-gradient-to-b
            from-transparent
            via-white/[0.10]
            to-transparent
          "
          animate={{
            y: ["-8%", "8%", "-8%"],
            opacity: [0, 0.55, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Vignette */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_10%,rgba(7,8,10,0.28)_52%,rgba(7,8,10,0.92)_100%)]
          "
        />
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
          max-w-[360px]
          flex-col
          items-center
          px-6
          sm:max-w-[430px]
        "
      >
        {/* Logo system */}
        <div
          className="
            relative
            flex
            h-28
            w-28
            items-center
            justify-center
            sm:h-32
            sm:w-32
          "
        >
          {/* Outer rotating ring */}
          <motion.div
            aria-hidden="true"
            className="
              absolute
              inset-0
              rounded-full
              border
              border-white/[0.07]
              border-t-[#7562E8]/70
            "
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4.5,
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
              border-[#7562E8]/[0.12]
              border-b-[#7562E8]/60
            "
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Corner markers */}
          <motion.span
            aria-hidden="true"
            className="
              absolute
              -right-1
              top-1/2
              h-1.5
              w-1.5
              -translate-y-1/2
              rounded-full
              bg-[#7562E8]
            "
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.25, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.span
            aria-hidden="true"
            className="
              absolute
              -bottom-1
              left-1/2
              h-1.5
              w-1.5
              -translate-x-1/2
              rounded-full
              bg-white/40
            "
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo glow */}
          <motion.div
            aria-hidden="true"
            className="
              absolute
              h-16
              w-16
              rounded-full
              bg-[#7562E8]/[0.14]
              blur-[30px]
            "
            animate={{
              scale: [0.8, 1.2, 0.85],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.72,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              z-10
              flex
              h-[72px]
              w-[72px]
              items-center
              justify-center
              sm:h-20
              sm:w-20
            "
          >
            <img
              src={hsLogo}
              alt="HS"
              className="
                h-full
                w-full
                object-contain
                drop-shadow-[0_0_24px_rgba(117,98,232,0.18)]
              "
            />
          </motion.div>
        </div>

        {/* Identity */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.8,
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
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
            className="
              mt-1.5
              font-mono
              text-[9px]
              uppercase
              tracking-[0.22em]
              text-text-muted
              sm:text-[10px]
            "
          >
            Frontend-focused MERN Stack Developer
          </motion.p>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.85,
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-10
            w-full
          "
        >
          <div
            className="
              mb-2.5
              flex
              items-center
              justify-between
              font-mono
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-text-muted
            "
          >
            <span>Initializing</span>

            <motion.span
              key={progress}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="tabular-nums text-text-secondary"
            >
              {String(progress).padStart(3, "0")}%
            </motion.span>
          </div>

          <div
            className="
              relative
              h-px
              w-full
              overflow-hidden
              bg-white/[0.08]
            "
          >
            <motion.div
              className="
                absolute
                inset-y-0
                left-0
                bg-[#7562E8]
              "
              style={{
                width: `${progress}%`,
              }}
            />

            <motion.div
              aria-hidden="true"
              className="
                absolute
                inset-y-[-2px]
                w-20
                bg-gradient-to-r
                from-transparent
                via-white/50
                to-transparent
                blur-[2px]
              "
              animate={{
                x: ["-100%", "500%"],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>

        {/* System status */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.05,
            duration: 0.8,
          }}
          className="
            mt-4
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
              opacity: [0.35, 1, 0.35],
              scale: [0.85, 1.15, 0.85],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span>Preparing interface</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
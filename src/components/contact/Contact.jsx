import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { useState } from "react";

import Section from "../layout/Section";
import Container from "../layout/Container";
import { sendContactEmail } from "../../services/email";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("sending");

    try {
      await sendContactEmail(formData);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <Section id="contact">
      <Container>
        {/* ================= HEADER ================= */}

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

              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                CONTACT
              </span>
            </div>

            <h2 className="max-w-4xl font-display text-[clamp(2.25rem,4.2vw,4.25rem)] font-medium leading-[0.95] tracking-[-0.055em] text-text">
              Let&apos;s build
              <span className="block text-text-muted">
                something useful.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-7 max-w-2xl text-sm leading-7 text-text-secondary sm:text-base"
          >
            Have a project, opportunity or idea worth discussing? Send me a
            message and I&apos;ll get back to you.
          </motion.p>
        </div>

        {/* ================= CONTACT GRID ================= */}

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          {/* =========================================================
              LEFT CARD
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden rounded-[24px] border border-border bg-surface"
          >
            {/* Ambient atmosphere */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-96
                w-96
                rounded-full
                bg-accent/[0.035]
                blur-3xl
                transition-all
                duration-1000
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:bg-accent/[0.10]
                group-hover:scale-125
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-40
                -left-40
                h-80
                w-80
                rounded-full
                bg-accent/[0.02]
                blur-3xl
                transition-all
                duration-1000
                group-hover:bg-accent/[0.06]
              "
            />

            {/* Animated top edge */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                h-px
                w-0
                bg-gradient-to-r
                from-accent
                via-accent-hover
                to-transparent
                transition-all
                duration-1000
                ease-[cubic-bezier(0.16,1,0.3,1)]
                group-hover:w-full
              "
            />

            {/* Corner detail */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-5
                top-5
                h-12
                w-12
                border-r
                border-t
                border-border
                opacity-40
                transition-all
                duration-700
                group-hover:h-16
                group-hover:w-16
                group-hover:border-accent/30
              "
            />

            <div className="relative z-10 flex h-full flex-col p-6 sm:p-8 lg:p-9">
              {/* Intro */}
              <div className="mb-10">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_10px_rgba(57,197,138,0.55)]" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-muted">
                    AVAILABLE TO CONNECT
                  </span>
                </div>

                <h3 className="max-w-sm font-display text-2xl font-medium leading-[1.05] tracking-[-0.035em] text-text transition-colors duration-500 group-hover:text-white sm:text-[1.8rem]">
                  Start with a
                  <span className="block text-text-muted transition-colors duration-500 group-hover:text-text-secondary">
                    conversation.
                  </span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-text-secondary">
                  Whether it&apos;s a frontend project, a development
                  opportunity or something you&apos;re exploring, feel free to
                  reach out.
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:hafsa.shahid.dev@gmail.com"
                className="
                  group/email
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-bg-soft/70
                  p-4
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-accent/35
                  hover:bg-bg
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]
                "
              >
                {/* hover sweep */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-32
                    w-24
                    rotate-12
                    bg-accent/[0.08]
                    blur-xl
                    transition-all
                    duration-700
                    group-hover/email:left-[115%]
                  "
                />

                <div className="relative flex items-center gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-border
                      bg-surface
                      text-text-muted
                      transition-all
                      duration-500
                      group-hover/email:border-accent/40
                      group-hover/email:bg-accent-soft
                      group-hover/email:text-accent
                      group-hover/email:shadow-[0_0_25px_rgba(117,98,232,0.15)]
                    "
                  >
                    <Mail
                      size={18}
                      strokeWidth={1.6}
                      className="transition-transform duration-500 group-hover/email:scale-110 group-hover/email:-rotate-6"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-text-muted">
                      Email
                    </p>

                    <p className="truncate text-sm text-text-secondary transition-colors duration-300 group-hover/email:text-text">
                      hafsa.shahid.dev@gmail.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    className="
                      shrink-0
                      text-text-muted/35
                      transition-all
                      duration-500
                      group-hover/email:-translate-y-1
                      group-hover/email:translate-x-1
                      group-hover/email:text-accent
                    "
                  />
                </div>
              </a>

              {/* Socials */}
              <div className="mt-auto pt-10">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-text-muted">
                    Elsewhere
                  </p>

                  <span className="font-mono text-[8px] tracking-[0.12em] text-text-muted/30">
                    03 LINKS
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <SocialLink
                    href="https://github.com/HAFSA-SHAHID-28"
                    label="GitHub"
                    icon="fa-brands fa-github"
                  />

                  <SocialLink
                    href="https://www.linkedin.com/in/hafsa-shahid-dev/"
                    label="LinkedIn"
                    icon="fa-brands fa-linkedin-in"
                  />

                  <SocialLink
                    href="mailto:hafsa.shahid.dev@gmail.com"
                    label="Email"
                    icon="fa-solid fa-envelope"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              RIGHT CARD — FORM
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden rounded-[24px] border border-border bg-surface"
          >
            {/* Atmosphere */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-40
                -top-40
                h-[30rem]
                w-[30rem]
                rounded-full
                bg-accent/[0.025]
                blur-3xl
                transition-all
                duration-1000
                group-hover:bg-accent/[0.06]
              "
            />

            {/* Animated top line */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-0
                top-0
                h-px
                w-1/3
                bg-gradient-to-r
                from-accent
                to-transparent
                transition-all
                duration-700
                group-hover:w-full
              "
            />

            {/* Corner */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-5
                right-5
                h-10
                w-10
                border-b
                border-r
                border-border
                opacity-30
                transition-all
                duration-700
                group-hover:h-14
                group-hover:w-14
                group-hover:border-accent/25
              "
            />

            <form
              onSubmit={handleSubmit}
              className="relative z-10 p-6 sm:p-8 lg:p-9"
            >
              {/* Form header */}
              <div className="mb-8 flex items-end justify-between gap-5">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-text-muted">
                    SEND A MESSAGE
                  </p>

                  <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.025em] text-text sm:text-2xl">
                    Tell me what you&apos;re working on.
                  </h3>
                </div>

                <div
                  aria-hidden="true"
                  className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-bg-soft sm:flex"
                >
                  <Send
                    size={14}
                    strokeWidth={1.5}
                    className="text-text-muted transition-colors duration-300 group-hover:text-accent"
                  />
                </div>
              </div>

              {/* Inputs */}
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-6">
                <FormField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="mb-2.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted"
                >
                  Message
                </label>

                <div className="group/textarea relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a little about your project or idea..."
                    required
                    className="
                      peer
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-border
                      bg-bg-soft
                      px-4
                      py-3.5
                      text-sm
                      leading-6
                      text-text
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-text-muted/50
                      focus:border-accent/50
                      focus:bg-bg
                      focus:shadow-[0_0_0_4px_rgba(117,98,232,0.06)]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-4
                      h-px
                      w-0
                      bg-accent
                      transition-all
                      duration-500
                      peer-focus:w-[calc(100%-2rem)]
                    "
                  />
                </div>
              </div>

              {/* Status */}
              <div className="mt-6 min-h-[24px]">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-sm text-success"
                  >
                    <CheckCircle2 size={17} strokeWidth={1.7} />
                    <span>
                      Message sent successfully. I&apos;ll get back to you
                      soon.
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm leading-6 text-error"
                  >
                    Something went wrong while sending the message. Please
                    try again or email me directly.
                  </motion.p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="
                  group/button
                  relative
                  mt-5
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-xl
                  border
                  border-accent/40
                  bg-accent
                  px-5
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-accent-hover
                  hover:shadow-[0_18px_45px_rgba(117,98,232,0.22)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:translate-y-0
                  sm:w-auto
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    -left-20
                    w-16
                    rotate-12
                    bg-white/10
                    blur-md
                    transition-all
                    duration-700
                    group-hover/button:left-[115%]
                  "
                />

                <span className="relative flex items-center gap-3">
                  {isSending ? (
                    <>
                      <Loader2
                        size={17}
                        className="animate-spin"
                        strokeWidth={1.8}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        size={16}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                      />
                      Send message
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                      />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

/* =========================================================
   FORM FIELD
========================================================= */

const FormField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="group/field">
      <label
        htmlFor={name}
        className="mb-2.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-text-muted transition-colors duration-300 group-focus-within/field:text-accent"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="
            peer
            w-full
            rounded-xl
            border
            border-border
            bg-bg-soft
            px-4
            py-3.5
            text-sm
            text-text
            outline-none
            transition-all
            duration-300
            placeholder:text-text-muted/50
            focus:border-accent/50
            focus:bg-bg
            focus:shadow-[0_0_0_4px_rgba(117,98,232,0.06)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-0
            left-4
            h-px
            w-0
            bg-accent
            transition-all
            duration-500
            peer-focus:w-[calc(100%-2rem)]
          "
        />
      </div>
    </div>
  );
};

/* =========================================================
   SOCIAL LINK
========================================================= */

const SocialLink = ({ href, label, icon }) => {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.94 }}
      className="
        group/social
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-border
        bg-bg-soft
        text-text-muted
        transition-all
        duration-300
        hover:border-accent/40
        hover:bg-accent-soft
        hover:text-accent
        hover:shadow-[0_12px_30px_rgba(117,98,232,0.14)]
      "
    >
      <span
        aria-hidden="true"
        className="
          absolute
          inset-0
          scale-0
          rounded-xl
          bg-accent/10
          transition-transform
          duration-500
          group-hover/social:scale-100
        "
      />

      <i
        className={`
          ${icon}
          relative
          z-10
          text-[16px]
          transition-all
          duration-500
          group-hover/social:scale-110
          group-hover/social:-rotate-3
        `}
      />
    </motion.a>
  );
};

export default Contact;
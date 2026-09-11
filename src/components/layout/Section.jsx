const Section = ({
  children,
  id,
  className = "",
  as: Tag = "section",
}) => {
  return (
    <Tag
      id={id}
      className={`
        relative
        w-full
        py-24
        sm:py-28
        lg:py-36
        ${className}
      `}
    >
      {children}
    </Tag>
  );
};

export default Section;
export type SectionProps = {
  label: string;
  children?: React.ReactNode;
};
export const Section: React.FC<SectionProps> = ({ label, children }) => {
  return (
    <>
      <hr className="my-4 md:min-w-full" />
      <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-slate-500">
        {label}
      </h6>
      <ul className="flex flex-col list-none md:flex-col md:min-w-full">
        {children}
      </ul>
    </>
  );
};

export default Section;

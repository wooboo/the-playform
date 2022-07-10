export default function LandingCard({
  title,
  children,
  icon,
  iconClassName,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  iconClassName: string;
}) {
  return (
    <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white rounded-lg shadow-lg">
      <div className="flex-auto px-4 py-5">
        <div
          className={`inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center ${iconClassName} rounded-full shadow-lg`}
        >
          {icon}
        </div>
        <h6 className="text-xl font-semibold">{title}</h6>
        <p className="mt-2 mb-4 text-slate-500">{children}</p>
      </div>
    </div>
  );
}

export type LandingCardProps = Parameters<typeof LandingCard>[number];

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-slate-400">
      {children}
    </h6>
  );
}

export type HeaderProps = Parameters<typeof Header>[number];

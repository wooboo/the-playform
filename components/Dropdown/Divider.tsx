export default function Divider() {
  return <div className="h-0 mx-4 my-2 border border-solid border-slate-100" />;
}

export type DividerProps = Parameters<typeof Divider>[number];

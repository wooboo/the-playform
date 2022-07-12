import Link from "next/link";
import { useRouter } from "next/router";

export type ItemProps = { label: string; href: string; iconClassName: string };
export const Item: React.FC<ItemProps> = ({ label, href, iconClassName }) => {
  const router = useRouter();

  return (
    <li className="items-center">
      <Link href={href}>
        <a
          href="#"
          className={
            "text-xs uppercase py-3 font-bold block " +
            (router.pathname.indexOf(href) !== -1
              ? "text-sky-500 hover:text-sky-600"
              : "text-slate-700 hover:text-slate-500")
          }
        >
          <i
            className={`${iconClassName} mr-2 text-sm ${
              router.pathname.indexOf(href) !== -1
                ? "opacity-75"
                : "text-slate-400"
            }`}
          ></i>{" "}
          {label}
        </a>
      </Link>
    </li>
  );
};

export default Item;

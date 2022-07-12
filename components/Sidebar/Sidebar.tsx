import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "../../components/Dropdowns/NotificationDropdown";
import UserDropdown from "../../components/Dropdowns/UserDropdown";
import Section from "./Section";
import Item from "./Item";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-slate-600 whitespace-nowrap"
            >
              Notus NextJS
            </a>
          </Link>
          {/* User */}
          <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block">
              <NotificationDropdown />
            </li>
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-slate-600 whitespace-nowrap"
                    >
                      Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="pt-0 mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border border-solid rounded shadow-none outline-none border-slate-500 placeholder-slate-300 text-slate-600 focus:outline-none"
                />
              </div>
            </form>
            <Section label="Admin Layout Pages">
              <Item
                label="Dashboard"
                href="/admin/dashboard"
                iconClassName="fas fa-tv"
              />
              <Item
                label="Settings"
                href="/admin/settings"
                iconClassName="fas fa-tools"
              />
              <Item
                label="Tables"
                href="/admin/tables"
                iconClassName="fas fa-table"
              />
              <Item
                label="Maps"
                href="/admin/maps"
                iconClassName="fas fa-map-marked"
              />
            </Section>

            <Section label="Auth Layout Pages">
              <Item
                label="Login"
                href="/auth/login"
                iconClassName="fas fa-fingerprint"
              />
              <Item
                label="Register"
                href="/auth/register"
                iconClassName="fas fa-clipboard-list"
              />
            </Section>
            <Section label="No Layout Pages">
              <Item
                label="Landing Page"
                href="/landing"
                iconClassName="fas fa-newspaper"
              />
              <Item
                label="Profile Page"
                href="/profile"
                iconClassName="fas fa-user-circle"
              />
            </Section>

          </div>
        </div>
      </nav>
    </>
  );
}

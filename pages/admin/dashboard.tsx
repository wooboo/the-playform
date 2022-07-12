import React from "react";
import { trpc } from "../../utils/trpc";

// components

import CardLineChart from "../../components/Cards/CardLineChart";
import CardBarChart from "../../components/Cards/CardBarChart";
import CardPageVisits from "../../components/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic";

// layout for page

import Admin from "../../layouts/Admin";

export default function Dashboard() {
  const { data, isLoading } = trpc.useQuery(["users.me"]);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
          <CardLineChart />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
          <CardPageVisits />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;

import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/main";
import DropCommerce from "../pages/drop";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [{ element: <DropCommerce />, index: true }],
    },
  ]);
}

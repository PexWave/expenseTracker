import { Outlet, Link, useLoaderData } from "react-router-dom";

export function TransactionLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
import { Outlet } from "react-router-dom";
import { Main } from "../pages/Main";

export function MainArea() {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
}

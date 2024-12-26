import { ReactNode } from "react";

import { auth } from "@/auth";
import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/navbar/left-sidebar";

const Rootlayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar session={session} />
      </div>
      {children}
    </main>
  );
};

export default Rootlayout;

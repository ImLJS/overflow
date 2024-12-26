import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

import NavLinks from "./nav-links";

type SidebarProps = {
  session?: Session | null;
};

const LeftSidebar = ({ session }: SidebarProps) => {
  const handleSignOut = async () => {
    await signOut({ redirectTo: ROUTES.SIGN_IN });
  };

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col justify-start gap-6 md:items-center lg:items-stretch">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3  ">
        {!session ? (
          <>
            <Button
              className="small-medium btn-secondary inline-flex h-9 min-h-[41px] w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-slate-50 shadow-none transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300"
              asChild
            >
              <Link href={ROUTES.SIGN_IN}>
                <Image
                  className="invert-colors lg:hidden"
                  src="/icons/account.svg"
                  width={20}
                  height={20}
                  alt="account"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Sign In
                </span>
              </Link>
            </Button>

            <Button
              className="small-medium light-border-2 btn-tertiary text-dark400_light900 inline-flex h-9 min-h-[41px] w-full items-center justify-center rounded-lg border bg-slate-900 px-4 py-3 text-sm font-medium shadow-none transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300"
              asChild
            >
              <Link href={ROUTES.SIGN_UP}>
                <Image
                  className="invert-colors lg:hidden"
                  src="/icons/sign-up.svg"
                  width={20}
                  height={20}
                  alt="user"
                />
                <span className="max-lg:hidden">Sign Up</span>
              </Link>
            </Button>
          </>
        ) : (
          <Button
            className="small-medium btn-secondary inline-flex h-9 min-h-[41px] w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-slate-50 shadow-none transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300"
            type="submit"
            onClick={handleSignOut}
          >
            <Image
              className="invert-colors"
              src="/icons/account.svg"
              width={30}
              height={30}
              alt="user"
            />
            <span className="primary-text-gradient max-lg:hidden">Log Out</span>
          </Button>
        )}
      </div>
    </section>
  );
};

export default LeftSidebar;

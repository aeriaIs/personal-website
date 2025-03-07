import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <div className={cn("container max-w-screen-xl mx-auto", className)}>{children}</div>;
};

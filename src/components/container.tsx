import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div {...props} className={cn("container max-w-(--breakpoint-xl) mx-auto", className)}>
      {children}
    </div>
  );
};

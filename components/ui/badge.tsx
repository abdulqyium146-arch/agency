import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#4F8EF7]/20 text-[#4F8EF7]",
        pending: "bg-amber-500/20 text-amber-400",
        confirmed: "bg-blue-500/20 text-blue-400",
        completed: "bg-green-500/20 text-green-400",
        cancelled: "bg-red-500/20 text-red-400",
        paid: "bg-green-500/20 text-green-400",
        failed: "bg-red-500/20 text-red-400",
        refunded: "bg-orange-500/20 text-orange-400",
        secondary: "bg-white/10 text-[#8B9CB8]",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

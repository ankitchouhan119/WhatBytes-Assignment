"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

// Define a mapping of colors that we can pass as a prop
const colorClasses = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
  pink: "bg-pink-500",
  sky: "bg-sky-500",
 
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { color?: keyof typeof colorClasses }
>(({ className, value, color = "blue", ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full ", 
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full transition-all", colorClasses[color])} // Apply dynamic color
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))

Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

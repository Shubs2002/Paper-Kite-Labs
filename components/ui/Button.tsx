/**
 * components/ui/Button.tsx
 * Reusable button/link with three variants:
 *   primary — black filled pill, hover: lift with shadow
 *   outline — black border pill, hover: filled black
 *   secondary — light bg, hover: darker
 */

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ButtonProps } from "@/lib/types";

export default function Button({
  label,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const shouldReduce = useReducedMotion();

  const sizeStyles: Record<string, string> = {
    sm: "px-5 py-2 text-[13px]",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variantStyles: Record<string, string> = {
    primary: [
      "bg-surface-dark text-white",
      "hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]",
      "hover:-translate-y-[1px]",
      "active:translate-y-0 active:shadow-none",
    ].join(" "),
    outline: [
      "bg-transparent text-ink border border-ink",
      "hover:bg-surface-dark hover:text-white",
      "active:bg-ink",
    ].join(" "),
    secondary: [
      "bg-white text-ink",
      "hover:bg-gray-50",
      "active:bg-gray-100",
    ].join(" "),
  };

  const baseStyles = [
    "inline-flex items-center justify-center",
    "font-medium rounded-button",
    "transition-all duration-200 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2",
    "select-none cursor-pointer",
    sizeStyles[size],
    variantStyles[variant],
    className,
  ].join(" ");

  const motionProps = shouldReduce
    ? {}
    : {
        whileTap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 500, damping: 30 },
      };

  if (href) {
    return (
      <motion.span {...motionProps} className="inline-block">
        <Link href={href} className={baseStyles}>
          {label}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseStyles}
      {...motionProps}
    >
      {label}
    </motion.button>
  );
}

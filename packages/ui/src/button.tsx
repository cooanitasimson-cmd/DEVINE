import {
  cloneElement,
  isValidElement,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
  type ReactElement
} from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    variant?: "primary" | "secondary";
    asChild?: boolean;
  }>;

const baseStyles = "devine-btn";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "devine-btn--primary",
  secondary: "devine-btn--secondary"
};

export function Button({
  variant = "primary",
  asChild = false,
  children,
  className = "",
  type,
  ...props
}: ButtonProps) {
  const composedClassName = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      className: `${composedClassName} ${(children as ReactElement).props.className ?? ""}`.trim(),
      ...props
    });
  }

  return (
    <button type={type ?? "button"} className={composedClassName} {...props}>
      {children}
    </button>
  );
}

import type { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  className: string;
  icon?: React.ReactNode;
  variant: "primary" | "secondary" | "ghost" | "warning";
  noRadius?: boolean;
  disabled?: boolean;
  onClick: () => void;
}>;

const Button = ({
  children,
  className,
  icon,
  variant,
  noRadius,
  disabled,
  onClick,
}: ButtonProps) => {
  const rounded = !noRadius;
  const buttonDisabled = disabled !== undefined;

  const isIconAndText = icon && children;
  const isJustIcon = icon && !children;
  const isJustText = !icon && children;

  return (
    <button
      className={`text-sm leading-tight font-normal ${
        variant == "primary"
          ? `bg-blue-600 text-white ${!buttonDisabled && "hover:bg-blue-700"}`
          : variant == "secondary"
            ? `bg-gray-100 text-gray-800 ${!buttonDisabled && "hover:bg-gray-200"}`
            : variant == "ghost"
              ? `border border-blue-600 text-blue-600 ${!buttonDisabled && "hover:bg-blue-50"}`
              : variant == "warning"
                ? `bg-red-600 text-white ${!buttonDisabled && "hover:bg-red-700"}`
                : ""
      } ${(isIconAndText || isJustText) && "px-4 py-2"} ${isJustIcon && "p-2"} ${rounded && "rounded-lg"} ${buttonDisabled ? "cursor-default opacity-50" : "cursor-pointer"} ${className}`}
      disabled={buttonDisabled}
      onClick={onClick}
    >
      {isIconAndText ? (
        <div className="flex items-center gap-2">
          {icon}
          <span>{children}</span>
        </div>
      ) : isJustIcon ? (
        icon
      ) : isJustText ? (
        <span>{children}</span>
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;

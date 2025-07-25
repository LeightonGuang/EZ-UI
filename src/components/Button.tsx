import type { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  className: string;
  onClick: () => void;
  variant: "Primary" | "secondary";
}>;

const Button = ({ children, className, onClick, variant }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

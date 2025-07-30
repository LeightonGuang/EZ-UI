import type { PropsWithChildren } from "react";

type InputProps = PropsWithChildren<{
  className?: string;
  placeholder?: string;
  buttonPosition?: "outside" | "inside";
  buttonColour?: string;
  buttonValue?: React.ReactNode;
  value: string;
  noRadius?: boolean;
  onChange?: () => void;
  onButtonClick?: () => void;
}>;

const Input = ({
  className,
  noRadius,
  placeholder,
  buttonPosition,
  buttonColour,
  buttonValue,
  value,
  onChange,
  onButtonClick,
}: InputProps) => {
  const rounded = !noRadius;
  const hasButton = buttonPosition;
  console.log(buttonColour);

  return (
    <div
      className={`${rounded && "rounded-lg"} flex w-min border-1 border-solid border-gray-500 text-sm`}
    >
      <input
        className={`border-gray-500 bg-white p-2 ${rounded && "rounded-lg"} ${buttonPosition == "outside" && rounded && "rounded-l-lg rounded-r-none"} ${className}`}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
      {hasButton && (
        <button
          style={{ backgroundColor: buttonColour || "#E8AE68" }}
          className={`${rounded && "rounded-lg"} ${buttonPosition == "outside" && rounded && "rounded-l-none rounded-r-lg"} cursor-pointer px-4 hover:opacity-85`}
          onClick={onButtonClick}
        >
          {buttonValue}
        </button>
      )}
    </div>
  );
};

export default Input;

"use client";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  icon?: any;
  primary?: boolean;
  secondary?: boolean;
  trinary?: boolean;
  className?: string;
}

const ButtonsComponent: React.FC<ButtonProps> = (props) => {
  const { icon, primary, secondary, trinary, className, ...rest } = props;
  const classNameGenerator = (): string => {
    const common =
      " p-4 rounded-sm place-items-center flex gap-1 text-align-center";
    if (primary) {
      return (
        "bg-button-background-primary text-button-text-color-primary " + common
      );
    }

    if (secondary) {
      return (
        "bg-button-background-secondary text-button-text-color-secondary border-2 border-button-border" +
        common
      );
    }

    if (trinary) {
      return "" + common;
    }
    return "";
  };
  return (
    <div className={classNameGenerator() + (className || "")}>
      <button {...rest} className="w-full">
        {icon && icon}
        {rest.children}
      </button>
    </div>
  );
};

export default ButtonsComponent;

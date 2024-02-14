import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

interface IButton extends PropsWithChildren {
  [key: string]: any;
}

const Button: React.FC<IButton> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;

import { FaGlobeAfrica } from "react-icons/fa";
interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const Button = ({ children, color, onClick }: Props) => {
  const styles = { color: "gold", padding: "3px 1px" };
  return (
    <>
      <button style={styles} className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
      <FaGlobeAfrica color="blue" size="40" />
    </>
  );
};

export default Button;

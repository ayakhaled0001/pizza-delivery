import { Link } from "react-router-dom";

function LinkButton({ children }) {
  return       <Link
  to="/menu"
  className="tex-sm text-blue-500 hover:text-blue-700 hover:underline">
  &larr; Back to menu
</Lin>;
}

export default LinkButton;

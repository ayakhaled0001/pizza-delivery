import { Link } from "react-router-dom";

function LinkButton({ childrenc, to }) {
  return (
    <Link
      to={to}
      className="tex-sm text-blue-500 hover:text-blue-700 hover:underline">
      {children}
    </Link>
  );
}

export default LinkButton;

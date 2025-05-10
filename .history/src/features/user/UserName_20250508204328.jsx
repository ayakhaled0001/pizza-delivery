import { useSelector } from "react-redux";

function UserName() {
  useSelector((state) => state.user.username);
  return <div className="hidden md:block text-sm font-semibold">ayoya</div>;
}

export default UserName;

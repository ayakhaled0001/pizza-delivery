import { useSelector } from "react-redux";

function UserName() {
  useSelector((state) => state.user.user);
  return <div className="hidden md:block text-sm font-semibold">ayoya</div>;
}

export default UserName;

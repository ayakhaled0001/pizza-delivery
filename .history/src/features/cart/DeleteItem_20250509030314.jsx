import { useDispatch } from "react-redux";
import Button from "../../ui/Button";

function DeleteItem() {
  const dispatch = useDispatch();
  return <Button>Delete</Button>;
}

export default DeleteItem;

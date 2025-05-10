import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  return <h1>Menu</h1>;
}
function loader() {
  const menu = await getMenu()
}
export default Menu;

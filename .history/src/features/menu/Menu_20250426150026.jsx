import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  return {menu.map((item)=><)};
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;

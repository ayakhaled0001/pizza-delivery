import { formatCurrency } from "../../utilities/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {isLoadingIngredients ? "loading ..." : ingredients}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;

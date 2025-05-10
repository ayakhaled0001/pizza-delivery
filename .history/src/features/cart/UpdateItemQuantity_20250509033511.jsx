import Button from "../../ui/Button";

function UpdateItemQuantity({ pizzaId }) {
  return (
    <div className="flex gap-1 items-center">
      <Button>-</Button>
      <Button>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;

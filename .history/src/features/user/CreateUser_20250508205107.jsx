import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";

function CreateUser() {
  const [username, setUsername] = useState("");
  useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        className=" w-72 input mb-8"
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

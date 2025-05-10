import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
function App() {
  return <div>hello vite</div>;
}

export default App;

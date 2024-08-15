import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";

function App() {
  return (
    <>
      <div className="bg-[#0f0f0f] min-h-screen">
        <Provider store={store}>
          <Body />
        </Provider>
      </div>
    </>
  );
}

export default App;

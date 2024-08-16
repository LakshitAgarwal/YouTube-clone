import { Provider } from "react-redux";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import MainContainer from "./Components/MainContainer";
import VideoAndTagsContainer from "./Components/VideoAndTagsContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [
        {
          path: "/",
          element: <VideoAndTagsContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <div>
        <Provider store={store}>
          <Navbar />
          <RouterProvider router={appRouter} />
        </Provider>
      </div>
    </>
  );
}

export default App;

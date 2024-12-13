import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerUi from "./components/shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Cart } from "./components/Cart";
// import Grocery from "./components/Grocery";
// import { createBrowserRouter } from "react-router-dom";
// import { RouterProvider } from "react-router-dom";

// // const parent = React.createElement("div", { id: "parent" }, [
// //   React.createElement("div", { id: "children" }, "hello World"),
// //   React.createElement("div", { id: "children2" }, "hello world2"),
// // ]);

// const Heading = () => <h1 id="heading">Hello World</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(heading);
// // console.log(">>>", heading);

// // React Functional Components
// // Functional Components

// const number = 10000;

// const HeadingComponent = () => (
//   <div id="container">
//     <Heading />
//     {Heading()}
//     <Heading></Heading>
//     <h2>{100 + 200}</h2>
//     <h1 className="heading2">My Functional based component</h1>
//   </div>
// );

// //How to render a fucntional component
// root.render(<HeadingComponent />);

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        {/* <Body /> */}
        <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <ContactUs />,
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/contact",
    element: <ContactUs />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);

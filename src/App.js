import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Components/AllProducts/Login/Login.css";
import About from "./Components/About/About";
import Login from "./Components/AllProducts/Login/Login";
import Mainmanu from "./Components/MainManu/Mainmanu";
import Shops from "./Components/Products/Shops";
import Products from "./Components/Products/Shops";
import Registration from "./Components/AllProducts/Registration/Registration";
import WomensAndFashion from "./Components/AllProducts/Women's_Fashion/WomensAndFashion";
import HealthAndBeauty from "./Components/AllProducts/HealthAndBeauty/HealthAndBeauty";
import WatchBagsAndJewellery from "./Components/AllProducts/WatchBangsAndJewellery/WatchBagsAndJewellery";
import MensAndFashion from "./Components/AllProducts/HealthAndBeauty/MensAndFashion/MensAndFashion";
import BabysToy from "./Components/AllProducts/BabysToy/BabysToy";
import ElectronicDevies from "./Components/AllProducts/ElectronicDevies/ElectronicDevies";
import TvAndHome from "./Components/AllProducts/TvHome/TvAndHome";
import ElectronicAccessories from "./Components/AllProducts/ElectronicAccessories/ElectronicAccessories";
import HomeAndLifeStyle from "./Components/AllProducts/HomeAndLifeStyle/HomeAndLifeStyle";
import AutomotiveAndMotorbike from "./Components/AllProducts/AutomotiveAndMotorbike/AutomotiveAndMotorbike";
import SportsAndOutdoor from "./Components/AllProducts/SportsAndOutdoor/SportsAndOutdoor";
import Pets from "./Components/AllProducts/Pets/Pets";
function App() {
      const router = createBrowserRouter([
        {
          path: "/",
          element: <Mainmanu></Mainmanu>,

          children: [
            {
              path: "/",
              element: <Products></Products>,
            },
            {
              path: "/home",
              element: <Products></Products>,
            },
            {
              path: "/shop",
              element: <Shops></Shops>,
            },
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "/womensAndFashion",
              element: <WomensAndFashion></WomensAndFashion>,
            },
            {
              path: "/healthandbuty",
              element: <HealthAndBeauty></HealthAndBeauty>,
            },
            {
              path: "/watchbangandjewellery",
              element: <WatchBagsAndJewellery></WatchBagsAndJewellery>,
            },
            {
              path: "/mensandfashion",
              element: <MensAndFashion></MensAndFashion>,
            },
            {
              path: "/babystoy",
              element: <BabysToy></BabysToy>,
            },
            {
              path: "/electronicdevies",
              element: <ElectronicDevies></ElectronicDevies>,
            },
            {
              path: "/tvandhomeapplience",
              element: <TvAndHome></TvAndHome>,
            },
            {
              path: "/electronicaccessories",
              element: <ElectronicAccessories></ElectronicAccessories>,
            },
            {
              path: "/homelifestyle",
              element: <HomeAndLifeStyle></HomeAndLifeStyle>,
            },
            {
              path: "/automotiveandmotobike",
              element: <AutomotiveAndMotorbike></AutomotiveAndMotorbike>,
            },
            {
              path: "/sportsoutdoor",
              element: <SportsAndOutdoor></SportsAndOutdoor>,
            },
            {
              path: "/pets",
              element: <Pets></Pets>,
            },
          ],
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/registration",
          element: <Registration></Registration>,
        },
      ]);

  return (

    <div className="">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

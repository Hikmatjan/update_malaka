import type { FC } from "react";
import Hero from "./Hero";
import MainCategory from "./MainCategory";

const Home: FC = () => {
  return (
    <div className=" w-[80%] m-auto ">
      <Hero />
      <MainCategory />
    </div>
  );
};

export default Home;

import React from "react";
import { chart } from "../constans";
import { Title, GifCard } from "../components";
import { styles } from "../util/styles";

function Home() {
  return (
    <div className="home flex flex-col gap-[20px] sm:gap-[60px]">
      <Title icon={chart} title={"Trending"} nav={true} />
      <section
        className={`section ${styles.container} ${styles.padding} flex items-start`}
      >
        <GifCard />
      </section>
    </div>
  );
}

export default Home;

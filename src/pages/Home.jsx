import React from "react";
import { v4 as uuidv4 } from "uuid";
import { chart, gifData } from "../constans";
import { Title, GifCard } from "../components";
import { styles } from "../util/styles";

function Home() {
  return (
    <div className="home flex flex-col gap-[20px] sm:gap-[60px]">
      <Title icon={chart} title={"Trending"} nav={true} />
      <section
        className={`section ${styles.container} ${styles.padding} flex flex-col sm:flex-row items-start gap-[10px]`}
      >
        {gifData.map((_, idx) => (
          <div
            key={uuidv4()}
            className="w-full sm:w-[32.5%] flex flex-col gap-[10px]"
          >
            {gifData[idx].map((gif) => (
              <GifCard {...gif} key={uuidv4()} />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;

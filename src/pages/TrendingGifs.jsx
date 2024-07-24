import React from "react";
import { v4 as uuidv4 } from "uuid";
import { chart, gifData } from "../constans";
import { Heading, GifCard } from "../components";
import { styles } from "../util/styles";
import { useParams } from "react-router-dom";
import useThree from "../hooks/useThree";

function TrendingGifs() {
  const { name } = useParams();
  const data = useThree(gifData);

  return (
    <div className="home flex flex-col gap-[20px] sm:gap-[60px]">
      <Heading icon={chart} title={name} nav={true} />
      <section
        className={`section ${styles.container} ${styles.padding} flex flex-col sm:flex-row items-start gap-[10px]`}
      >
        {data.map((_, idx) => (
          <div
            key={uuidv4()}
            className="w-full sm:w-[32.5%] flex flex-col gap-[10px]"
          >
            {data[idx].map((gif) => (
              <GifCard {...gif} key={uuidv4()} />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default TrendingGifs;

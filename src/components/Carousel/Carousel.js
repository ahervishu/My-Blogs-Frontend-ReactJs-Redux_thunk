import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./styles.css";

export const Carousel = () => {
  const [active, setActive] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const categories = [
    { name: "For You" },
    { name: "Following" },
    { name: "Education" },
    { name: "Fitness" },
    { name: "Software Engineering" },
    { name: "Freelancing" },
    { name: "Lifestyle" },
    { name: "Leadership" },
    { name: "UX" },
  ];

  return (
    <div className="Carousel" style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        infiniteLoop={true}
        activePosition={"center"}
        disableSwipe={true}
        alwaysShowChevrons={true}
        showSlither={false}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={10}
        leftChevron={'<'}
        rightChevron={'>'}
        outsideChevron
        chevronWidth={chevronWidth}
        style={{position:''}}
      >
        {categories.map((d) => <div key={d.name}>{d.name}</div>)}
      </ItemsCarousel>
    </div>
  );
};

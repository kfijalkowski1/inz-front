import {CardType} from "../../types.tsx";
import SingleCard from "./SingleCard.tsx";

interface CardGalleryProps {
  cardsInfo: CardType[];
}

export function CardGallery(cardsProps: CardGalleryProps) {
  console.log("Received cardsInfo:", cardsProps);
  return (
    <>
      <div className="flex flex-wrap justify-center w-full gap-4">
      {cardsProps.cardsInfo.map((card) => (
        <div className="w-1/2 md:w-1/3 lg:w-1/4 p-2" key={card.id}>
          <SingleCard {...card} />
        </div>
      ))}
      </div>
    </>

  );
}

export default CardGallery;

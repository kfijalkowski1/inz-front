import { Card } from "flowbite-react";
import {CardType} from "../../types.tsx";
import DateVisualiser from "./DateViauliser.tsx";

export function SingleCard({id, title, description, created_at, author_name} : CardType) {
  return (
      <Card href={`/posts/${id}`} className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
          </h5>
          <h6 className="font-extralight tracking-tight text-gray-800 dark:text-white">
              Autor: {author_name}
          </h6>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              {description}
          </p>
          <DateVisualiser date={created_at}/>
      </Card>
  );
}

export default SingleCard;

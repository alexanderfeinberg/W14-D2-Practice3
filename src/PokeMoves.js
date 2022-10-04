import { moves } from "./data.js";
import PokeMoveCard from "./PokeMoveCard";

const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((element) => {
          return <PokeMoveCard key={element.id} {...element} />;
        })}
      </ul>
    </div>
  );
};

export default PokeMoves;

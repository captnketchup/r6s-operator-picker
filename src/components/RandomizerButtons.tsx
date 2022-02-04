import { DisplayedOpsState } from "../App";
import { IOperator } from "../operators/IOperator";

type RandomizerButtonsProps = {
    ownedShits: IOperator[]
  displayedOps: DisplayedOpsState;
  setDisplayedOps: React.Dispatch<React.SetStateAction<DisplayedOpsState>>;
};

export function RandomizerButtons({
  displayedOps,
  setDisplayedOps,
  ownedShits
}: RandomizerButtonsProps) {
  return (
    <div className="w-full h-auto my-16 flex flex-row justify-around">
      <p
        onClick={() =>
          setDisplayedOps({
            ...displayedOps,
            selected:
            ownedShits[
                Math.floor(Math.random() * ownedShits.length)
              ].name,
          })
        }
        className="font-bold text-3xl bg-myDarkerRed text-white px-6 py-2 rounded-full cursor-pointer"
      >
        Randomize
      </p>
      <p
      onClick={() => setDisplayedOps({...displayedOps, selected: ""})}
      className="font-bold text-3xl bg-myDarkerRed text-white px-6 py-2 rounded-full cursor-pointer">
        Clear
      </p>
    </div>
  );
}

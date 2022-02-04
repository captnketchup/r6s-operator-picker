import clsx from "clsx"
import { DisplayedOpsState } from "../App"
import { IOperator } from "../operators/IOperator"

type RandomizerButtonsProps = {
  ownedShits: IOperator[]
  displayedOps: DisplayedOpsState
  setDisplayedOps: React.Dispatch<React.SetStateAction<DisplayedOpsState>>
}

export function RandomizerButtons({
  displayedOps,
  setDisplayedOps,
  ownedShits
}: RandomizerButtonsProps) {
  return (
    <div className="my-16 flex flex-col">
      <div className="w-full h-auto  flex flex-row justify-around">
        <p
          onClick={() =>
            setDisplayedOps({
              ...displayedOps,
              selected:
                ownedShits.length > 0
                  ? ownedShits[Math.floor(Math.random() * ownedShits.length)].name
                  : ""
            })
          }
          className={clsx(
            ownedShits.length === 0 && "bg-opacity-70",
            "font-bold text-3xl bg-myDarkerRed text-white px-6 py-2 rounded-full cursor-pointer"
          )}
        >
          Randomize
        </p>
        <p
          onClick={() => setDisplayedOps({ ...displayedOps, selected: "" })}
          className={clsx(
            displayedOps.selected === "" && "bg-opacity-70",
            "font-bold text-3xl bg-myDarkerRed text-white px-6 py-2 rounded-full cursor-pointer"
          )}
        >
          Clear
        </p>
      </div>
      {ownedShits.length === 0 && (
        <span className="mt-4 text-white text-xl">
          please mark some operators owned first in the settings
        </span>
      )}
    </div>
  )
}

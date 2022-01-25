import clsx from "clsx"

type OpTypeSwitchType = {
  opType: string
  setOpType: React.Dispatch<React.SetStateAction<string>>
}

export function OpTypeSwitch({ opType, setOpType }: OpTypeSwitchType) {
  return (
    <div className={clsx("my-4 w-full flex flex-row items-center justify-around text-gray-500 font-bold text-2xl")}>
      <div className=" bg-black rounded-3xl py-2 px-4 cursor-pointer" onClick={() => setOpType("defend")}>
        <span className={clsx(opType === "defend" && "text-white")}>defenders</span>
      </div>
      <div className=" bg-black rounded-3xl py-2 px-4 cursor-pointer" onClick={() => setOpType("")}>
        <span className={clsx(opType === "" && "text-white")}>both</span>
      </div>
      <div className="bg-black rounded-3xl py-2 px-4 cursor-pointer" onClick={() => setOpType("attack")}>
        <span className={clsx(opType === "attack" && "text-white")}>attackers</span>
      </div>
    </div>
  )
}

type OpTypeSwitchType = {
  opType: string
  setOpType: React.Dispatch<React.SetStateAction<string>>
}

export function OpTypeSwitch({ opType, setOpType }: OpTypeSwitchType) {
  return (
    <div className="my-4 w-full flex flex-row items-center justify-around text-white font-bold text-2xl">
      <div className="bg-black rounded-3xl py-2 px-4" onClick={() => setOpType("defend")}>
        <span>defenders</span>
      </div>
      <div className="bg-black rounded-3xl py-2 px-4" onClick={() => setOpType("attack")}>
        <span>attackers</span>
      </div>
    </div>
  )
}

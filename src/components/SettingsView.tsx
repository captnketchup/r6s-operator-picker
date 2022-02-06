import { IOperator } from "../operators/IOperator"
import { SettingsOperatorSwitch } from "./SettingsOperatorSwitch"

type SettingsViewProps = {
  isSettings: boolean
  operators: IOperator[]
  setSettingsPanel: React.Dispatch<React.SetStateAction<boolean>>
}

export function SettingsView({ operators, setSettingsPanel }: SettingsViewProps) {
  return (
    <div className="bg-myPurple w-full h-full px-4 py-8">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-5xl text-white font-bold capitalize">settings</h1>
        <p
          className="text-xl bg-myDarkerRed text-white px-6 py-2 rounded-full cursor-pointer"
          onClick={() => setSettingsPanel(false)}
        >
          Close
        </p>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 flex flex-col text-white gap-8 px-4 py-8 mx-auto overflow-y-auto">
        {operators
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e) => (
            <SettingsOperatorSwitch key={e.character} {...e} />
          ))}
      </div>
    </div>
  )
}

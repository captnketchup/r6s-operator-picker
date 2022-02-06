import React, { useEffect, useState } from "react"
import "./App.css"
import { OpCard } from "./components/OpCard"
import { OpTypeSwitch } from "./components/OpTypeSwitch"
import { RandomizerButtons } from "./components/RandomizerButtons"
import { SettingsView } from "./components/SettingsView"
import { IOperator } from "./operators/IOperator"
import rawoperators from "./operators/operators.json"

export type DisplayedOpsState = {
  selected: string
  displayed: IOperator[]
}

function App() {
  const operators: IOperator[] = rawoperators
  const [opType, setOpType] = useState("")
  const [settingsPanel, setSettingsPanel] = useState(false)

  const [randomizedOp, setRandimezedOp] = useState("")

  const [displayedOps, setDisplayedOps] = useState<DisplayedOpsState>({
    selected: "",
    displayed: operators
  })

  const [asd, setAsd] = useState<IOperator[]>(operators)

  useEffect(() => {
    setAsd(
      operators
        .filter((e) => (opType !== "" ? e.type === opType : e.type !== undefined))
        .filter((e) => ownOperators.some((oe) => oe.name === e.name && oe.value === true))
    )
  }, [displayedOps.selected, opType, settingsPanel])
  let ownOperators: any[] = []

  Object.keys(localStorage).forEach(function (key) {
    if (localStorage.getItem(key) !== null && key != null) {
      let defaultValue: boolean = false
      const tempLocal = localStorage.getItem(key)
      if (tempLocal !== null) {
        defaultValue = JSON.parse(tempLocal)
      }
      //@ts-ignore
      ownOperators.push({ name: key, value: defaultValue })
    }
  })
  return (
    <div className="w-full h-full bg-blue-900">
      {!settingsPanel && (
        <div className=" px-4 py-8 min-h-screen max-w-6xl mx-auto">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-5xl text-white font-bold capitalize">R6S operator picker</h1>
            <p
              className="font-bold text-xl bg-myDarkerRed text-white px-6 py-2 rounded-full cursor-pointer"
              onClick={() => setSettingsPanel(true)}
            >
              Settings
            </p>
          </div>
          <RandomizerButtons
            ownedShits={asd}
            displayedOps={displayedOps}
            setDisplayedOps={setDisplayedOps}
          />
          <OpTypeSwitch opType={opType} setOpType={setOpType} />
          <div className="grid grid-cols-3 sm:grid-cols-5 xl:grid-cols-6 gap-8">
            {asd
              .filter((e) =>
                displayedOps.selected !== "" ? e.name === displayedOps.selected : true
              )
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((e) => (
                <OpCard key={e.name} character={e.character} icon={e.icon} name={e.name} />
              ))}
          </div>
        </div>
      )}
      {settingsPanel && (
        <SettingsView
          operators={operators}
          isSettings={settingsPanel}
          setSettingsPanel={setSettingsPanel}
        />
      )}
    </div>
  )
}

export default App

import React, { useState } from "react"
import "./App.css"
import { OpCard } from "./components/OpCard"
import { OpTypeSwitch } from "./components/OpTypeSwitch"
import { IOperator } from "./operators/IOperator"
import rawoperators from "./operators/operators.json"

function App() {
  const operators: IOperator[] = rawoperators
  const [opType, setOpType] = useState("")
  console.log(opType)
  return (
    <div className="bg-blue-900 py-16 px-8">
      <OpTypeSwitch opType={opType} setOpType={setOpType} />
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
        {operators
          .filter((e) => (opType !== "" ? e.type === opType : e.type !== undefined))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e) => (
            <OpCard key={e.name} {...e} />
          ))}
      </div>
    </div>
  )
}

export default App

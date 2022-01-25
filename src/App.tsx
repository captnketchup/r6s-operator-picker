import React, { useState } from "react";
import "./App.css";
import { OpCard } from "./components/OpCard";
import { OpTypeSwitch } from "./components/OpTypeSwitch";
import { SettingsView } from "./components/SettingsView";
import { IOperator } from "./operators/IOperator";
import rawoperators from "./operators/operators.json";

function App() {
  const operators: IOperator[] = rawoperators;
  const [opType, setOpType] = useState("");
  const [settingsPanel, setSettingsPanel] = useState(false);
  let ownOperators: any[] = [];

  Object.keys(localStorage).forEach(function (key) {
    console.log(key);
    if (localStorage.getItem(key) !== null && key != null) {
      let defaultValue: boolean = false;
      const tempLocal = localStorage.getItem(key);
      if (tempLocal !== null) {
        defaultValue = JSON.parse(tempLocal);
      }
      //@ts-ignore
      ownOperators.push({name: key, value: defaultValue})
    }
  });
  console.log(ownOperators);
  console.log(opType);
  return (
    <div className="w-full h-full ">
      {!settingsPanel && (
        <div className="bg-blue-900 px-4 py-8 min-h-screen">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-5xl text-white font-bold capitalize">
              R6S operator picker
            </h1>
            <p
              className="text-xl bg-myDarkerRed text-white px-6 py-2 rounded-full cursor-pointer"
              onClick={() => setSettingsPanel(true)}
            >
              Settings
            </p>
          </div>
          <OpTypeSwitch opType={opType} setOpType={setOpType} />
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
            {operators
              .filter((e) =>
                opType !== "" ? e.type === opType : e.type !== undefined
              )
              .filter((e) => 
                ownOperators.includes({name: e.name, value: true})
              )
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((e) => (
                <OpCard
                  key={e.name}
                  character={e.character}
                  icon={e.icon}
                  name={e.name}
                />
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
  );
}

export default App;

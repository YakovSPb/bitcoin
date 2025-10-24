import React, { useState } from "react"
import CryptocurrencyCard from "./components/CryptocurrencyCard"
import CustomMenu from "./components/CustomMenu"

function App() {
  const [currencyId, setCurrencyId] = useState(1)

  return (
    <div className="flex">
      <CustomMenu setCurrencyId={setCurrencyId} />
      <div className="mx-auto my-auto">
        <CryptocurrencyCard currencyId={currencyId}/>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import Entry from "./Entry"
import data from "../sampledata"
const Main = () => {
    
    const datap = data.map(info => {
        return (
            <Entry 
                {...info}
            />
        )
    })
  return (
    <div className="main">
        {datap}
    </div>
  )
}

export default Main
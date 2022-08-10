import React from 'react'
import Cards from './Cards'
import datas from './data'

function App() {
  return (
    <div>
 {
       datas.map((val)=><Cards
       key={val.id}
       img={val.imgs}
       title={val.title}
       sname={val.sname}
       link={val.link}


       />)
     }


    </div>
  )
}

export default App
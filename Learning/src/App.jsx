import Header from "../Components/Header"
import Entry from "../Components/Entry"
import datas from "./data.js"
export default function App(){
  const Entrycontent = datas.map((data) => {
    return <Entry 
      key = {data.id}
      entry = {data}
    />
  })
  return (
    <>
        <Header />
       {Entrycontent}
    </>
  )
}
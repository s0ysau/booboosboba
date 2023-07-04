import Header from "../components/Header";
import ItemsDisplay from "../components/ItemsDisplay";
import SideBar from "../components/SideBar";


export default function SelectionPg ({products}) {
  return (
    <>
      <Header />
      <SideBar />
      <ItemsDisplay products={products}/>
    </>
  )
}
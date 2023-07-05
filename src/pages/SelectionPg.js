import Header from "../components/Header";
import ItemsDisplay from "../components/ItemsDisplay";
import SideBar from "../components/SideBar";


export default function SelectionPg ({products}) {
  return (
    <div >
      <Header />
      <section class="grid grid-cols-3 gap-4">
        <SideBar />
      <section class="col-span-2">
        <ItemsDisplay products={products}/>
      </section>
      </section>
    </div>
  )
}
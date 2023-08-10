import { useEffect, useState, useRef } from 'react';
import Header from "../components/Header";
import ItemsDisplay from "../components/ItemsDisplay";
import SideBar from "../components/SideBar";


export default function NewOrderPg () {
  return (
    <>
      <p>New Order Page Component</p>
      <div >
        <Header />
        <section className="grid grid-cols-3 gap-4">
          <SideBar />
          <section className="col-span-2">
            <ItemsDisplay />
          </section>
        </section>
      </div>
    </>
  )
}
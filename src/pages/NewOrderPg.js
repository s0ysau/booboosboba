import Header from '../components/Header'
import MenuDisplay from '../components/MenuDisplay'

export default function NewOrderPg ({ products }) {
  return (
    <div>
      <Header products={products} />
      <section>
        <MenuDisplay products={products} />
      </section>
    </div>
  )
}

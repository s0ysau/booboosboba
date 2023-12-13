import Header from '../components/Header'
import MenuDisplay from '../components/MenuDisplay'

export default function NewOrderPg ({ products }) {
  return (
    <section>
      <Header products={products} className='absolute'/>
      <div>
        <MenuDisplay products={products} />
      </div>
    </section>
  )
}

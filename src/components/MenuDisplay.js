import MenuListItem from './MenuListItem'

export default function MenuDisplay({ products }) {
  const item = products.map(item => 
    <MenuListItem 
    key={item.id} 
    // handleAddToOrder={handleAddToOrder}
    product={item} />
    )

  return (
    <>
      <p>Menu Display component</p>
      <div className='overflow-y-auto h-fit'>
        <div className='grid grid-rows-4 grid-cols-3 gap-4'>
          {item}
        </div>
      </div>
    </>
  )
}

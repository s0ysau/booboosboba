import MenuListItem from './MenuListItem'

export default function MenuDisplay ({ products }) {
  const item = products.map(item =>
    <MenuListItem
      key={item.id}
      product={item}
    />
  )

  return (
    <>
      <div className='overflow-y-auto h-fit p-4'>
        <div className='grid grid-rows-4 grid-cols-3 gap-4 justify-items-center	'>
          {item}
        </div>
      </div>
    </>
  )
}

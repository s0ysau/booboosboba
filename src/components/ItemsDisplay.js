import GridItemsDisplay from "./GridItemsDisplay"


export default function ItemsDisplay ({products}) {
  return (
    <>
    <p>Items Display component</p>
      <div>
        {
          products ? (
          <ul className='grid grid-rows-4 grid-cols-3 gap-4'>
            {
              products.map((product) => {
                return (
                  <div key={product._id}>
                    <GridItemsDisplay product={product} />
                  </div>
                )
              })
            }
          </ul>
        ) : <p>No items to display</p>
        }
      </div>
    </>
  )
}
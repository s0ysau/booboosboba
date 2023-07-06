import GridItemsDisplay from "./GridItemsDisplay"


export default function ItemsDisplay ({products}) {
  return (
    <>
      <div>
        {
          products ? (
          <ul class='grid grid-rows-4 grid-cols-3 gap-4'>
            {
              products.map((product, id) => {
                return (
                  <GridItemsDisplay product={product} />
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
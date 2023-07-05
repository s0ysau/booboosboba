import SingleItemDisplay from "./SingleItemDisplay"


export default function ItemsDisplay ({products}) {
  return (
    <>
      <div>
        {
          products ? (
          <ul class='grid grid-rows-4 grid-cols-3 '>
            {
              products.map((product, id) => {
                return (
                  <SingleItemDisplay product={product} />
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
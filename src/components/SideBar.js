import { Link } from "react-router-dom"
import CategoryPg from "../pages/CategoryPg"

export default function SideBar ({products, category}) {
  return (
    <div class="w-48 border-4 border-green-500/75">
        {
          category ? 
          (
            <ul>
              {
                category.map((item) => {
                  return (
                    <div key={item.sortNumber}>
                      <Link to={`/category/${item.name}`} element={<CategoryPg products={products} category={category}/>}>
                        {item.name}
                      </Link>
                    </div>
                  )
                })
              }
            </ul>
          ) : null
        }
      <button>Start Over</button>
    </div>
  )
}
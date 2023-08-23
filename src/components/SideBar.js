import { Link } from "react-router-dom"
import CategoryPg from "../pages/CategoryPg"

export default function SideBar ({category}) {
  return (
    <div className="w-48 border-4 border-green-500/75">
      <p>SideBar component</p>
      <div>
          {
            category ? 
            (
              <ul>
                {
                  category.map((item) => {
                    return (
                      // <div key={item.sortNumber}>
                      //   <Link to={`/category/${item.name}`} element={<CategoryPg category={item}/>}>
                      //     {item.name}
                      //   </Link>
                      // </div>
                      <div key={item._id}>
                        <h1>{item.name}</h1>
                      </div>
                    )
                  })
                }
              </ul>
            ) : "error"
          }
        </div>
      <button>Start Over</button>
    </div>
  )
}
import { Link } from 'react-router-dom'
import CategoryPg from '../pages/CategoryPg'

export default function SideBar ({ categories }) {
  return (
    <div className='h-fit border-4 border-green-500/75'>
      <p>SideBar component</p>
      <p>Logo placement</p>
      <div>
        {
            categories
              ? (
                <ul>
                  {
                  categories.map((category) => {
                    return (
                      <div key={category.sortNumber}>
                        <Link to={`/category/${category.name}`} element={<CategoryPg category={category} />}>
                          {category.name}
                        </Link>
                      </div>
                    )
                  })
                }
                </ul>
                )
              : 'error'
          }
      </div>
      <button>Start Over</button>
    </div>
  )
}

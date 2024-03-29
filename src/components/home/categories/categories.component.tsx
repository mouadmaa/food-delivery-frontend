import { FC, useEffect } from 'react'

import {
  useSelectedCategoryState,
  defaultSelectedCategory,
  useSetCategoriesState,
} from '@/store/category/category.state'
import { Category } from '@/store/category/category.types'
import CategoryButton from '../category-button/category-button.component'
import { StyledCategories } from './categories.styles'

interface CategoriesProps {
  categories: Category[]
}

const Categories: FC<CategoriesProps> = (props) => {
  const { categories } = props

  const [selectedCategory, setSelectedCategory] = useSelectedCategoryState()

  const setCategories = useSetCategoriesState()
  useEffect(() => setCategories(categories), [categories])

  return (
    <StyledCategories>
      <h1>Hungry? You're in the right place</h1>
      <nav>
        <CategoryButton
          category={defaultSelectedCategory}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </nav>
    </StyledCategories>
  )
}

export default Categories

import { FC, useRef } from 'react'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { StyledDropdown } from './dropdown.styles'
import { DropdownSvg } from './dropdown.svg'

interface DropdownProps {
  items: string[]
  show: boolean
  onHide: () => void
  onSelect: (item: string) => void
  selectedItem?: string
  withCheckMark?: boolean
}

const Dropdown: FC<DropdownProps> = (props) => {
  const { items, show, onHide, onSelect, selectedItem, withCheckMark = false } = props

  const ref = useRef(null)
  useOnClickOutside(ref, onHide)

  const handleClick = (item: string) => {
    onSelect(item)
    onHide()
  }

  return (
    <StyledDropdown ref={ref} show={show}>
      {items.map((item) => (
        <button key={item} onClick={() => handleClick(item)}>
          <span>{item}</span>
          {withCheckMark && item === selectedItem && <DropdownSvg />}
        </button>
      ))}
    </StyledDropdown>
  )
}

export default Dropdown

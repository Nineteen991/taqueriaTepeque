import { useState } from 'react'

export function useMenuLinks() {
    const [menuLinks, setMenuLinks] = useState('/home')

    return { menuLinks, setMenuLinks }
}
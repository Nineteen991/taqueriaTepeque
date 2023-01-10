import { useState } from 'react'

export function useQuantity(defaultCount = 1, count) {
    const [quantity, setQuantity] = useState(count || defaultCount)

    function makeSureItsANumber(e) {
        if (!(+e.target.value >= 1)) {
            setQuantity(1)
            return
        }
        setQuantity(+e.target.value)
    }

    return { quantity, setQuantity, makeSureItsANumber }
}
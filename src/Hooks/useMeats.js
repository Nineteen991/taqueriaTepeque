import { useState } from 'react'

export function useMeats(defaultMeat) {
    const [meats, setMeats] = useState(defaultMeat || getDefaultMeats())
    const [whichMeat, setWhichMeat] = useState('')

    function meatChoice(e) {
        const { value } = e.target
        setWhichMeat(value)
        setMeats(prev => (
            prev.map(meat => (
                meat.meat === value ? 
                    { ...meat, checked: true } : 
                    { ...meat, checked: false }
            ))
        ))
    }

    return { meats, meatChoice, whichMeat }
}

const meatChoices = [
    "Carne Asada",
    "Pollo",
    "Al Pastor",
    "Pollo Asado",
    "Carnitas",
    "Chile Verde",
    "Cabeza",
    "No Meat"
]

function getDefaultMeats() {
    return meatChoices.map(meat => (
        {
            meat,
            checked: false
        }
    ))
}
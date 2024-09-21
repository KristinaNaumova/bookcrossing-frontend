const adv_status = [
    {label: 'Активна', value: 'Active'},
    {label: 'Сделка', value: 'InDeal'},
    {label: 'В архиве', value: 'Archived'},
]

const adv_type = [
    {label: 'Обмен', value: 'Exchange'},
    {label: 'Аренда', value: 'Rent'},
    {label: 'В дар', value: 'Gift'},
]

interface Adv {
    book_author: string,
    book_name: string,
    comment: string,
    deadline: Date,
    description: string,
    type: string
}

export {adv_type, adv_status}
export type {Adv}
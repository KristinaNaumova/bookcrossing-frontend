import {Genre} from "../../../Genre/models/types/genre.ts";

type AdvStatus = 'Active' | 'InDeal' | 'Archived'
type AdvType = 'Gift' | 'Exchange' | 'Rent'

interface AdvReponse {
    ad_id: number
    ad: Adv,
    id: number
    proposed_book: null | string
    user_id: string
}

interface Adv {
    id: number;
    book_author: string,
    book_name: string,
    comment: string,
    deadline: Date,
    description: string,
    locations: any[]
    proposed_book?: string
    user_id: number,
    user: {
        faculty: string
        id: string
        is_banned: number
        locations: {id: number;name: string}[]
        name: string
        rating: number | null
    },
    responses: AdvReponse[]
    status: AdvStatus,
    type: AdvType,
    timezone: any,
    genres: Genre[],
}


type AdvCreate = Omit<Adv, 'genres' | 'user' | 'user_id' | 'status' | 'id'>

export type {Adv, AdvCreate, AdvType, AdvStatus, AdvReponse}
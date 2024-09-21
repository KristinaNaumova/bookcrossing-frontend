import {Genre} from "../../../Genre/models/types/genre.ts";

interface User {
    contacts: { id: string, contact_type: string, contact: string }[],
    faculty: string,
    id: string
    genres: Genre[]
    is_banned: number
    locations: {id: number;name: string}[]
    name: string
    rating: number | null
}

export type {User}
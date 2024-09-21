import {Adv} from "../../../Adv/models/types/adv.ts";


interface DealActive {
    ad: Adv,
    another_user_id: string
    another_user_name: string
    proposed_book: string
    deal_status: DEAL_STATUS
    deal_waiting_start_time: string
    id: number
    user_evaluation: string | null
}

type USER_ROLE = 'Getter' | 'Giver'
type DEAL_STATUS = 'DealWaiting' | 'RefundWaiting' | 'Finished'

interface Deal {
    ad: Adv,
    another_user_contacts: {
        id: string,
        contact_type: string,
        contact: string,
    }[]
    another_user_id: string
    another_user_name: string
    deal_status: DEAL_STATUS
    deal_waiting_end_time: string
    deal_waiting_start_time: string
    first_member_id: string
    id: number
    code?: string
    proposed_book: string | null
    refund_waiting_end_time: string | null
    refund_waiting_start_time: string | null
    second_member_id: string
    user_current_role: USER_ROLE
}


type AdvCreate = Omit<Deal, 'genres' | 'user' | 'user_id' | 'status' | 'id'>

export type {Deal, AdvCreate, DealActive, USER_ROLE, DEAL_STATUS}
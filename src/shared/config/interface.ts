export interface ResponseData<T> {
    status: string,
    msg: string,
    data: T[]
}

export interface ResponseOneData<T> {
    status: string,
    msg: string,
    data: T
}

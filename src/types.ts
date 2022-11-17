export interface CountryResponseData {
    country: CountryItemData[]
    name: string
}
export interface CountryItemData {
    probability: number
    country_id: string
}
export interface GenderResponseData {
    count: number
    name: string
    gender : string
    probability: number
}
export interface GenderItemData {
    gender: string
    probability: number
}
export interface AgeResponseData {
    age: number
    count: number
    name: string
}

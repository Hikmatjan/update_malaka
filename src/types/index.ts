interface authDataType {
  token: string
  user: object
  code: number
  data: string
}
export interface AuthResponseType {
  data: authDataType
}

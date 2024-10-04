import { ResponseGeneral } from "../ResponseGeneral"

export interface ResponseAcceso extends ResponseGeneral{
    
    token: string
    
}
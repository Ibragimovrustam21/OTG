import axios from "axios"
import { ITextArea } from "../interface"

// comments
export const getComments = async () => {
  return await axios.get(`http://localhost:3001/comments`)
}
// create comment
export const createComments = async (data: ITextArea) => {
  return await axios.post(`http://localhost:3001/comments`, data, { headers: { 'Content-Type': 'application/json' } })
}
import axios from "axios"
import { IPostProduct } from "../interface"

// GET products
export const getProducts = async () => {
  return await axios.get(`http://localhost:3001/basket`)
}

// POST product
export const postProducts = async (data: IPostProduct) => {
  return await axios.post(`http://localhost:3001/basket`, data, { headers: { 'Content-Type': 'application/json' } })
}

// DELETE product
export const deleteProducts = async (id: string) => {
  return await axios.delete(`http://localhost:3001/basket/${id}`)
}
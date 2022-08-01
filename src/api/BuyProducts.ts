import axios from "axios"
import { IPostProduct } from "../interface"

// GET buy products
export const getBuyProducts = async () => {
  return await axios.get(`http://localhost:3001/shop`)
}
// POST buy-products
export const postBuyProducts = async (data: IPostProduct) => {
  return await axios.post(`http://localhost:3001/shop`, data, { headers: { 'Content-Type': 'application/json' } })
}
// DELETE buy-products
export const deleteBuyProducts = async (id: string) => {
  return await axios.delete(`http://localhost:3001/shop/${id}`)
}
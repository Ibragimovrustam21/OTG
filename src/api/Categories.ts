import axios from "axios"

export const getCategories = async () => {
  return await axios.get('http://localhost:3001/categories')
}

export const getCategoriesImages = async (id?: string) => {
  return await axios.get(`http://localhost:3001/categories/${id}`)
}
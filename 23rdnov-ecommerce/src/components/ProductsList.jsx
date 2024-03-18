import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import useFetchCollection from '../customhooks/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { selectproducts, store_products } from '../redux/productSlice'

const ProductsList = () => {
  const dispatch=useDispatch()
  const {data}=useFetchCollection("products")
  useEffect(()=>{
    dispatch(store_products(data))
  },[data]) 
  
  let products=useSelector(selectproducts)
  return (
    <>
    <ProductItem products={products}/>
    </>
  )
}

export default ProductsList

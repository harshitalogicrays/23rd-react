import React from 'react'
import ProductData from './ProductData'
import { Container } from 'react-bootstrap'
import Loader from './Loader'
import useFetchCollection from '../customhooks/useFetchCollection'

const ProductItem = ({products}) => { 
  const {data:categories}=useFetchCollection('categories')
  return (
    <>
    <Container fluid className='mt-5'>
      {products.length==0 && <Loader/>}
      <div className='row'>
        <div className="col-2">
          <div className="card">
            <div className="card-header">
              Category
            </div>
            <div className="card-body">
              {categories.map((c,i)=>
                <p>{c.title}</p>
              )}
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="row">
              {products.map((product)=><ProductData key={product.id} product={product} />)}
          </div>
        </div>
        
      </div>
      </Container>
    </>
  )
}

export default ProductItem

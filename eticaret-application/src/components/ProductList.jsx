import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllProducts} from '../redux/slices/productSlice'

function ProductList() {

    const dispatch = useDispatch();
    const {products} = useSelector((store)=> store.product)
    console.log(products)

    useEffect(()=>{ //Sayfa ilk açıldığında çalışacak
        dispatch(getAllProducts())
    },[])
  return (
    <div>ProductList</div>
  )
}

export default ProductList
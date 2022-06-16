import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {useParams} from "react-router"
import { getproduct } from "../Redux/Product/actions"

export const Products=()=>{
    const {cat}=useParams()
    const dispatch=useDispatch()
    const [data,setdata]=useState(null)
    useEffect(()=>{
        dispatch(getproduct(cat))
    },[])
    return <h1>Products</h1>
}
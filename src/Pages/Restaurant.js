import React, { useState } from 'react'
import FoodItems from '../components/FoodItems'
import { SWIGGY_RESTAURANT_API } from '../constants'
import { useParams } from 'react-router-dom'

const Restaurant = () => {

    const [data, setData] = useState({})
    const params = useParams()


    async function getData(){
        const data = await fetch(SWIGGY_RESTAURANT_API+`restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`)
        const res = await data.json()
        setData()
    }
    
    
    useEffect(() => {

    }, [])

  return (
    <div className='max-w-2xl mx-auto'>
        <FoodItems />
    </div>
  )
}

export default Restaurant
import { useState ,useEffect } from "react"
import { json, useParams } from "react-router-dom"

const RestaurantsInfo = () => {

    [resInfo,setResInfo] = useState(null)
    const {resId} = useParams()

    useEffect( ()=> {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json();
        console.log(json.data)
        setResInfo(json.data)
    }

    console.log(resId)

    const {name} = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info

    console.log(name)

    return(
        <div>
            <h1>Praveen</h1>
            
        </div>
    )
}

export default RestaurantsInfo
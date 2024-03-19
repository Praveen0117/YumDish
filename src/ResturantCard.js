const ResturantCard = (props ) => {
    const {resData} = props 
    const {name,cuisines,avgRating,slaString,costForTwo,cloudinaryImageId} = resData?.info
    return(
        <div className="m-4 p-4 w-[280px] bg-gray-300 rounded-lg  hover:bg-gray-400 ">
            <img alt="res-logo" className=" rounded-lg w-[250px] h-[230px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4 style={{color:"green"}}>{avgRating}</h4>
            <h4>{}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResturantCard
import { useEffect, useState } from "react";
import axios from 'axios'
import ImageCard from "../ImageCard/ImageCard";
function Home(){
    const [data , setData] = useState([]);
    const[pageNo , setPageNo] = useState(1);
    const[searchImage , setSearchImage] = useState("tree");
  
   useEffect(()=>{
    console.log("userSearch",typeof searchImage);
        axios.get(`https://api.unsplash.com/search/photos?page=${pageNo}&query=${searchImage}&client_id=zwbuqqbMVj4Wkliuq99CTW96MG4SySO4n6HJid8tcxc`).then((response)=>
        {
            console.log(response.data.results)
            setData((pre)=>{
                return [...pre, ...response.data.results];
            });
        })

   } , [pageNo , searchImage])

   useEffect(()=>{
    console.log("pagereset")
    setPageNo(1);
    setData([]);
   }, [searchImage])
  

    return(
        <>
        <div>
            <div className="searchBar bg-slate-500 min-h-36 w-full ">
                <input type="text" placeholder="Search" style={{
                    padding : "10px"
                }}  onChange={(e)=>{
                    setTimeout(()=>{
                       const userSearch = (e.target.value); 
                        setSearchImage(userSearch);
                       // console.log(userSearch)
                    },1000)
                }} />
            </div>
            <div className="DisplayImageContainer">
                {
                data && data.map((items , index)=>{
                        return <ImageCard imageUrl = {items.urls.regular} key = {index}/>
                    })
                }
            </div>
            <div className="button">
                <button onClick={()=>{
                    setPageNo((previous)=>{
                        return(previous+1)
                    });
                    console.log(pageNo)
                }}>Load More</button>
            </div>
        </div>
        </>
    )
}
export default Home;
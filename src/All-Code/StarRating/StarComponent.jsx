import {useState} from "react";

export default function StarComponent({starCount = 5}){

const [starValue, setStarValue] = useState();
const [hoverValue, setHoverValue]= useState(0);
    return <div className='container'>

{
    new Array(starCount).fill(0).map((_, index)=>(
        <span  style={{fontSize:"50px"}} key={index}  className={hoverValue==0 && index < starValue ||index < hoverValue? 'gold':''} onClick={()=>setStarValue(index+1)}
        
        onMouseEnter={()=>setHoverValue(index+1)}
        onMouseLeave={()=>setHoverValue(0)
        }
        
        >&#9733; </span>
    ))
}



<h1>Rating:({starValue})</h1>
    </div>
}
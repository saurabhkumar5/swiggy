import React, { useEffect, useState } from 'react'

function Github() {
   const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/saurabhkumar5')
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div style={{backgroundColor:'red',height:'50px',textAlign:'center'}}>Github follower: {data.followers}
     <img src={data.avatar_url} width="300px"/>
    </div>
  )
}

export default Github
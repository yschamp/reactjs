import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"

export function GitHub(){
    // const [ data, setData ] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(response => setData(response))
    // },[])
    const data = useLoaderData()
    return(
        <>
            <div className="text-center p-4 bg-yellow-500">GitHub Followers: {data.followers}</div>
            <img src={data.avatar_url} alt="" />
        </>
    )
}

export async function loadGithubData(){
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response
}
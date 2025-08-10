import { useParams, useSearchParams } from "react-router"

function User(){
    const {id} = useParams()
    const [ searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('utmMedium'))


    return(
        <div className="text-center p-4 bg-green-300">User id: {id} {searchParams.get('utmMedium')}</div>
    )
}

export default User
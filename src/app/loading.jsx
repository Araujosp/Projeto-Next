import LoadingSpinner from "@/components/loadingSpinner"
export default function loading(){
    return(
        <>
        <div className="container">
            <div className="flex">
                <h2>Loading</h2>
                <LoadingSpinner/>
            </div>
        </div>
        </>
    )
}
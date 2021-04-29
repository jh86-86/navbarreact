function Display({pageNum, state}){
    return(
        <div className={state}>
            <p>{pageNum}</p>   
        </div>    
    )
}

export default Display;
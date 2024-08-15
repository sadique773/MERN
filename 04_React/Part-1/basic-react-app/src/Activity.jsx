function Activity({Name,Color}){
    
    let styles = {color:Color}; 
       
    return(
        <>
            <h2 style={styles}>Hi! {Name}</h2>
           
        </>
    
    )
}
export default Activity;
function Goal(props) {
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal />
    } 
    return <MissedGoal/>

}


function MadeGoal() {
    return (
        <>
        <h2>it is a goal!</h2>
        </>
    )
}

function MissedGoal() {
   return(
    <>
    <h2>Missed!</h2>
    </>
   )
}


export default Goal;
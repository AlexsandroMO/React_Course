function Form({number}){

    function registerUsere(){
        console.log('gone!')
        alert('user regited!')
    }

    // function registerUsere(e){
    //     e.preventDefault()
    //     console.log('gone!')
    //     //alert('user regited!')
    // }

    return (
        <>
        <h1>My Register</h1>
        <form onSubmit={registerUsere}>
            <div>
                <input type="text" placeholder="write your text"/>
            </div>
            <div>
                <input type="submit" value="Register"/>
            </div>
        </form>
        </>
    )
}

export default Form;
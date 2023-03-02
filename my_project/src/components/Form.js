
import { useState } from 'react'

function Form({number}){

    function registerUsere(e){
        e.preventDefault()
        console.log('gone!')
        console.log(name, password) 
        //alert('user regited!')
    }

    const [name, setName] = useState('Alex')
    const [password, setPassword] = useState()

    return (
        <>
        <h1>My Register</h1>
        <form onSubmit={registerUsere}>
            <div>
                <label htmlFor="name">Nome: </label>
                <input 
                type="text"
                id="name" 
                name="name"
                placeholder="write your text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
            <label htmlFor="password">Senha: </label>
                <input 
                type="password"
                id="password"
                name="password"
                placeholder="write your password"
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <input type="submit" value="Register"/>
            </div>
        </form>
        </>
    )
}

export default Form;
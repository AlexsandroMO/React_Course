function Evento({number}){

    function meuEvento(){
        alert(`Ready!!! ${number}`)
    }

    return (
        <>
            <p>Click for start event</p>
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento;
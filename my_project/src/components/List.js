import Item from './Item'

function List(){
    return (
        <>
            <h1>My List</h1>
            <ul> 
                <li>Item 1</li>
                <Item marca="Ferrari" ano_lancamento={2023}/>
                <Item marca="Mercedes" ano_lancamento={2024}/>
                <Item ano_lancamento={2010}/>
                <Item marca="Audi"/>
            </ul>
        </>
    )
}

export default List;
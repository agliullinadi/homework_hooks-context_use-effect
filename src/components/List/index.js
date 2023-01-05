function List({ users, getInfo }) {
    return (
        <ul className='list'>
            {users && users.map(item => (
                <li key={item.id} data-id={item.id} data-name={item.name} onClick={getInfo}>{item.name}</li>
            ))}
        </ul>
    )
}

export default List;
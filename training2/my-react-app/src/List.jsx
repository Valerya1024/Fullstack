import PropTypes from 'prop-types'

function List(props) {
    
    //fruits.sort((a, b) => -a.name.localeCompare(b.name))
    props.items.sort((a, b) => a.calories - b.calories)
    
    //const lowCal = props.items.filter(fruit => fruit.calories < 93)

    const listItems = props.items.map(fruit =><li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>)

    return (
        <>
            <h3 className="list-category">{props.category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
        
    )
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number}))
}
List.defaultProps = {
    items: [],
    category: "Category"
}

export default List;
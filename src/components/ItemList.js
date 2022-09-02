import Item from "./Item";


const ItemList = (props) => {

    return (
        <>
            {
                props.items.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        stock={item.stock}
                        image={item.image}
                        description={item.description}
                        category={item.category}
                    />
                ))
            }
        </>
    );
}

export default ItemList;
import Item from "./Item";
import SpinnerTropical from "./SpinnerTropical";


const ItemList = ({items}) => {

    return (
        <>
            {   
                items.length > 0
                ?
                items.map(item => (
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
                : <SpinnerTropical />
            }
        </>
    );
}

export default ItemList;
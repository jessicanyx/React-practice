export const LargeProductListItem = ({product}) => {
    const {name, price, description, rating} = product;

    return (
        <>
        <h3>Name: {name} - {price}</h3>
        <h3>description: </h3><p>{description}</p>
        <p>Average Rating: {rating}</p>
        </>
        
    )
}
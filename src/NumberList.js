export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent,
}) => {
    return (
        <>
        {items.map((item, i) => (
            <>
            <h3>{i + 1}</h3>
            <ItemComponent key={i} {...{[resourceName]: item}}></ItemComponent>
            </>
            
        ))}
        </>
    )
}
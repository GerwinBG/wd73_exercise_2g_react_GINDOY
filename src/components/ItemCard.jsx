function ItemCard (items) {
  const {itemName, weight, price} = items;

  return (
    <>
      <div className="card w-25 m-3">
        <div className="card-body">
          <h5 className="card-title">{itemName}</h5>
          <p className="card-text">Weight: {weight}</p>
          <p className="card-text">Price: ₱{price}</p> 
        </div>
      </div>
    </>
  )
}

export default ItemCard
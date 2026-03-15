import './style/ItemCard.css'

function ItemCard ({ itemName, itemImage, itemDescription, itemPrice })
{
  return(
    <div className="card">
        <div className="card-img">
            <img src={itemImage} alt="item" />
        </div>
        <div className="card-title">{itemName}</div>
        <div className="card-subtitle">{itemDescription}</div>
        <div className="card-footer">
            <div className="card-price"><span>$</span> {itemPrice.toFixed(2)}$</div>
            <button className="card-btn">
                Add to Cart
            </button>
        </div>
    </div>
  );
}

export default ItemCard;
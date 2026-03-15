import './style/Products.css'
import ItemCard from './ItemCard';

function Products({ products }) {
    return (
        <div className="content">
            {products.map((product) => (
                <ItemCard 
                    key={product.id}
                    itemName={product.name}
                    itemImage={product.image}
                    itemDescription={product.description}
                    itemPrice={product.price}
                />
            ))}
        </div>
    );
}

export default Products;
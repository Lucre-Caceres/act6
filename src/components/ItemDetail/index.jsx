
import { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import styles from "./ItemDetail.module.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const ItemDetail = ({prod}) => {
  
  const [itemQuantity, setItemQuantity] = useState()
  
  const {addItem}=useContext(CartContext);

    
  
  return (

    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={prod.pictureURL} alt={prod.title} ></img>
      <div className={styles.itemContent}>
        <p className={styles.itemTitle}>{prod.title}</p>
        <p className={styles.itemDescription}>{prod.description}</p>
        <p className={styles.itemStock}>qty: {prod.stock}</p>
        <p className={styles.itemPrice}>USD: {prod.price}</p>
      </div>
      
      <ItemCount    
         stock={prod.stock}
         initial={1}
         addItem={addItem}
         /> 
         
     <Link to="/cart">  
      <button type="button" className={styles.finishBuying}>Finish Buying</button>
    </Link>    
    </div>
  )
}

export default ItemDetail;
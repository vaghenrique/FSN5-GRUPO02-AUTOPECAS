import styles from "@components/Buybox/Buybox"

function BuyBox() {
  return (
    <div className={styles.buyBox}>
      <h2>Product Name</h2>
      <p>Reference: 12345</p>
      <p>Rating: ★★★★☆</p>
      <p>Price: $100.00</p>
      <p>Description: This is a great product.</p>
      <div className={styles.productOptions}>
        <p>Option 1</p>
        <p>Option 2</p>
      </div>
      <button>COMPARE</button>
    </div>
  );
}

export default BuyBox;

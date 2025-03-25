class ShoppingCart {
    constructor() {
      this.items = [];
      
    }
  
    // Method to add items to the cart
    addItem(item) {
      this.items.push(item);
    }
  
    // Method to calculate total price using an arrow function
    calculateTotal = () => {
      return this.items.reduce((total, item) => total + item.price, 0);
    };
  
    // Method to apply discount using an arrow function
    applyDiscount = (discount) => {
      const total = this.calculateTotal();
      if (total > 100) {
        return total - (total * discount);
      }
      return total;
    };
  }
  
  // Real-life usage
  const cart = new ShoppingCart();
  cart.addItem({ name: "Laptop", price: 120 });
  cart.addItem({ name: "Mouse", price: 20 });
  
  console.log("Total Price:", cart.calculateTotal()); // Total Price: 140
  console.log("Total Price after Discount:", cart.applyDiscount(0.1)); // Total Price after Discount: 126
  
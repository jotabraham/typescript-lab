// TELLEST MOUNTAIN
interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (arrayOfMtns: Mountain[]): string => {
  return arrayOfMtns.reduce((acc, curVal) => {
    return curVal.height > acc.height ? curVal : acc;
  }).name;
};
console.log(findNameOfTallestMountain(mountains));

// PRODUCTS
interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  {
    name: "kindle",
    price: 70,
  },
  {
    name: "headphones",
    price: 250,
  },
  {
    name: "board game",
    price: 30,
  },
  {
    name: "water bottle",
    price: 12,
  },
];

const calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let counter: number = arrayOfProducts.length;
  let total: number = 0;
  arrayOfProducts.forEach((product) => {
    total += product.price;
  });
  return total / counter;
};
console.log(calcAverageProductPrice(products));

// INVENTORY
interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  {
    product: { name: "motor", price: 10.0 },
    quantity: 10,
  },
  {
    product: { name: "sensor", price: 12.5 },
    quantity: 4,
  },
  {
    product: { name: "LED", price: 1.0 },
    quantity: 20,
  },
];
// console.log(inventory);

const calcInventoryValue = (arrayOfInventoryItems: InventoryItem[]): number => {
  let total: number = 0;
  arrayOfInventoryItems.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  return total;
};
console.log(calcInventoryValue(inventory));

interface CoffeeProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  ingredients: string[];
  nutritionFacts: {
    calories: string;
    totalFat: string;
    sodium: string;
    totalCarbohydrate: string;
    protein: string;
  };
}

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: 1,
    name: "Hot Americano",
    slug: "hot-americano",
    description: "Hot Americano",
    price: 25000,
    discount: 0,
    image: "/americano.webp",
    ingredients: ["Espresso", "Hot Water"],
    nutritionFacts: {
      calories: "5",
      totalFat: "0g",
      sodium: "5mg",
      totalCarbohydrate: "0g",
      protein: "0.3g",
    },
  },
  {
    id: 2,
    name: "Hot Caramel Jcoccino",
    slug: "hot-caramel-jcoccino",
    description:
      "Espresso shot with steamed fresh milk, caramel syrup, and garnished with caramel sauce.",
    price: 35000,
    discount: 10,
    image: "/caramel-jcoccino.webp",
    ingredients: ["Espresso", "Steamed Milk", "Caramel Syrup", "Caramel Sauce"],
    nutritionFacts: {
      calories: "250",
      totalFat: "6g",
      sodium: "150mg",
      totalCarbohydrate: "40g",
      protein: "8g",
    },
  },
  {
    id: 3,
    name: "Hot Hazelnut Latte",
    slug: "hot-hazelnut-latte",
    description:
      "Espresso shot with steamed fresh milk, hazelnut syrup, and garnished with caramel sauce.",
    price: 38000,
    discount: 5,
    image: "/hazelnut-latte.webp",
    ingredients: [
      "Espresso",
      "Steamed Milk",
      "Hazelnut Syrup",
      "Caramel Sauce",
    ],
    nutritionFacts: {
      calories: "280",
      totalFat: "8g",
      sodium: "120mg",
      totalCarbohydrate: "35g",
      protein: "9g",
    },
  },
  {
    id: 4,
    name: "Hot Jcoccino",
    slug: "hot-jcoccino",
    description: "Espresso shot with steamed fresh milk & milk foam.",
    price: 30000,
    discount: 0,
    image: "/jcoccino.webp",
    ingredients: ["Espresso", "Steamed Milk", "Milk Foam"],
    nutritionFacts: {
      calories: "120",
      totalFat: "4g",
      sodium: "75mg",
      totalCarbohydrate: "12g",
      protein: "7g",
    },
  },
  {
    id: 5,
    name: "Hot Latte",
    slug: "hot-latte",
    description: "Espresso shot mixed with steamed fresh milk.",
    price: 28000,
    discount: 15,
    image: "/cafe-latte.webp",
    ingredients: ["Espresso", "Steamed Milk"],
    nutritionFacts: {
      calories: "150",
      totalFat: "5g",
      sodium: "80mg",
      totalCarbohydrate: "15g",
      protein: "8g",
    },
  },
  {
    id: 6,
    name: "Hot Mocha Espresso",
    slug: "hot-mocha-espresso",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, chocolate, topped with mocha cream, and garnished with chocolate powder.",
    price: 40000,
    discount: 5,
    image: "/mocha-espresso-frappe.webp",
    ingredients: [
      "Espresso",
      "Ice",
      "Fresh Milk",
      "Chocolate",
      "Mocha Cream",
      "Chocolate Powder",
    ],
    nutritionFacts: {
      calories: "350",
      totalFat: "12g",
      sodium: "180mg",
      totalCarbohydrate: "50g",
      protein: "10g",
    },
  },
  {
    id: 7,
    name: "Iced Americano",
    slug: "iced-americano",
    description: "Iced black coffee.",
    price: 27000,
    discount: 0,
    image: "/americano.webp",
    ingredients: ["Espresso", "Ice", "Cold Water"],
    nutritionFacts: {
      calories: "5",
      totalFat: "0g",
      sodium: "5mg",
      totalCarbohydrate: "0g",
      protein: "0.3g",
    },
  },
  {
    id: 8,
    name: "Iced Caramel Jcoccino",
    slug: "iced-caramel-jcoccino",
    description:
      "Espresso shot with steamed fresh milk, caramel syrup, and garnished with caramel sauce.",
    price: 37000,
    discount: 10,
    image: "/caramel-jcoccino.webp",
    ingredients: [
      "Espresso",
      "Ice",
      "Fresh Milk",
      "Caramel Syrup",
      "Caramel Sauce",
    ],
    nutritionFacts: {
      calories: "280",
      totalFat: "7g",
      sodium: "160mg",
      totalCarbohydrate: "45g",
      protein: "8g",
    },
  },
  {
    id: 9,
    name: "Iced Jcoccino",
    slug: "iced-jcoccino",
    description: "Espresso shot with steamed fresh milk & milk foam.",
    price: 32000,
    discount: 5,
    image: "/jcoccino.webp",
    ingredients: ["Espresso", "Ice", "Fresh Milk", "Milk Foam"],
    nutritionFacts: {
      calories: "130",
      totalFat: "4g",
      sodium: "80mg",
      totalCarbohydrate: "14g",
      protein: "7g",
    },
  },
  {
    id: 10,
    name: "Iced Latte",
    slug: "iced-latte",
    description: "Espresso shot mixed with steamed fresh milk.",
    price: 30000,
    discount: 15,
    image: "/cafe-latte.webp",
    ingredients: ["Espresso", "Ice", "Fresh Milk"],
    nutritionFacts: {
      calories: "160",
      totalFat: "5g",
      sodium: "85mg",
      totalCarbohydrate: "17g",
      protein: "8g",
    },
  },
  {
    id: 11,
    name: "Iced Mocha Espresso",
    slug: "iced-mocha-espresso",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, chocolate, topped with mocha cream, and garnished with chocolate powder.",
    price: 42000,
    discount: 5,
    image: "/mocha-espresso-frappe.webp",
    ingredients: [
      "Espresso",
      "Ice Nuggets",
      "Fresh Milk",
      "Chocolate",
      "Mocha Cream",
      "Chocolate Powder",
    ],
    nutritionFacts: {
      calories: "380",
      totalFat: "13g",
      sodium: "190mg",
      totalCarbohydrate: "55g",
      protein: "10g",
    },
  },
  {
    id: 12,
    name: "Avocado Frappe",
    slug: "avocado-frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, avocado powder, topped with mocha cream, and garnished with chocolate flakes.",
    price: 45000,
    discount: 20,
    image: "/avocado-frappe.webp",
    ingredients: [
      "Espresso",
      "Ice Nuggets",
      "Fresh Milk",
      "Avocado Powder",
      "Mocha Cream",
      "Chocolate Flakes",
    ],
    nutritionFacts: {
      calories: "420",
      totalFat: "18g",
      sodium: "160mg",
      totalCarbohydrate: "58g",
      protein: "9g",
    },
  },
  {
    id: 13,
    name: "Caramel Frappe",
    slug: "caramel-frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, caramel syrup, topped with mocha cream, and garnished with caramel sauce.",
    price: 43000,
    discount: 10,
    image: "/caramel-frappe.webp",
    ingredients: [
      "Espresso",
      "Ice Nuggets",
      "Fresh Milk",
      "Caramel Syrup",
      "Mocha Cream",
      "Caramel Sauce",
    ],
    nutritionFacts: {
      calories: "400",
      totalFat: "14g",
      sodium: "200mg",
      totalCarbohydrate: "62g",
      protein: "8g",
    },
  },
  {
    id: 14,
    name: "Jcoccino Frappe",
    slug: "jcoccino-frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, vanilla powder, topped with mocha cream.",
    price: 40000,
    discount: 5,
    image: "/jcoccino-frappe.webp",
    ingredients: [
      "Espresso",
      "Ice Nuggets",
      "Fresh Milk",
      "Vanilla Powder",
      "Mocha Cream",
    ],
    nutritionFacts: {
      calories: "350",
      totalFat: "12g",
      sodium: "170mg",
      totalCarbohydrate: "52g",
      protein: "9g",
    },
  },
  {
    id: 15,
    name: "Mocha Espresso Frappe",
    slug: "mocha-espresso-frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, chocolate, topped with mocha cream, and garnished with chocolate powder.",
    price: 47000,
    discount: 15,
    image: "/mocha-espresso-frappe.webp",
    ingredients: [
      "Espresso",
      "Ice Nuggets",
      "Fresh Milk",
      "Chocolate",
      "Mocha Cream",
      "Chocolate Powder",
    ],
    nutritionFacts: {
      calories: "410",
      totalFat: "15g",
      sodium: "210mg",
      totalCarbohydrate: "60g",
      protein: "11g",
    },
  },
];

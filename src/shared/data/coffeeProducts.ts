interface CoffeeProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
}

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: 1,
    name: "Hot Americano",
    description: "Hot Americano",
    price: 25000,
    discount: 0,
    image: "/americano.webp",
  },
  {
    id: 2,
    name: "Hot Caramel Jcoccino",
    description:
      "Espresso shot with steamed fresh milk, caramel syrup, and garnished with caramel sauce.",
    price: 35000,
    discount: 10,
    image: "/caramel-jcoccino.webp",
  },
  {
    id: 3,
    name: "Hot Hazelnut Latte",
    description:
      "Espresso shot with steamed fresh milk, hazelnut syrup, and garnished with caramel sauce.",
    price: 38000,
    discount: 5,
    image: "/hazelnut-latte.webp",
  },
  {
    id: 4,
    name: "Hot Jcoccino",
    description: "Espresso shot with steamed fresh milk & milk foam.",
    price: 30000,
    discount: 0,
    image: "/jcoccino.webp",
  },
  {
    id: 5,
    name: "Hot Latte",
    description: "Espresso shot mixed with steamed fresh milk.",
    price: 28000,
    discount: 15,
    image: "/cafe-latte.webp",
  },
  {
    id: 6,
    name: "Hot Mocha Espresso",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, chocolate, topped with mocha cream, and garnished with chocolate powder.",
    price: 40000,
    discount: 5,
    image: "/mocha-espresso-frappe.webp",
  },
  {
    id: 7,
    name: "Iced Americano",
    description: "Iced black coffee.",
    price: 27000,
    discount: 0,
    image: "/americano.webp",
  },
  {
    id: 8,
    name: "Iced Caramel Jcoccino",
    description:
      "Espresso shot with steamed fresh milk, caramel syrup, and garnished with caramel sauce.",
    price: 37000,
    discount: 10,
    image: "/caramel-jcoccino.webp",
  },
  {
    id: 9,
    name: "Iced Jcoccino",
    description: "Espresso shot with steamed fresh milk & milk foam.",
    price: 32000,
    discount: 5,
    image: "/jcoccino.webp",
  },
  {
    id: 10,
    name: "Iced Latte",
    description: "Espresso shot mixed with steamed fresh milk.",
    price: 30000,
    discount: 15,
    image: "/cafe-latte.webp",
  },
  {
    id: 11,
    name: "Iced Mocha Espresso",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, chocolate, topped with mocha cream, and garnished with chocolate powder.",
    price: 42000,
    discount: 5,
    image: "/mocha-espresso-frappe.webp",
  },
  {
    id: 12,
    name: "Avocado Frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, avocado powder, topped with mocha cream, and garnished with chocolate flakes.",
    price: 45000,
    discount: 20,
    image: "/avocado-frappe.webp",
  },
  {
    id: 13,
    name: "Caramel Frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, caramel syrup, topped with mocha cream, and garnished with caramel sauce.",
    price: 43000,
    discount: 10,
    image: "/caramel-frappe.webp",
  },
  {
    id: 14,
    name: "Jcoccino Frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, vanilla powder, topped with mocha cream.",
    price: 40000,
    discount: 5,
    image: "/jcoccino-frappe.webp",
  },
  {
    id: 15,
    name: "Mocha Espresso Frappe",
    description:
      "Espresso shot blended with ice nuggets, fresh milk, chocolate, topped with mocha cream, and garnished with chocolate powder.",
    price: 47000,
    discount: 15,
    image: "/mocha-espresso-frappe.webp",
  },
];

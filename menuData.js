const menuData = [
  {
    category: "🥘 Starters",
    items: [
      { id: 1, name: "Paneer 65", price: 190 },
      { id: 2, name: "Paneer Dragon", price: 230 },
      { id: 3, name: "Paneer Manchurian", price: 190 },
      { id: 4, name: "Paneer Chilli", price: 200 },
      { id: 5, name: "Veg Chilli", price: 110 },
      { id: 6, name: "Veg 65", price: 100 },
      { id: 7, name: "Veg Manchurian Dry", price: 90 },
      { id: 8, name: "Soya Chilli", price: 150 },
      { id: 9, name: "Peri Peri Twisters", price: 90 }
    ]
  },
  {
    category: "🍚 Chinese Rice & Noodles",
    items: [
      { id: 10, name: "Fried Rice", price: 100 },
      { id: 11, name: "Schezwan Rice", price: 120 },
      { id: 12, name: "Paneer Schezwan Rice", price: 140 },
      { id: 13, name: "Triple Rice", price: 150 },
      { id: 14, name: "Hakka Noodles", price: 100 },
      { id: 15, name: "Veg Noodles", price: 120 },
      { id: 16, name: "Schezwan Noodles", price: 130 },
      { id: 17, name: "Paneer Schezwan Noodles", price: 150 }
    ]
  },
  {
    category: "🍕 Pizzas",
    items: [
      { id: 18, name: "Margherita Pizza (Medium, 7.5\")", price: 150 },
      { id: 19, name: "Margherita Pizza (Large, 8\")", price: 170 },
      { id: 20, name: "Onion Pizza (Small, 6\")", price: 140 },
      { id: 21, name: "Onion Pizza (Large, 9\")", price: 180 },
      { id: 22, name: "Capsicum Pizza (Small, 6\")", price: 140 },
      { id: 23, name: "Capsicum Pizza (Medium, 7.5\")", price: 170 },
      { id: 24, name: "Tomato Pizza (Small, 6\")", price: 140 },
      { id: 25, name: "Tomato Pizza (Medium, 7.5\")", price: 170 },
      { id: 26, name: "Tomato Pizza (Large, 9\")", price: 200 },
      { id: 27, name: "Veg Pizza (Small, 6\")", price: 150 },
      { id: 28, name: "Veg Pizza (Medium, 7.5\")", price: 180 },
      { id: 29, name: "Veg Pizza (Large, 9\")", price: 210 },
      { id: 30, name: "Spicy Veg Pizza (Small, 6\")", price: 180 },
      { id: 31, name: "Spicy Veg Pizza (Medium, 7.5\")", price: 200 },
      { id: 32, name: "Spicy Veg Pizza (Large, 9\")", price: 220 },
      { id: 33, name: "Veg Overload Pizza (Large, 9\")", price: 300 },
      { id: 34, name: "Corn Pizza (Small, 6\")", price: 200 },
      { id: 35, name: "Corn Pizza (Large, 9\")", price: 250 },
      { id: 36, name: "Mushroom Pizza (Large, 9\")", price: 280 },
      { id: 37, name: "Peri Peri Pizza (Small, 6\")", price: 170 },
      { id: 38, name: "Peri Peri Pizza (Medium, 7.5\")", price: 190 },
      { id: 39, name: "Peri Peri Pizza (Large, 9\")", price: 210 },
      { id: 40, name: "Veg Tandoori Pizza (Large, 9\")", price: 250 },
      { id: 41, name: "Tandoori Paneer Pizza (Small, 6\")", price: 200 },
      { id: 42, name: "Tandoori Paneer Pizza (Large, 9\")", price: 250 },
      { id: 43, name: "Cheese Burst Pizza (Small, 6\")", price: 250 },
      { id: 44, name: "Cheese Burst Pizza (Large, 9\")", price: 300 }
    ]
  },
  {
    category: "🍔 Burgers & Fries",
    items: [
      { id: 45, name: "Veg Burger", price: 70 },
      { id: 46, name: "Veg Cheese Burger", price: 90 },
      { id: 47, name: "Paneer Burger", price: 100 },
      { id: 48, name: "Spicy Paneer Burger", price: 110 },
      { id: 49, name: "Peri Peri Burger", price: 120 },
      { id: 50, name: "0125 Cafe Special Burger", price: 150 },
      { id: 51, name: "Salted Fries", price: 80 },
      { id: 52, name: "Masala Fries", price: 90 },
      { id: 53, name: "Peri Peri French Fries", price: 120 },
      { id: 54, name: "Schezwan Fries", price: 140 },
      { id: 55, name: "Cheese French Fries", price: 150 }
    ]
  },
  {
    category: "🍛 Main Course",
    items: [
      { id: 56, name: "Veg Manchurian Gravy", price: 110 },
      { id: 57, name: "Jeera Rice", price: 80 },
      { id: 58, name: "Veg Rice", price: 140 },
      { id: 59, name: "Garlic Rice", price: 90 },
      { id: 60, name: "Dal Khichdi", price: 140 },
      { id: 61, name: "Dal Fry", price: 120 },
      { id: 62, name: "Dal Tadka", price: 130 },
      { id: 63, name: "Steamed Rice", price: 70 },
      { id: 64, name: "Butter Milk", price: 50 },
      { id: 65, name: "Koshimbir", price: 80 },
      { id: 66, name: "Raita", price: 70 },
      { id: 67, name: "Raita with Tadka", price: 90 }
    ]
  },
  {
    category: "🍿 Snacks & Maggi",
    items: [
      { id: 68, name: "Paneer Pakoda (10 Pieces)", price: 170 },
      { id: 69, name: "Masala Twisters", price: 80 },
      { id: 70, name: "Regular Maggi", price: 50 },
      { id: 71, name: "Veg Maggi", price: 60 },
      { id: 72, name: "Corn Maggi", price: 70 },
      { id: 73, name: "Tandoori Maggi", price: 80 },
      { id: 74, name: "Paneer Maggi", price: 90 },
      { id: 75, name: "Paneer Cheese Maggi", price: 100 }
    ]
  },
  {
    category: "☕ Coffee, Shakes & Mocktails",
    items: [
      { id: 76, name: "Cold Coffee", price: 70 },
      { id: 77, name: "Thick Coffee", price: 90 },
      { id: 78, name: "Cold Coffee with Crush", price: 100 },
      { id: 79, name: "Thick Cold Coffee with Crush", price: 110 },
      { id: 80, name: "Chocolate Coffee", price: 80 },
      { id: 81, name: "Cold Coffee with Ice Cream", price: 100 },
      { id: 82, name: "Chocolate Shake", price: 90 },
      { id: 83, name: "Oreo Shake", price: 120 },
      { id: 84, name: "Kit Kat Shake", price: 120 },
      { id: 85, name: "Brownie Shake", price: 140 },
      { id: 86, name: "Strawberry Shake", price: 150 },
      { id: 87, name: "Mango Shake", price: 140 },
      { id: 88, name: "Pineapple Shake", price: 130 },
      { id: 89, name: "Anjeer Shake", price: 150 },
      { id: 90, name: "Sitaphal Shake", price: 150 },
      { id: 91, name: "Virgin Mojito", price: 100 },
      { id: 92, name: "Blue Curacao Mojito", price: 120 },
      { id: 93, name: "Mango Mojito", price: 120 },
      { id: 94, name: "Green Apple Mojito", price: 120 }
    ]
  },
  {
    category: "🍲 Soups",
    items: [
      { id: 95, name: "Sweet Corn Soup", price: 85 },
      { id: 96, name: "Tomato Soup", price: 85 },
      { id: 97, name: "Veg Clear Soup", price: 85 },
      { id: 98, name: "Veg Manchow Soup", price: 90 }
    ]
  }
];

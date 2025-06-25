const productsData = [
  {
    id: 1,
    name: "Stylish Ivory Bear Sweater",
    category: "sweaters and cardigans",
    brand: "Luma Trend",
    description: "Stay cozy and stylish in this Stylish Ivory Bear Sweater from Luma Trend.",
    sizes: ["S", "M", "L", "XL"],
    price: 50,
    image: require("../assets/productsImgs/bear-sweater.jpg")
  },
  {
    id: 2,
    name: "Elegant women's Floral Dress",
    category: "dresses",
    brand: "Golden Bloom",
    description: "Embrace elegance with this Elegant Women's Floral Dress from Golden Bloom.",
    sizes: ["XS", "S", "M", "L"],
    price: 45,
    image: require("../assets/productsImgs/black-dress.jpg")
  },
  {
    id: 3,
    name: "Cool Heart T-shirt",
    category: "t-shirts and tops",
    brand: "Bright Weave",
    description: "Add a cool touch to your wardrobe with this Cool Heart T-shirt from Bright Weave.",
    sizes: ["M", "L", "XL"],
    price: 25,
    image: require("../assets/productsImgs/heart-tshirt.jpg")
  },
  {
    id: 4,
    name: "Stylish Hatsune Miku Sweater",
    category: "sweaters and cardigans",
    brand: "Luma Trend",
    description: "Stay warm and stylish in this Stylish Hatsune Miku Sweater from Luma Trend.",
    sizes: ["S", "M", "L"],
    price: 60,
    image: require("../assets/productsImgs/miku-sweater.jpg")
  },
  {
    id: 5,
    name: "Durable Woman's Cute White Pants",
    category: "pants",
    brand: "Golden Bloom",
    description: "Achieve durability and functionality with these Durable Woman's Cute White Pants from Golden Bloom.",
    sizes: ["XS", "M", "L"],
    price: 55,
    image: require("../assets/productsImgs/cute-white-pants.jpg")
  },
  {
    id: 6,
    name: "Comfortable women's Brown Wide Pants",
    category: "pants",
    brand: "Bright Weave",
    description: "Stay stretchy and comfortable in these Comfortable Women's Brown Wide Pants from Bright Weave.",
    sizes: ["S", "M", "L"],
    price: 45,
    image: require("../assets/productsImgs/brown-pants.jpg")
  },
  {
    id: 7,
    name: "Durable women's Outdoor Jacket",
    category: "outerwear",
    brand: "Luma Trend",
    description: "Stay durable and weatherproof in this Durable Women's Outdoor Jacket from Luma Trend.",
    sizes: ["S", "M", "L", "XL"],
    price: 110,
    image: require("../assets/productsImgs/turquoise-outer.jpg")
  },
  {
    id: 8,
    name: "Bohemian Style White Dress",
    category: "dresses",
    brand: "Golden Bloom",
    description: "Embrace bohemian style with this Bohemian Style White Dress from Golden Bloom.",
    sizes: ["XS", "S", "M", "L"],
    price: 65,
    image: require("../assets/productsImgs/white-cute-dress.jpg")
  },
  {
    id: 9,
    name: "Trendy Milk Cat T-shirt",
    category: "t-shirts and tops",
    brand: "Bright Weave",
    description: "Stay trendy with this Trendy Milk Cat T-shirt from Bright Weave.",
    sizes: ["XS", "M", "L", "XL"],
    price: 30,
    image: require("../assets/productsImgs/milkcat-tshirt.jpg")
  },
  {
    id: 10,
    name: "Stylish Checkered Dress",
    category: "dresses",
    brand: "Luma Trend",
    description: "Stay stylish and comfortable in this Stylish Checkered Dress from Luma Trend.",
    sizes: ["S", "M", "L"],
    price: 40,
    image: require("../assets/productsImgs/checkered-dress.jpg")
  },
  {
    id: 11,
    name: "Classic women's Black Pants",
    category: "pants",
    brand: "Golden Bloom",
    description: "Stay classic with these Classic Women's Black Pants from Golden Bloom.",
    sizes: ["30", "32", "34", "36"],
    price: 60,
    image: require("../assets/productsImgs/black-pants.jpg")
  },
  {
    id: 12,
    name: "Stylish Leather Jacket",
    category: "outerwear",
    brand: "Bright Weave",
    description: "Stay stylish in this Stylish Leather Jacket from Bright Weave.",
    sizes: ["S", "M", "L"],
    price: 150,
    image: require("../assets/productsImgs/leon-outer.jpg")
  },
  {
    id: 13,
    name: "Classic Cherry T-Shirt",
    category: "t-shirts and tops",
    brand: "Luma Trend",
    description: "Stay classic with this Classic Cherry T-shirt from Luma Trend.",
    sizes: ["M", "L", "XL"],
    price: 50,
    image: require("../assets/productsImgs/cherry-tshirt.jpg")
  },
  {
    id: 14,
    name: "Colorful women's T-Shirt",
    category: "t-shirts and tops",
    brand: "Golden Bloom",
    description: "Add colors to your wardrobe with this Colorful Women's T-shirt from Golden Bloom.",
    sizes: ["XS", "L", "XL"],
    price: 50,
    image: require("../assets/productsImgs/color-tshirt.jpg")
  },
  {
    id: 15,
    name: "Classic women's White Coat",
    category: "outerwear",
    brand: "Bright Weave",
    description: "Stay classic in this Classic Women's White Coat from Bright Weave.",
    sizes: ["S", "M", "L", "XL"],
    price: 165,
    image: require("../assets/productsImgs/short-white-outer.jpg")
  },
  {
    id: 16,
    name: "Anime Short Top",
    category: "t-shirts and tops",
    brand: "Luma Trend",
    description: "Stay classic with this Anime Short Top from Luma Trend.",
    sizes: ["S", "L", "XL"],
    price: 40,
    image: require("../assets/productsImgs/anime-top.jpg")
  },
  {
    id: 17,
    name: "Warm women's Crewneck Sweater",
    category: "sweaters and cardigans",
    brand: "Golden Bloom",
    description: "Stay warm in this Warm Women's Crewneck Sweater from Golden Bloom.",
    sizes: ["M", "L", "XL"],
    price: 65,
    image: require("../assets/productsImgs/lovesugary-sweater.jpg")
  },
  {
    id: 18,
    name: "Trendy Pink Dress",
    category: "dresses",
    brand: "Bright Weave",
    description: "Stay trendy with this Trendy Pink Dress from Bright Weave.",
    sizes: ["XS", "S", "M", "L"],
    price: 85,
    image: require("../assets/productsImgs/pink-dress.jpg")
  },
  {
    id: 19,
    name: "Lightweight Blue-White Outerwear",
    category: "outerwear",
    brand: "Luma Trend",
    description: "Stay lightweight and warm in this Lightweight Blue-White Outerwear from Luma Trend.",
    sizes: ["S", "M", "L"],
    price: 70,
    image: require("../assets/productsImgs/blue-outerwear.jpg")
  },
  {
    id: 20,
    name: "Classic women's Pink Pants",
    category: "pants",
    brand: "Golden Bloom",
    description: "Stay classic with these Classic Women's Pink Pants from Golden Bloom.",
    sizes: ["M", "L", "XL"],
    price: 85,
    image: require("../assets/productsImgs/pink-wide-pants.jpg")
  },
  {
    id: 21,
    name: "Classic women's White Sportswear",
    category: "sportswear",
    brand: "Bright Weave",
    description: "Stay classic with this Classic Women's White Sportswear from Bright Weave.",
    sizes: ["S", "M"],
    price: 50,
    image: require("../assets/productsImgs/white-sport-costume.jpg")
  },
  {
    id: 22,
    name: "Classic Gray Sportswear",
    category: "sportswear",
    brand: "Luma Trend",
    description: "Stay classic with this Classic Gray Sportswear from Luma Trend.",
    sizes: ["S", "M", "XL"],
    price: 55,
    image: require("../assets/productsImgs/gray-sportswear.jpg")
  },
  {
    id: 23,
    name: "Classic women's Blue Sportswear",
    category: "sportswear",
    brand: "Golden Bloom",
    description: "Stay classic with this Classic Women's Blue Sportswear from Golden Bloom.",
    sizes: ["S", "M", "L"],
    price: 85,
    image: require("../assets/productsImgs/blue-sportwear.jpg")
  },
  {
    id: 24,
    name: "Classic Louis Vuitton Sportswear",
    category: "sportswear",
    brand: "Bright Weave",
    description: "Stay classic with this Classic Louis Vuitton Sportswear from Bright Weave.",
    sizes: ["XS", "M", "XL"],
    price: 40,
    image: require("../assets/productsImgs/louis-sportwear.jpg")
  },
  {
    id: 25,
    name: "Anime Boys T-shirt",
    category: "t-shirts and tops",
    brand: "Lacoste",
    description: "Stay stylish with this Anime Boys T-shirt from Lacoste.",
    sizes: ["XS", "M"],
    price: 35,
    image: require("../assets/productsImgs/animeboyz-tshirt.jpg")
  },
  {
    id: 26,
    name: "Blue Cherry T-shirt",
    category: "t-shirts and tops",
    brand: "Bright Weave",
    description: "Stay stylish with this Blue Cherry T-shirt from Bright Weave.",
    sizes: ["M", "L", "XL"],
    price: 30,
    image: require("../assets/productsImgs/blue-cherry-tshirt.jpg")
  },
  {
    id: 27,
    name: "Cool women's T-shirt",
    category: "t-shirts and tops",
    brand: "Luma Trend",
    description: "Stay comfortable and cool in this Cool Women's T-shirt from Luma Trend.",
    sizes: ["S", "L", "XL"],
    price: 20,
    image: require("../assets/productsImgs/cool-white-tshirt.jpg")
  },
  {
    id: 28,
    name: "Gojo T-shirt",
    category: "t-shirts and tops",
    brand: "Golden Bloom",
    description: "Embrace your style with the Gojo T-shirt from Golden Bloom.",
    sizes: ["XS", "S", "L", "XL"],
    price: 25,
    image: require("../assets/productsImgs/gojo-tshirt.jpg")
  },
  {
    id: 29,
    name: "Cute brown dress",
    category: "dresses",
    brand: "Golden Bloom",
    description: "Look elegant in the Cute Brown Dress from Golden Bloom.",
    sizes: ["XS", "S", "L"],
    price: 45,
    image: require("../assets/productsImgs/brown-dress.jpg")
  },
  {
    id: 30,
    name: "Soft blue-bear sweater",
    category: "sweaters and cardigans",
    brand: "Golden Bloom",
    description: "Stay cozy and stylish in the Soft Blue-Bear Sweater from Golden Bloom.",
    sizes: ["XS", "S", "L"],
    price: 95,
    image: require("../assets/productsImgs/bluebear-sweater.jpg")
  },
  {
    id: 31,
    name: "Blue outer",
    category: "outerwear",
    brand: "Golden Bloom",
    description: "Keep warm in the Blue Outer from Golden Bloom.",
    sizes: ["XS", "M", "L"],
    price: 115,
    image: require("../assets/productsImgs/blue-outer.jpg")
  },
  {
    id: 32,
    name: "Blue California hoodie",
    category: "sweaters and cardigans",
    brand: "Golden Bloom",
    description: "Add a relaxed vibe to your wardrobe with the Blue California Hoodie from Golden Bloom.",
    sizes: ["XS", "S", "XL"],
    price: 120,
    image: require("../assets/productsImgs/blue-california-anime-hoodie.jpg")
  },
  {
    id: 33,
    name: "Cute brown bear t-shirt",
    category: "t-shirts and tops",
    brand: "Golden Bloom",
    description: "Stay cute and cozy with the Cute Brown Bear T-shirt from Golden Bloom.",
    sizes: ["XS", "M", "XL"],
    price: 40,
    image: require("../assets/productsImgs/brown-bear-tshirt.jpg")
  },
  {
    id: 34,
    name: "Soft chanyoou coat",
    category: "sweaters and cardigans",
    brand: "Golden Bloom",
    description: "Wrap yourself in comfort with the Soft Chanyoou Coat from Golden Bloom.",
    sizes: ["XS", "S", "L"],
    price: 100,
    image: require("../assets/productsImgs/chanyoou-coat.jpg")
  },
  {
    id: 35,
    name: "Blue hunger t-shirt",
    category: "t-shirts and tops",
    brand: "Golden Bloom",
    description: "Stay trendy in the Blue Hunger T-shirt from Golden Bloom.",
    sizes: ["S", "M", "L"],
    price: 45,
    image: require("../assets/productsImgs/hunger-tshirt.jpg")
  },
  {
    id: 36,
    name: "Beige kensfeet t-shirt",
    category: "t-shirts and tops",
    brand: "Golden Bloom",
    description: "Stay stylish in the Beige Kensfeet T-shirt from Golden Bloom.",
    sizes: ["XS", "S", "L"],
    price: 30,
    image: require("../assets/productsImgs/kensfeet-tshirt.jpg")
  },
  {
    id: 37,
    name: "Cute pink peach cardigan",
    category: "sweaters and cardigans",
    brand: "Golden Bloom",
    description: "Stay cozy and cute with the Cute Pink Peach Cardigan from Golden Bloom.",
    sizes: ["XS", "M", "L"],
    price: 65,
    image: require("../assets/productsImgs/peach-cardigan.jpg")
  },
  {
    id: 38,
    name: "Pink cardigan",
    category: "sweaters and cardigans",
    brand: "Golden Bloom",
    description: "Add a pop of color to your wardrobe with the Pink Cardigan from Golden Bloom.",
    sizes: ["XS", "S", "M"],
    price: 50,
    image: require("../assets/productsImgs/pink-cardigan.jpg")
  },
  {
    id: 39,
    name: "White-pink outer",
    category: "outerwear",
    brand: "Golden Bloom",
    description: "Stay stylish in the White-Pink Outer from Golden Bloom.",
    sizes: ["XS", "S", "XL"],
    price: 105,
    image: require("../assets/productsImgs/white-pink-outer.jpg")
  }
];

export default productsData;

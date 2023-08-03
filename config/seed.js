require('dotenv').config()
require('./database')

const Category = require('../models/category')
const Product = require('../models/products')

(async function () {
  await Category.deleteMany({})
  const categories = await Category.create([
    {
      "name": "Speciality Drinks",
      "sortNumber": 10
    },
    {
      "name": "Tea",
      "sortNumber": 20
    },
    {
      "name": "Coffee",
      "sortNumber": 30
    },
    {
      "name": "Caffeine Free",
      "sortNumber": 40
    },
    {
      "name": "Seasonal Drinks",
      "sortNumber": 50
    },
    {
      "name": "Merch",
      "sortNumber": 60
    }
  ])

  await Product.deleteMany({})
  const products = await Product.create([
    {
      "id": 1,
      "name": "Brown Sugar Milk Tea",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Milk", "Caffine Free", "Tea", "Brown Sugar"],
      "price": 8.00,
      "img": "images/brown_sugar_milk_tea.jpeg",
      "params": "brown_sugar_milk_tea",
      "description": "Brown Sugar Milk Tea is a divine fusion of smooth, creamy milk, robust black tea, and a generous serving of caramel-like brown sugar syrup. This indulgent beverage tantalizes the palate with its harmonious blend of flavors, creating a rich and velvety drink that is both comforting and satisfying. With the addition of chewy tapioca pearls, each sip becomes a delightful experience, as the pearls release bursts of sweetness that perfectly complement the depth of the black tea and the lusciousness of the milk. Prepare to be transported to a realm of pure bliss with every sip of this enchanting Brown Sugar Milk Tea."
    },
    {
      "id": 2,
      "name": "Taro Milk Tea",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Milk", "Caffine Free", "Tea", "Taro"],
      "price": 8.00,
      "img": "images/taro-milk-bubble-tea.jpeg", 
      "params": "taro_milk_tea",
      "description": "Taro Milk Tea is a captivating blend of earthy and subtly sweet flavors that captivate the senses and leave you craving for more. This unique beverage combines the essence of taro, a starchy root vegetable, with creamy milk and fragrant black tea. The velvety smoothness of the milk perfectly balances the distinct nuttiness of taro, creating a comforting and indulgent experience. With its vibrant purple hue and delicate aroma, every sip of Taro Milk Tea transports you to a realm of pure delight, where the fusion of flavors dances on your palate, leaving you with a lingering sense of satisfaction and a desire to savor each sip."
    },
    {
      "id": 3,
      "name": "Iced Matcha Latte",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Milk", "Caffine Free", "Matcha"],
      "price": 8.00,
      "img": "placeholder", 
      "params": "iced_matcha_latte",
      "description": "Iced Matcha Latte is a refreshing and invigorating beverage that seamlessly blends the vibrant essence of matcha with the smoothness of milk and the chill of ice. Made from finely ground green tea leaves, matcha brings forth a distinctive and rich flavor profile, characterized by its grassy undertones and subtle sweetness. As the velvety matcha powder is whisked into a creamy blend of milk, the result is a harmonious marriage of flavors, where the creamy texture of the latte complements the earthy notes of the matcha. Served over ice, this cool and revitalizing drink awakens the senses, providing a moment of tranquility and indulgence in each sip. Whether you're seeking a pick-me-up or a moment of relaxation, the Iced Matcha Latte is a delightful companion that offers both refreshment and a taste of zen."
    },
    {
      "id": 4,
      "name": "Creme Brulee Milk Tea",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Milk", "Caffine Free", "Tea"],
      "price": 8.00,
      "img": "placeholder", 
      "params": "creme_brulee_milk_tea",
      "description": "Creme Brulee Milk Tea is an exquisite blend of creamy indulgence and delicate sweetness that transports your taste buds to a realm of pure decadence. This luxurious beverage combines the velvety smoothness of milk with the rich and caramelized flavors reminiscent of a classic creme brulee dessert. With each sip, you are enveloped in the comforting embrace of creamy milk, perfectly balanced by hints of burnt sugar and vanilla. The fusion of flavors creates a harmonious symphony that delights the palate and leaves a lingering essence of culinary sophistication. Whether enjoyed hot or over ice, Creme Brulee Milk Tea offers an unforgettable experience that satisfies cravings and provides a moment of pure indulgence."
    },
    {
      "id": 5,
      "name": "Fruit Tea",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Fruit", "Tea"],
      "price": 8.00,
      "img": "placeholder", 
      "params": "fruit_tea",
      "description": "Fruit Tea is a vibrant and refreshing elixir that celebrates the natural essence of ripe and succulent fruits. Bursting with fruity goodness, this delightful beverage infuses a medley of fresh fruits, such as berries, citrus, and tropical delights, into a fragrant and invigorating tea base. Each sip offers a symphony of flavors, balancing the natural sweetness of the fruits with the subtle nuances of the tea. With its vibrant colors and enticing aromas, Fruit Tea not only quenches your thirst but also invigorates your senses, offering a revitalizing experience that is both delicious and invigorating. Whether enjoyed on a hot summer day or as a revitalizing pick-me-up, Fruit Tea is a refreshing escape into the world of fruity bliss."
    },
    {
      "id": 6,
      "name": "Strawberry Milk Tea",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Milk", "Fruit"],
      "price": 8.00,
      "img": "placeholder", 
      "params": "strawberry_milk_tea",
      "description": "Strawberry Milk Tea is a delightful and whimsical blend that combines the creamy indulgence of milk with the sweet and tangy essence of ripe strawberries. This enchanting beverage envelops your senses with its rosy hue and irresistible aroma, invoking a sense of pure joy. The luscious milk intertwines harmoniously with the bright strawberry flavors, creating a velvety and refreshing drink that is both comforting and invigorating. Each sip reveals a burst of fruity sweetness, perfectly complemented by the creamy undertones, leaving a lingering taste of summer bliss. Whether you're seeking a moment of nostalgia or a sweet treat to uplift your spirits, Strawberry Milk Tea is a delightful companion that offers a sip of happiness in every glass."
    },
    {
      "id": 7,
      "name": "Mango Sago",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Sago", "Caffine Free", "Fruit"],
      "price": 8.00,
      "img": "placeholder", 
      "params": "mango_sago",
      "description": "Mango Sago is a tropical delight that captures the essence of sunshine and luscious mangoes in every spoonful. This mouthwatering dessert features juicy, ripe mangoes, diced into delightful bite-sized pieces, suspended in a velvety concoction of sweetened coconut milk and mango puree. The addition of tiny, translucent sago pearls adds a delightful textural contrast, giving each spoonful a playful chewiness. With its vibrant color, refreshing flavors, and tropical aroma, Mango Sago transports you to a paradise of tropical bliss, offering a delightful escape from the ordinary. Indulge in the sweet and tangy symphony of flavors as you revel in the tropical indulgence that is Mango Sago."
    },
    {
      "id": 8,
      "name": "Strawberry Mango Sago",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Sago", "Caffine Free", "Fruit"],
      "price": 8.00,
      "img": "placeholder", 
      "params": "strawberry_mango_sago",
      "description": "Strawberry Mango Sago is a heavenly fusion of two luscious fruits that creates a dessert worthy of admiration. This delightful concoction combines the sweet, juicy essence of mangoes with the vibrant, tart flavors of strawberries. The succulent mangoes and ripe strawberries are beautifully diced and immersed in a creamy coconut milk base, which is further enhanced by the addition of delicate sago pearls. Each spoonful offers a tantalizing burst of fruity sweetness, with the interplay of mangoes and strawberries creating a harmonious symphony of flavors. With its vibrant colors, refreshing taste, and delightful textures, Strawberry Mango Sago takes you on a delightful journey to a tropical paradise, leaving you craving for another spoonful of pure fruity bliss."
    },
    {
      "id": 9,
      "name": "Iced Coffee",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Coffee"],
      "price": 8.00,
      "img": "images/iced_coffee.png", 
      "params": "iced_coffee",
      "description": "Iced Coffee is a cool and invigorating beverage that celebrates the bold and robust flavors of coffee. This refreshing concoction begins with a smooth and full-bodied brewed coffee that is expertly chilled over ice. With each sip, the rich coffee flavors dance on your palate, awakening your senses and providing a burst of energy. The combination of the deep, earthy notes of the coffee and the icy chill creates a refreshing and revitalizing experience, making Iced Coffee the perfect companion for those seeking a cool caffeinated pick-me-up on a warm day."
    },
    {
      "id": 10,
      "name": "Iced Latte",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Coffee"],
      "price": 8.00,
      "img": "images/Iced-Vanilla-Latte.jpeg", 
      "params": "iced_latte",
      "description": "Iced Latte is a sophisticated and indulgent beverage that combines the smoothness of milk with the velvety richness of espresso. This elegant creation begins with a double shot of espresso, expertly extracted to perfection, poured over a generous amount of ice. As the espresso melds with the creamy milk, a harmonious balance of flavors emerges, creating a creamy and luxurious drink. The bold espresso provides a robust foundation, while the milk adds a silky smoothness, resulting in a refreshing and satisfying sip. Iced Latte is a delightful treat for coffee enthusiasts seeking a chilled and decadent coffee experience that is as pleasing to the eye as it is to the taste buds."
    },
    {
      "id": 11,
      "name": "Vietnamese Iced Coffee",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Coffee"],
      "price": 8.00,
      "img": "placeholder", 
      "params": "vietnamese_iced_coffee",
      "description": "Vietnamese Iced Coffee is an enchanting blend that captures the essence of Vietnam's coffee culture. This indulgent beverage starts with a strong, dark roast Vietnamese coffee, traditionally brewed using a stainless steel filter called a \"phin.\" As the hot coffee slowly drips into a glass filled with sweetened condensed milk, a mesmerizing combination is born. The result is a rich, velvety brew that beautifully balances the boldness of the coffee with the creamy sweetness of the condensed milk. Served over a tall glass of ice, Vietnamese Iced Coffee offers a refreshing and invigorating experience, allowing you to savor the harmonious interplay of flavors as you drift into a state of pure coffee bliss."
    },
    {
      "id": 12,
      "name": "Thai Iced Tea",
      "type": {
        "name": "Drinks"
      },
      "tags": ["Milk", "Tea"],
      "price": 8.00,
      "img": "placeholder",
      "params": "thai_iced_tea", 
      "description": "Thai Iced Tea is a captivating and vibrant concoction that epitomizes the flavors of Thailand. This delightful beverage is made by brewing strong black tea infused with aromatic spices, such as star anise and cardamom, which infuse it with a unique and alluring flavor. The brewed tea is then sweetened with condensed milk and generously poured over a glass filled with ice, creating a striking orange hue. Each sip reveals a delicate balance of the robust black tea, the creamy sweetness of the condensed milk, and the tantalizing notes of the spices. Thai Iced Tea is a refreshing and exotic drink that offers a harmonious fusion of flavors, providing a tantalizing taste of Thailand's vibrant culinary traditions."
    },
    {
      "id": 13,
      "name": "Stickers",
      "type": {
        "name": "Other"
      },
      "tags": ["Merch"],
      "price": 5.00,
      "img": "placeholder", 
      "params": "stickers",
      "description": ""
    }
  ])
  process.exit()
}) 
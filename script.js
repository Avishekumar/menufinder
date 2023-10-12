document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const productList = document.getElementById("productList");
  const shopNameBox = document.getElementById("shopNameBox");
  const selectedShopName = document.getElementById("selectedShopName");
  const shopContact = document.getElementById("shopContact");
  const shopAddress = document.getElementById("shopAddress");
  const shopSuggestions = document.getElementById("shopSuggestions");

  // Sample shop names for demonstration
  const sampleShopNames = [
    "Kathmandu Steak House Restaurant",
    "Bisranti Restaurant And Bar",
    "Vishranti Sweets",
    "Dailo Daily See Us",
    "Mulchowk Restaurant",
    "Cosmo Restaurant And Bar",
    "Da Aloo",
    "Manoj Food",
  ];

  // Sample shop data
  const shopData = [
    {
      name: "X Food",
      contact: "777-888-9999",
      address: "321 Cedar St, City",
      categories: [
        {
          name: "Lunch",
          products: [{ name: "Rice", price: 50 }],
        },
      ],
    },
    {
      name: "Da Aloo",
      contact: "977-9847375984",
      address: "Lalitpur, Nepal",
      categories: [
        {
          name: "Aloo Fries",
          products: [
            { name: "ALOO FRIES MEDIUM", price: 70 },
            { name: "ALOO FRIES LARGE", price: 130 },
          ],
        },
        {
          name: "Loaded Fries",
          products: [
            { name: "CHILLI FRIES", price: 160 },
            { name: "CHEESY FRIES", price: 160 },
            { name: "SPICY BUFF SAUSAGE FRIES", price: 160 },
            { name: "CHICKEN MAKHANI FRIES", price: 180 },
            { name: "SMOKEY PORK RANCH FRIES", price: 180 },
            { name: "Add Egg For Rs.30", price: 30 },
          ],
        },
        {
          name: "Da Aloo Special",
          products: [
            { name: "BATTERED FRIES", price: 160 },
            { name: "SWEET POTATO FRIES", price: 160 },
          ],
        },
        {
          name: "Spiral",
          products: [
            { name: "SALOO'S SPIRAL", price: 60 },
            { name: "CHEESY SPIRAL", price: 70 },
            { name: "BATTERED SPIRAL", price: 70 },
            { name: "GREEN CHUTNEY SPIRAL", price: 70 },
          ],
        },
        {
          name: "Cold Drinks",
          products: [
            { name: "COKE/FANTA/SPRITE", price: 70 },
            { name: "COLD COFFEE", price: 100 },
            { name: "ICE MINT LEMONADE", price: 140 },
            { name: "GREEN APPLE MOJITO", price: 150 },
            { name: "BLUE LAGOON", price: 160 },
            { name: "PEACH ICE TEA", price: 160 },
            { name: "STRAWBERRY LEMONADE", price: 160 },
            { name: "POMEGRANATE LEMONADE", price: 160 },
            { name: "SPECIAL LASSI", price: 160 },
            { name: "JUICE (SEASONAL FRUITS)", price: 100 },
          ],
        },
        {
          name: "Hot Drinks",
          products: [
            { name: "MASALA BLACK TEA", price: 30 },
            { name: "MASALA MILK TEA", price: 50 },
            { name: "LEMON TEA", price: 30 },
            { name: "SUJA (BUTTER MILK TEA)", price: 50 },
            { name: "HOT LEMON (GINGER HONEY)", price: 70 },
            { name: "AMERICANO (HOME MADE)", price: 80 },
            { name: "CAPPUCCINO (HOME MADE)", price: 100 },
            { name: "HOT CHOCOLATE", price: 100 },
          ],
        },
        {
          name: "Katti Roll",
          products: [
            { name: "ALOO CHAT KATTI ROLL", price: 120 },
            { name: "SPICY BUFF SAUSAGE KATTI ROLL", price: 160 },
            { name: "PANEER KATTI ROLL", price: 160 },
            { name: "TANDURI CHICKEN KATTI ROLLL", price: 180 },
            { name: "SMOKEY PORK KATTI ROLL", price: 180 },
            { name: "Add Egg For Rs.30", price: 30 },
          ],
        },
        {
          name: "Mo:Mo",
          products: [
            { name: "ALOO MO:MO (Steam)", price: 100 },
            { name: "ALOO MO:MO (Kothey)", price: 120 },
            { name: "ALOO MO:MO (Fried)", price: 130 },
            { name: "ALOO MO:MO (Jhot)", price: 140 },
            { name: "ALOO MO:MO (Chilli)", price: 150 },
            { name: "PANEER MO:MO (Steam)", price: 130 },
            { name: "PANEER MO:MO (Kothey)", price: 140 },
            { name: "PANEER MO:MO (Fried)", price: 150 },
            { name: "PANEER MO:MO (Jhot)", price: 150 },
            { name: "PANEER MO:MO (Chilli)", price: 180 },
            { name: "BUFF MO:MO (Steam)", price: 130 },
            { name: "BUFF MO:MO (Kothey)", price: 140 },
            { name: "BUFF MO:MO (Fried)", price: 150 },
            { name: "BUFF MO:MO (Jhot)", price: 160 },
            { name: "BUFF MO:MO (Chilli)", price: 180 },
            { name: "CHICKEN MO:MO (Steam)", price: 150 },
            { name: "CHICKEN MO:MO (Kothey)", price: 160 },
            { name: "CHICKEN MO:MO (Fried)", price: 170 },
            { name: "CHICKEN MO:MO (Jhot)", price: 180 },
            { name: "CHICKEN MO:MO (Chilli)", price: 190 },
            { name: "Add Cheese for Rs. 20", price: 20 },
          ],
        },
        {
          name: "Burger (with Fries)",
          products: [
            { name: "ALOO TIKKI BURGER", price: 160 },
            { name: "CHICKEN BURGER", price: 220 },
            { name: "SPICY BUFF BURGER", price: 210 },
            { name: "Add Cheese for Rs. 50", price: 50 },
          ],
        },
        {
          name: "Hot Dog",
          products: [
            { name: "CHICKEN HOT DOG", price: 190 },
            { name: "BUFF HOT DOG", price: 180 },
          ],
        },
        {
          name: "Fried Rice",
          products: [
            { name: "VEG FRIED RICE", price: 120 },
            { name: "EGG FRIED RICE", price: 140 },
            { name: "CHICKEN FIRED RICE", price: 180 },
            { name: "BUFF FRIED RICE", price: 160 },
            { name: "MIXED FRIED RICE", price: 200 },
          ],
        },
        {
          name: "Chowmein",
          products: [
            { name: "VEG CHOWMEIN", price: 110 },
            { name: "EGG CHOWMEIN", price: 130 },
            { name: "CHICKEN CHOWMEIN", price: 170 },
            { name: "BUFF CHOWMEIN", price: 150 },
            { name: "MIX CHOWMEIN", price: 190 },
          ],
        },
        {
          name: "Snacks",
          products: [
            { name: "CHICKEN CHILLI", price: 250 },
            { name: "BUFF CHILLI", price: 240 },
            { name: "PANEER CHILLI", price: 240 },
            { name: "CHICKEN SAUSAGE CHILLI", price: 190 },
            { name: "BUFF SAUSAGE CHILLI", price: 180 },
            { name: "SAUSAGE (BUFF)", price: 50 },
            { name: "SAUSAGE (Chicken)", price: 60 },
            { name: "CHICKEN NUGGETS", price: 250 },
          ],
        },
        {
          name: "Chicken Wings",
          products: [
            { name: "BUFFALO HOT WINGS (3pcs)", price: 300 },
            { name: "CHEESY GARLIC WINGS (3pcs)", price: 350 },
            { name: "SMOKEY RANCH WINGS (3pcs)", price: 350 },
          ],
        },
        {
          name: "Rice & Roti Meal",
          products: [
            {
              name: "BUTTER CHICKEN CURRY (Served with 4 pcs of Roti or Full Serving of Jeera Rice)",
              price: 210,
            },
            {
              name: "TANDOORI CHICKEN CURRY (Served with 4 pcs of Roti or Full Serving of Jeera Rice)",
              price: 200,
            },
            {
              name: "MASALA PANEER CURRY (Served with 4 pcs of Roti or Full Serving of Jeera Rice)",
              price: 200,
            },
            {
              name: "ALOO CURRY (Served with 4 pcs of Roti or Full Serving of Jeera Rice)",
              price: 160,
            },
          ],
        },
      ],
    },
    {
      name: "Cosmo Restaurant And Bar",
      contact: "977-9865452954",
      address: "Rudramati Marg, Kathmandu (Nepal)",
      categories: [
        {
          name: "Matka Biryani",
          products: [
            { name: "Mutton Biryani (Small)", price: 600 },
            { name: "Mutton Biryani (Large)", price: 1200 },
            { name: "Chicken Biryani (Small)", price: 400 },
            { name: "Chicken Biryani (Large)", price: 750 },
            { name: "Paneer and Veg. Biryani (Small)", price: 400 },
            { name: "Paneer and Veg. Biryani (Large)", price: 750 },
          ],
        },
        {
          name: "Katiya and Curry",
          products: [
            { name: "Mutton Katiya (Small)", price: 600 },
            { name: "Mutton Katiya (Large)", price: 1200 },
            { name: "Chicken Katiya (Small)", price: 400 },
            { name: "Chicken Katiya (Large)", price: 700 },
            { name: "Chicken Curry", price: 300 },
            { name: "Mutton Curry", price: 500 },
            { name: "Plain Rice", price: 100 },
            { name: "Jeera Rice", price: 130 },
            { name: "Biryani Rice", price: 130 },
            { name: "Lachha Paratha (Per Piece)", price: 50 },
          ],
        },
        {
          name: "Dessert",
          products: [
            { name: "Mixed Icecream", price: 200 },
            { name: "Hot Gulab Jamun", price: 150 },
            { name: "Banana Split", price: 200 },
            { name: "Cheese Cake", price: 150 },
          ],
        },
        {
          name: "Burger And Sandwich",
          products: [
            { name: "Fried Chicken Burger", price: 300 },
            { name: "Pulled Chicken Burger With Buttermilk Slaw", price: 300 },
            { name: "Pulled Pork Burger (Cosmo Signature)", price: 350 },
            { name: "Club Sandwich", price: 300 },
            { name: "Chicken Sandwich", price: 200 },
            { name: "Veg. Sandwich", price: 150 },
          ],
        },
        {
          name: "Sizzler",
          products: [
            { name: "Chicken Sizzler With Egg", price: 500 },
            { name: "Veg. Sizzler (Tofu)", price: 380 },
          ],
        },
        {
          name: "Homemade MoMos",
          products: [
            { name: "Chicken Momo (Steamed)", price: 200 },
            { name: "Chicken Momo (Kothey)", price: 250 },
            { name: "Chicken Momo (Jhol)", price: 250 },
            { name: "Chicken Momo (C)", price: 250 },
            { name: "Buff Momo (Steamed)", price: 200 },
            { name: "Buff Momo (Kothey)", price: 250 },
            { name: "Buff Momo (Jhol)", price: 250 },
            { name: "Buff Momo (C)", price: 250 },
            { name: "Paneer Momo (Steamed)", price: 230 },
            { name: "Paneer Momo (Kothey)", price: 280 },
            { name: "Paneer Momo (Jhol)", price: 280 },
            { name: "Paneer Momo (C)", price: 280 },
          ],
        },
        {
          name: "From The Wok",
          products: [
            { name: "Chowmein", price: 150 },
            { name: "Fried Rice", price: 150 },
            { name: "Thukpa", price: 150 },
            { name: "Egg", price: 30 },
          ],
        },
        {
          name: "Salad",
          products: [
            { name: "Chicken Tikka Salad", price: 250 },
            { name: "Mix Green Salad", price: 150 },
          ],
        },
        {
          name: "Veg. Snacks",
          products: [
            { name: "Homemade Fries", price: 150 },
            { name: "Chips Chilli", price: 200 },
            { name: "Sweet Corn", price: 150 },
            { name: "Mustang Aloo", price: 150 },
            { name: "Boiled Veg", price: 150 },
            { name: "Gobi Munchurian", price: 150 },
            { name: "Veg Pakoda", price: 180 },
            { name: "Mushroom Chilli", price: 200 },
            { name: "Paneer Tikka", price: 300 },
            { name: "Paneer Chilly", price: 300 },
            { name: "Peanut Sandheko", price: 150 },
            { name: "Bhatmas Sandheko", price: 150 },
            { name: "WaiWai Sandheko", price: 100 },
          ],
        },
        {
          name: "Khaja Set",
          products: [
            { name: "Chicken Khaja Set", price: 250 },
            { name: "Paneer Khaja Set", price: 250 },
            { name: "Mutton Khaja Set", price: 380 },
          ],
        },
        {
          name: "Soup",
          products: [
            { name: "Manchow (Veg)", price: 180 },
            { name: "Manchow (Chicken)", price: 200 },
            { name: "Hot and Sour (Veg)", price: 180 },
            { name: "Hot and Sour (Chicken)", price: 200 },
            { name: "Mushroom Cream Soup", price: 180 },
            { name: "WaiWai Soup (Egg)", price: 150 },
            { name: "WaiWai Soup (Chicken))", price: 180 },
          ],
        },
        {
          name: "Non Veg. Snacks",
          products: [
            { name: "Chicken Chilly", price: 300 },
            { name: "Sausage Chilli", price: 250 },
            { name: "Buff Chilli", price: 300 },
            { name: "Sausage fry(4pcs)", price: 200 },
            { name: "Chicken Sandheko", price: 300 },
            { name: "Buff Sandheko", price: 300 },
            { name: "Chicken 65", price: 300 },
            { name: "Chicken Schezwan", price: 350 },
            { name: "Dragon Chicken", price: 350 },
            { name: "Chicken Choila", price: 300 },
            { name: "Buff Choila", price: 300 },
            { name: "Buffalo Wings", price: 300 },
            { name: "Chicken Tikka", price: 300 },
          ],
        },
        {
          name: "Sekuwa",
          products: [
            { name: "Mutton Sekuwa", price: 600 },
            { name: "Chicken Sekuwa", price: 350 },
            { name: "Buff Sekuwa", price: 300 },
            { name: "Pork Sekuwa", price: 300 },
          ],
        },
      ],
    },
    {
      name: "Mulchowk Restaurant",
      contact: "977-01-5914672",
      address: "Tanka Prasad Ghumti Sadak, Kathmandu (Nepal)",
      categories: [
        {
          name: "Salad",
          products: [
            { name: "Smoked Salmon Antipasti", price: 750 },
            { name: "Mixed Green Salad", price: 370 },
            { name: "Caesar Salad (Vegetarian)", price: 280 },
            { name: "Caesar Salad (Chicken)", price: 370 },
            { name: "Caesar Salad (Calamari)", price: 410 },
            { name: "Greek Salad", price: 420 },
            { name: "Bruschetta", price: 250 },
            { name: "Nam Tok Kai", price: 410 },
            { name: "Antipasti", price: 470 },
          ],
        },
        {
          name: "Soups",
          products: [
            { name: "Essence Of Tomato", price: 310 },
            { name: "Seafood Chowder", price: 410 },
            { name: "Kernel Corn Coriander Soup", price: 310 },
            { name: "Minestrone Soup", price: 390 },
            { name: "Choice Of Cream Soup (Vegetable)", price: 280 },
            { name: "Choice Of Cream Soup (Mushroom)", price: 350 },
            { name: "Choice Of Cream Soup (Chicken)", price: 350 },
            { name: "Choice Of Cream Soup (Sweetcorn)", price: 410 },
            { name: "French Onion Soup", price: 290 },
            { name: "Hot & Sour Soup(Vegetarian)", price: 280 },
            { name: "Hot & Sour Soup(Non-Vegetarian)", price: 380 },
            { name: "Tom Yam Soup [Vegetable (Pak)]", price: 350 },
            { name: "Tom Yam Soup [Chicken (Kai)]", price: 410 },
            { name: "Tom Yam Soup [Prawn (Kung)]", price: 460 },
          ],
        },
        {
          name: "Main Course (Non-Vegetarian)",
          products: [
            { name: "Slow Cooked Lamb Shank", price: 1550 },
            { name: "Tenderloin Beef Steak (180gms)", price: 750 },
            { name: "Tenderloin Beef Steak (350gms)", price: 1350 },
            { name: "Spinach & Mushroom Stuffed Chicken Breast", price: 610 },
            { name: "Pesto Fish Fillet", price: 520 },
            { name: "Fish Steak", price: 520 },
            { name: "Lamb Chops", price: 1280 },
            { name: "Grilled Salmon Steak", price: 1250 },
            { name: "Himalayan Trout", price: 950 },
            { name: "Fish & Chips", price: 580 },
            { name: "Pork Steak", price: 710 },
            { name: "Pork Chops", price: 710 },
            { name: "Black Pepper Prawn Singapore Style", price: 950 },
            { name: "Rack of Lamb", price: 2250 },
            { name: "Roasted Pork Belly", price: 1250 },
          ],
        },
        {
          name: "Main Course (Vegetarian)",
          products: [
            { name: "Mushroom Walnut Risotto", price: 750 },
            { name: "Cottage Cheese Steak", price: 520 },
            { name: "Spinach Crepes with Tomato Sauce", price: 450 },
            { name: "Assorted Mushroom Stroganoff", price: 500 },
            { name: "Stir Fried Vegetable with Oyster Sauce", price: 450 },
            { name: "Mulchowk Special Fried Rice (Veg)", price: 250 },
            { name: "Mulchowk Special Fried Rice (Chicken)", price: 310 },
            { name: "Mulchowk Special Fried Rice (Mix)", price: 410 },
          ],
        },
        {
          name: "Burgers & Sandwiches",
          products: [
            { name: "Grilled Chicken Burger", price: 620 },
            { name: "Aussie Burger", price: 620 },
            { name: "Mulchowk Veggie Burger", price: 420 },
            { name: "Tuna Sandwich", price: 490 },
            { name: "Steak sandwich with Cheese", price: 530 },
            { name: "Mulchowk Club Sandwich", price: 590 },
          ],
        },
        {
          name: "Pasta",
          products: [
            { name: "Spaghetti Carbonara", price: 590 },
            { name: "Chicken Alfredo Penne Pasta", price: 590 },
            { name: "Spaghetti Bolognaise", price: 750 },
            { name: "Penne Arrabiata", price: 520 },
            { name: "Penne with Mushroom sauce", price: 520 },
            { name: "Seafood Penne with creamy white wine sauce", price: 750 },
          ],
        },
        {
          name: "Snacks (Non-Vegetarian)",
          products: [
            { name: "Spicy Ginger Fish", price: 390 },
            { name: "Fish Louisiana", price: 390 },
            { name: "Garlic Fish Nugget", price: 390 },
            { name: "Chicken Chilly", price: 370 },
            { name: "Chicken Louisiana", price: 390 },
            { name: "Sesame Fried Chicken", price: 370 },
            { name: "Garlic Chicken Nuggets", price: 370 },
            { name: "Roasted Chicken Wings", price: 370 },
            { name: "Chicken Choela", price: 370 },
            { name: "Chicken Meatballs", price: 410 },
            { name: "Chicken MO:MO", price: 310 },
            {
              name: "Bratwurst Chilly (German Pork/Chicken Sausage)",
              price: 310,
            },
            { name: "Boiled Wild Boar", price: 470 },
            { name: "Spicy Ginger Prawn", price: 470 },
            { name: "Prawn Chilly", price: 470 },
            { name: "Breaded Fried Prawn", price: 470 },
            { name: "Prawn Louisiana", price: 490 },
            { name: "Satay (Beef)", price: 410 },
            { name: "Satay (Chicken)", price: 430 },
            { name: "Satay (Prawn)", price: 590 },
          ],
        },
        {
          name: "Snacks (Vegetarian)",
          products: [
            { name: "Potato Cheese Balls", price: 220 },
            { name: "Paneer Finger", price: 310 },
            { name: "Crispy Fried Kernel Corn", price: 290 },
            { name: "French Fries", price: 230 },
            { name: "Piro Aloo", price: 230 },
            { name: "Vegetable MO:MO", price: 250 },
            { name: "Vegetable Tempura", price: 230 },
            { name: "Vegetable Louisiana", price: 230 },
            { name: "Mushroom Choila", price: 230 },
            { name: "Chicken Meatballs", price: 410 },
            { name: "Chicken MO:MO", price: 310 },
            { name: "Stuffed Mushroom With Cheese and Vegetables", price: 350 },
            { name: "Boiled Wild Boar", price: 470 },
            { name: "Vegetable Skewers", price: 410 },
          ],
        },
      ],
    },
    {
      name: "Kathmandu Steak House Restaurant",
      contact: "977-01-4264946",
      address: "Chaksibari Marg, Thamel, Kathmandu (Nepal)",
      categories: [
        {
          name: "Pasta",
          products: [
            { name: "NEPOLITANA (VEGETABLE)", price: 470 },
            { name: "AGLIO OLIO PEPERONCINO (VEGETABLE)", price: 370 },
            { name: "ARRABIATA (VEGETABLE)", price: 480 },
            { name: "CARBONARA", price: 570 },
            { name: "BOLOGNESE", price: 570 },
          ],
        },
        {
          name: "Soups",
          products: [
            { name: "TOMATO AND BASIL SOUP (VEG)", price: 300 },
            { name: "CREAM OF SPINACH (VEG)", price: 320 },
            { name: "CREAM OF MUSHROOM (VEG)", price: 330 },
            { name: "CREAM OF CHICKEN", price: 360 },
          ],
        },
        {
          name: "Salads",
          products: [
            { name: "ORGANIC GREEN SALAD (VEGETABLE)", price: 260 },
            { name: "GRILLED CHICKEN SALAD", price: 350 },
            { name: "MAXICANA SALAD", price: 415 },
            { name: "CAESAR SALAD", price: 580 },
            { name: "TREKKER'S BEEF SALAD", price: 620 },
          ],
        },
        {
          name: "Starters",
          products: [
            { name: "HOUSE FRENCH FRIES (VEGETABLE)", price: 200 },
            { name: "TEX MAX CHICKEN", price: 300 },
            { name: "LA BRUSCHETTA (VEGETABLE)", price: 280 },
            { name: "MUSHROOM CHILLI (VEGETABLE)", price: 370 },
            { name: "CHEESE POPPERS (VEGETABLE)", price: 380 },
            { name: "CHICKEN CHILLI", price: 390 },
            { name: "ONION RINGS (VEGETABLE)", price: 250 },
            { name: "CHIPS CHEESE FRIES (VEGETABLE)", price: 330 },
          ],
        },
        {
          name: "Sandwiches - Burgers",
          products: [
            { name: "Veg Burger", price: 375 },
            { name: "Vegetable Sandwich", price: 375 },
            { name: "Grilled Chicken Sandwich", price: 375 },
            { name: "Chicken Burger", price: 410 },
            { name: "California Beef Burger", price: 440 },
            { name: "Ham Burger", price: 490 },
          ],
        },
        {
          name: "MAIN COURSE",
          products: [
            { name: "Veg. Parmigiana", price: 480 },
            { name: "House Special Veg Steak", price: 450 },
            { name: "Risotto Ai Funghi (Veg)", price: 625 },
            { name: "Grilled Chicken Brest", price: 620 },
            { name: "Salmon Steak", price: 1200 },
            { name: "SPICE-RUBBED PORK", price: 675 },
            { name: "Grilled Pork Chop", price: 860 },
            { name: "Pork Spare Ribs", price: 880 },
          ],
        },
        {
          name: "House Signature Ostrich Steak",
          products: [
            { name: "FILET MIGNON", price: 1300 },
            { name: "NEW YORK STRIP", price: 1295 },
            { name: "FILLET DI MANZO", price: 1295 },
            { name: "TREEKKERS' SPECIAL STEAK", price: 1795 },
            { name: "SIZZLING FLAME STEAK", price: 1700 },
            { name: "KATHMANDU SIGNATURE STEAK", price: 2700 },
          ],
        },
        {
          name: "Desserts",
          products: [
            { name: "Fruit Salad", price: 370 },
            { name: "Chocolate Brownie with ice cream", price: 360 },
            { name: "Apple Crumble", price: 330 },
            { name: "Blueberry Tart", price: 560 },
            { name: "Banana Fritters", price: 250 },
            { name: "Banana Split", price: 275 },
            { name: "Two Scoop of Ice-Cream", price: 175 },
          ],
        },
        {
          name: "NEPALI THALI",
          products: [
            { name: "NEPALI VEG. THALI", price: 525 },
            { name: "NEPALI NON-VEG. THALI", price: 625 },
          ],
        },
      ],
    },
    {
      name: "Bisranti Restaurant And Bar",
      contact: "977-1-4483120",
      address: "Bhimsengola Marg, Kathmandu (Nepal)",
      categories: [
        {
          name: "Momo",
          products: [
            { name: "Chicken Momo", price: 130 },
            { name: "Buff Momo", price: 120 },
            { name: "Veg Momo", price: 100 },
            { name: "Chicken C Momo", price: 150 },
            { name: "Buff C Momo", price: 140 },
            { name: "Veg C Momo", price: 120 },
            { name: "Chicken Jhol Momo", price: 150 },
            { name: "Buff Jhol Momo", price: 140 },
            { name: "Veg Jhol Momo", price: 120 },
            { name: "Chicken Fried Momo", price: 140 },
            { name: "Buff Fried Momo", price: 130 },
            { name: "Veg Fried Momo", price: 120 },
          ],
        },
        {
          name: "Chowmein",
          products: [
            { name: "Chicken Chowmein", price: 120 },
            { name: "Buff Chowmein", price: 110 },
            { name: "Veg Chowmein", price: 90 },
            { name: "Egg Chowmein", price: 110 },
          ],
        },
        {
          name: "Tea",
          products: [
            { name: "Black Tea", price: 20 },
            { name: "Milk Tea", price: 30 },
            { name: "Hot Lemon", price: 30 },
            { name: "Lemon Tea", price: 25 },
          ],
        },
        {
          name: "Coffee",
          products: [
            { name: "Black Coffee", price: 40 },
            { name: "Milk Coffee", price: 60 },
          ],
        },
        {
          name: "Chilly",
          products: [
            { name: "Chicken Chilly Boneless", price: 250 },
            { name: "Buff Chilly", price: 200 },
            { name: "Buff Choila", price: 200 },
            { name: "Buff Sukuti", price: 200 },
            { name: "Chicken Sadeko", price: 250 },
            { name: "Chicken Lollipop 6 pcs", price: 200 },
            { name: "Barbeque Wings", price: 280 },
          ],
        },
        {
          name: "Khana/Khaja Set",
          products: [
            { name: "Veg Khana", price: 200 },
            { name: "Chicken Khana", price: 250 },
            { name: "Matton Khana", price: 300 },
            { name: "Buff Khaja Set", price: 180 },
            { name: "Chicken Khaja", price: 200 },
          ],
        },
      ],
    },
    {
      name: "Vishranti Sweets",
      contact: "977-01-5911000",
      address: "Maitidevi, Kathmandu (Nepal)",
      categories: [
        {
          name: "छिटो मिठो खाना",
          products: [
            { name: "Samosa", price: 30 },
            { name: "Samosa (2pc) + Chola", price: 120 },
            { name: "Dal Kachori", price: 35 },
            { name: "Onion Kachori", price: 45 },
            { name: "Puri Chola", price: 150 },
            { name: "Puri Chola + Jeri (2pc)", price: 200 },
            { name: "Choley Bhatura", price: 200 },
            { name: "Pav Bhaji", price: 250 },
            { name: "Chola", price: 60 },
          ],
        },
        {
          name: "Chaat",
          products: [
            { name: "Mix Chaat", price: 180 },
            { name: "Kachori Chaat", price: 170 },
            { name: "Papadi Chaat", price: 170 },
            { name: "Samosa Chaat", price: 150 },
            { name: "Aloo Tikki Chaat", price: 170 },
            { name: "Raj Kachori Chaat", price: 200 },
            { name: "Dahi Bhalla", price: 180 },
            { name: "Dahi Puri Chaat", price: 180 },
            { name: "Pani puri", price: 100 },
          ],
        },
        {
          name: "Snacks",
          products: [
            { name: "French Fries", price: 180 },
            { name: "Chips Chilly", price: 250 },
            { name: "Paneer Chilly", price: 300 },
            { name: "Mushroom Chilly", price: 300 },
            { name: "Veg Manchurian", price: 250 },
            { name: "Veg Pakoda", price: 120 },
            { name: "Paneer Pakoda", price: 250 },
          ],
        },
        {
          name: "Beverage",
          products: [
            { name: "Fanta/ Sprite/ Coke", price: 60 },
            { name: "Sweet Lassi", price: 150 },
            { name: "Banana Lassi", price: 180 },
            { name: "Mineral Water", price: 30 },
          ],
        },
        {
          name: "South Indian",
          products: [
            { name: "Vishranti Special Dosa", price: 450 },
            { name: "Paneer Dosa", price: 400 },
            { name: "Masala Dosa", price: 300 },
            { name: "Plain Dosa", price: 250 },
            { name: "Mysore Dosa", price: 300 },
            { name: "Hara Bhara Dosa", price: 300 },
            { name: "Cheese Masala Dosa", price: 400 },
            { name: "Idli Shambar", price: 200 },
            { name: "Shambar Vada", price: 200 },
            { name: "Mix Veg Uttapam", price: 300 },
            { name: "Plain Uttapam", price: 250 },
            { name: "Onion Tomato Uttapam", price: 300 },
            { name: "Paneer Utaapam", price: 350 },
          ],
        },
        {
          name: "मः मः / चाउमिन",
          products: [
            { name: "Veg MO:MO", price: 150 },
            { name: "Veg Fry MO:MO", price: 180 },
            { name: "Veg C MO:MO", price: 200 },
            { name: "Veg Jhol MO:MO", price: 180 },
            { name: "Paneer MO:MO", price: 220 },
            { name: "Paneer Fry MO:MO", price: 250 },
            { name: "Paneer C MO:MO Paneer", price: 270 },
            { name: "Jhol MO:MO", price: 250 },
            { name: "Veg Chowmein", price: 150 },
            { name: "Vishranti Special Chowmein", price: 200 },
          ],
        },
        {
          name: "Sweets",
          products: [
            { name: "Rasvari", price: 40 },
            { name: "Lalmohan", price: 40 },
            { name: "Rasmalai", price: 80 },
            { name: "Rasmadhuri", price: 100 },
            { name: "Malai Cham Cham", price: 150 },
            { name: "Rabdi 1", price: 120 },
          ],
        },
      ],
    },
    {
      name: "Dailo Daily See Us",
      contact: "977-9803074666",
      address: "PC Complex, 1st Floor, New Baneshwor, Kathmandu (Nepal)",
      categories: [
        {
          name: "JHOL JHAAL",
          products: [
            { name: "Creamy Mushroom Soup (V)", price: 260 },
            { name: "Mopka (VA)", price: 280 },
          ],
        },
        {
          name: "SITANS SADHEKO (V)",
          products: [
            { name: "Bhatmaas", price: 200 },
            { name: "Peanuts", price: 225 },
            { name: "Sukuti", price: 360 },
            { name: "Bhutan", price: 390 },
          ],
        },
        {
          name: "CHHOILAA (VA)",
          products: [
            { name: "Chicken", price: 380 },
            { name: "Mushroom", price: 400 },
          ],
        },
        {
          name: "SEKUWA (VA)",
          products: [
            { name: "Chicken", price: 400 },
            { name: "Paneer", price: 450 },
            { name: "Pork", price: 500 },
            { name: "Mutton", price: 640 },
          ],
        },
        {
          name: "TAAS",
          products: [
            { name: "Chicken", price: 400 },
            { name: "Mutton", price: 640 },
            { name: "Sikaari Plate", price: 1390 },
          ],
        },
        {
          name: "CURRIES LEDO BEDO",
          products: [
            { name: "Chicken", price: 420 },
            { name: "Fish", price: 620 },
            { name: "Mutton", price: 630 },
          ],
        },
        {
          name: "BUTTER MASALA (VA)",
          products: [
            { name: "Chicken", price: 430 },
            { name: "Paneer", price: 560 },
            { name: "Matar Paneer (V)", price: 480 },
            { name: "I am Curry", price: 1499 },
          ],
        },
        {
          name: "TO TASTE",
          products: [
            { name: "Chicken Chilly", price: 350 },
            { name: "Pulled Chicken Loaded Fries", price: 360 },
            { name: "Mushroom Chilly (V)", price: 390 },
            { name: "Buffalo Wings", price: 390 },
            { name: "Crumbed Fried Chicken", price: 390 },
            { name: "Paneer chilly (V)", price: 480 },
          ],
        },
        {
          name: "SIZZLER (VA)",
          products: [
            { name: "Veg", price: 350 },
            { name: "Chicken", price: 490 },
          ],
        },
        {
          name: "CHEF'S SPECIAL HOTPAN (VA)",
          products: [
            { name: "Chicken", price: 490 },
            { name: "Paneer", price: 520 },
          ],
        },
        {
          name: "RICE & ROTIS",
          products: [
            { name: "Taawa Roti", price: 50 },
            { name: "Paratha (V)", price: 70 },
            { name: "Ghiu Bhaat", price: 150 },
            { name: "Jeera Rice (V)", price: 150 },
            { name: "Aalo Paratha (V)", price: 130 },
            { name: "Bihe ko Pulao (V)", price: 250 },
          ],
        },
        {
          name: "BIRYANI",
          products: [
            { name: "Hydrabaadi Dum Biryani (VA) Veg", price: 400 },
            { name: "Hydrabaadi Dum Biryani (VA) Chicken", price: 550 },
            { name: "Hydrabaadi Dum Biryani (VA) Mutton", price: 650 },
          ],
        },
        {
          name: "SALADS",
          products: [
            { name: "Nepalese Royal Salad (V)", price: 250 },
            { name: "Teaser Salad", price: 350 },
            { name: "Mixed Fruit Salad (V)", price: 450 },
          ],
        },
        {
          name: "PIZZA",
          products: [
            { name: "Dailo Ko Pizza (VA) Chicken", price: 520 },
            { name: "Dailo Ko Pizza (VA) Mushroom", price: 550 },
          ],
        },
        {
          name: "PASTA",
          products: [
            { name: "Carbonara", price: 400 },
            { name: "Bolognese", price: 420 },
          ],
        },
        {
          name: "FIRST LOVE",
          products: [
            { name: "Bruschetta Chat (v)", price: 200 },
            { name: "Aalotini - Mustaangi (V)", price: 260 },
            { name: "Naanja (V)", price: 300 },
          ],
        },
        {
          name: "DAILO'S SPECIAL",
          products: [
            {
              name: "Original Chhoila Burger (VA) Chicken / Mushroom",
              price: 295,
            },
            { name: "Burgers Loaded chicken burger", price: 350 },
          ],
        },
        {
          name: "DAILO PLATTERS",
          products: [
            { name: "Mo:Mo (veg)", price: 350 },
            { name: "Mo:Mo (Buff)", price: 400 },
            { name: "Mo:Mo (Chicken)", price: 450 },
          ],
        },
        {
          name: "ANEKTHARI",
          products: [{ name: "Anekthari", price: 799 }],
        },
        {
          name: "VEG PLATTER",
          products: [{ name: "Veg Platter", price: 899 }],
        },
        {
          name: "NON-VEG PLATTER",
          products: [{ name: "Non-Veg Platter", price: 999 }],
        },
        {
          name: "NAI NABHANNU LA (MOMO:)",
          products: [
            { name: "Paneer veg Mo:Mo (STEAMED)", price: 180 },
            { name: "Paneer veg Mo:Mo (SAADHEKO)", price: 220 },
            { name: "Paneer veg Mo:Mo (KURKURE)", price: 240 },
            { name: "Paneer veg Mo:Mo (JHOL)", price: 250 },
            { name: "Paneer veg Mo:Mo (C MO:MO)", price: 280 },
            { name: "Chicken Mo:Mo (STEAMED)", price: 190 },
            { name: "Chicken Mo:Mo (SAADHEKO)", price: 220 },
            { name: "Chicken Mo:Mo (KURKURE)", price: 250 },
            { name: "Chicken Mo:Mo (JHOL)", price: 260 },
            { name: "Chicken Mo:Mo (C MO:MO)", price: 280 },
            { name: "Buff Mo:Mo (STEAMED)", price: 180 },
            { name: "Buff Mo:Mo (SAADHEKO)", price: 220 },
            { name: "Buff Mo:Mo (KURKURE)", price: 260 },
            { name: "Buff Mo:Mo (JHOL)", price: 250 },
            { name: "Buff Mo:Mo (C MO:MO)", price: 280 },
          ],
        },
        {
          name: "... AND THE REST",
          products: [
            { name: "Chownmein (VA) Veg", price: 170 },
            { name: "Chownmein (VA) Buff", price: 190 },
            { name: "Chownmein (VA) Chicken", price: 200 },
          ],
        },
        {
          name: "FRIED RICE (VA)",
          products: [
            { name: "Fried Rice (VA) Veg", price: 200 },
            { name: "Fried Rice (VA) Egg", price: 240 },
            { name: "Fried Rice (VA) Buff", price: 270 },
            { name: "Fried Rice (VA) Chicken", price: 280 },
          ],
        },
        {
          name: "KATHI ROLL (VA)",
          products: [
            { name: "Kathi Roll (VA) Chicken", price: 350 },
            { name: "Kathi Roll (VA) Paneer", price: 400 },
            { name: "Kathi Roll (VA) Maya Dharane", price: 540 },
            { name: "Kathi Roll (VA) Desi Parmigiana", price: 580 },
          ],
        },
        {
          name: "CHHUTLANI",
          products: [
            { name: "Rolled Mince", price: 180 },
            { name: "Chicken Meatballs", price: 220 },
            { name: "Twakka Makai (V)", price: 320 },
            { name: "French Fries (V)", price: 190 },
            { name: "Chips Chilly (V)", price: 250 },
          ],
        },
      ],
    },
    {
      name: "Manoj Food",
      contact: "777-888-9999",
      address: "321 Cedar St, City",
      categories: [
        {
          name: "Lunch",
          products: [{ name: "Rice", price: 50 }],
        },
      ],
    },
    // Add more shops and products here
  ];

  // Function to display products for a given shop name
  const displayProductsByShop = (shopName) => {
    productList.innerHTML = ""; // Clear previous results

    const selectedShop = shopData.find((shop) => shop.name === shopName);

    if (selectedShop) {
      selectedShopName.textContent = selectedShop.name;
      shopContact.innerHTML = `<strong>Contact:</strong> <a href="tel:${selectedShop.contact}">${selectedShop.contact}</a>`;
      shopAddress.textContent = "Address: " + selectedShop.address;

      // Loop through categories and products, preserving the order
      selectedShop.categories.forEach((category) => {
        const categoryTitle = document.createElement("div");
        categoryTitle.textContent = category.name;
        categoryTitle.classList.add("category-title");
        productList.appendChild(categoryTitle);

        category.products.forEach((product) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<div><strong>Name:</strong> ${product.name}</div>
                                        <div><strong>Price:</strong> Rs ${product.price}</div>`;
          productList.appendChild(listItem);
        });
      });

      shopNameBox.style.display = "block";
    } else {
      productList.innerHTML = "<li>No products found for this shop.</li>";
      shopNameBox.style.display = "none";
    }
  };

  // Event listener for the search button
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();

    if (query) {
      displayProductsByShop(query);
      shopSuggestions.style.display = "none"; // Hide suggestions
    }
  });

  // Event listener for input changes to show shop name suggestions
  searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");
    let matchedSuggestions = sampleShopNames.filter((shop) => {
      const sanitizedShopName = shop.toLowerCase().replace(/\s+/g, "");
      return sanitizedShopName.includes(inputValue);
    });

    // Sort suggestions in ascending order
    matchedSuggestions = matchedSuggestions.sort();

    if (matchedSuggestions.length > 0) {
      shopSuggestions.style.display = "block";
      shopSuggestions.innerHTML = ""; // Clear previous suggestions

      matchedSuggestions.forEach((suggestion) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = suggestion;
        suggestionItem.classList.add("suggestion-item");
        suggestionItem.addEventListener("click", () => {
          searchInput.value = suggestion;
          displayProductsByShop(suggestion);
          shopSuggestions.style.display = "none"; // Hide suggestions on selection
        });
        shopSuggestions.appendChild(suggestionItem);
      });
    } else {
      shopSuggestions.style.display = "none"; // Hide suggestions if no matches
    }
  });
});

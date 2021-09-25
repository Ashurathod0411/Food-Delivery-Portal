const express = require('express');
const router = express.Router();

//console.log("router",router);
router.get("/",function(request, response) {
    response.send({ Result :"food Items API Accessed"})
})

router.get("/list",function(request, response) {
    const foodItems = {
        "results":[
            {
                name:"Pizza",
                image: "https://format-com-cld-res.cloudinary.com/image/private/s--B84mXCHB--/c_limit,g_center,h_65535,w_700/fl_keep_iptc.progressive,q_95/v1/476e4efb76f072b2391bb65338f63f6d/Dominos_india_Veggie_Paradise.jpg",
                subItemsData: {
                    name: "Tasty Pizzas",
                    subItems:[
                        {
                            name: "Tomoto Basil Italian Pizza",
                            image:"https://st4.depositphotos.com/8000700/19794/i/1600/depositphotos_197947490-stock-photo-rustic-italian-pizza-margarita-mozzarella.jpg",
                            price:"450",
                            description:"Dressed with oil,the origanum and garlic cloves" 
                        },
                        {
                            name: "Bombay Pizza",
                            price:"550",
                            image:"https://bombaypizzahouse.com/wp-content/uploads/2020/09/AchariChicken.jpg",
                            description:"Spicy tomoto sauce with Italian  herbs, mashrooms, onion, cottage chesse, coriander and mozzarella" 
                        },
                        {
                            name: "Sicilia Pizza",
                            image:"https://b.zmtcdn.com/data/pictures/8/18263418/b61811fd24b9bbf4105851283e821e05.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                            price:"450",
                            description:"A thick base pizza with fresh tomoto sauce, mashrooms, garlic, pickled onions"
                        }
                    ]
                }
            },
            {
                name: "Burger",
                image:"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/zeesmhczd1iijkcl1wym",
                subItemsData: {
                    name: "Crispy Burgers",
                    image:"https://www.unileverfoodsolutions.lk/dam/global-ufs/mcos/meps/sri-lanka/calcmenu/recipes/LK-recipes/general/crispy-fried-chicken-burger/main-header.jpg",
                    subItems:[
                        {
                            name: "Fried chiken Burger",
                            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUCdonujZaWB333MAU4Bf75RXZls0Mu7FKA&usqp=CAU",
                            price:"450",
                            description:"Old School Chicken Burger" 
                        },
                        {
                            name: "Paneer Tikka Burger",
                            image:"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/qkud2yij2wuhyojblkst",
                            price:"450",
                            description:"Spicy Panner, Onion, Tomoto, Mazerella cheese " 
                        },
                        {
                            name: "Chicken Classic Cheese Burger",
                            image:"https://simply-delicious-food.com/wp-content/uploads/2018/11/spicy-chicken-burgers-2.jpg",
                            price:"550",
                            description:"Aged cheddar, sweet pickle, tomato, red onoin" 
                        }
                    ]
                }
            }
        ]
    };
response.send(foodItems);
});

router.post("/update",function(request, response) {
    response.send({ Result :"food Items updated successfully"});
});


module.exports = router;
 
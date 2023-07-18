import ContentCard from "./ContentCard.jsx";
import ItemCard from "./ItemCard.jsx";

function MainContainer () {
  const beverageStage = [
    {
      id: 1,
      name: "WinterMelon",
      description: "Wintermelon milk tea is a popular beverage that originated in Taiwan and has gained popularity worldwide. It is made by combining wintermelon syrup, black tea, and milk or creamer."
    },
    {
      id: 2,
      name: "Okinawa",
      description: "Okinawa milk tea is a delicious and popular beverage that originated in Okinawa, a tropical island located in southern Japan. It is a unique twist on traditional milk tea, infused with the flavors of brown sugar and often accompanied by the richness of creamy milk or creamer.",
    },
    {
      id: 3,
      name: "Matcha",
      description: "Matcha milk tea is a delightful beverage that combines the vibrant flavors of matcha green tea and creamy milk. It originated in Japan and has gained popularity worldwide for its unique taste and health benefits. Matcha, finely ground green tea powder, is the star ingredient that gives the tea its vibrant green color and distinct flavor. It has a rich, earthy, and slightly bitter taste, which is balanced by the sweetness and creaminess of the milk."
    }
  ];
  
  const teaBeverages = beverageStage.map((milkTea) => <ContentCard key={milkTea.id}
  name={milkTea.name}
  description={milkTea.description}
  />);


  const itemList = [
    {
      id: 1,
      itemName: "WinterMelon instant Powdered Milk Tea",
      weight: "500g",
      price: 135,
    },
    {
      id: 2,
      itemName: "Okinawa instant Powdered Milk Tea",
      weight:"500g",
      price: 135,
    },
    {
      id: 3,
      itemName: "Taro instant Powdered Milk Tea",
      weight:"500g",
      price: 135,
    },
    {
      id: 4,
      itemName: "Dark Chocolate instant Powdered Milk Tea",
      weight:"500g",
      price: 135,
    },
    {
      id: 5,
      itemName: "Cookies and Cream instant Powdered Milk Tea",
      weight:"500g",
      price: 135,
    },
    {
      id: 6,
      itemName: "Chocolate instant Powdered Milk Tea",
      weight:"500g",
      price: 135,
    },
 
  ]

  const itemBeverageList = itemList.map(itemList => <ItemCard key={itemList.id}
    itemName={itemList.itemName}
    weight={itemList.weight}
    price={itemList.price}
    />); 


  return (
    <>
       <div className="row">
          <div className="col-4">
            {teaBeverages}
          </div>

          <div className="col">
            <div className="container d-flex flex-wrap">
            {itemBeverageList}
            </div>
              
          </div>
        </div>
    </>
  )
}


export default MainContainer
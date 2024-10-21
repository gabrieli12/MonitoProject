import pupie1 from '../pupiesPhotos/image 1.png'
import pupie2 from '../pupiesPhotos/image 2.png'
import pupie3 from '../pupiesPhotos/image 3.png'
import pupie4 from '../pupiesPhotos/image 4.png'
import pupie5 from '../pupiesPhotos/image 5.png'
import pupie6 from '../pupiesPhotos/image 6.png'
import pupie7 from '../pupiesPhotos/image 7.png'
import pupie8 from '../pupiesPhotos/image 8.png'

import product1 from '../productPhotos/product1.png'
import product2 from '../productPhotos/product2.png'
import product3 from '../productPhotos/product3.png'
import product4 from '../productPhotos/product4.png'
import product5 from '../productPhotos/product5.png'
import product6 from '../productPhotos/product6.png'
import product7 from '../productPhotos/product7.png'
import product8 from '../productPhotos/product8.png'





const puppies = [
  { id: "MO231 - Pomeranian", gender: "Male", age: "02 months", price: "6.900.000 VND", photo: pupie1, breedSize: "small", color: "Red" },
  { id: "MO502 - Poodle", gender: "Female", age: "02 months", price: "3.900.000 VND", photo: pupie2, breedSize: "medium", color: "Apricot" },
  { id: "MO232 - Pomeranian", gender: "Female", age: "02 months", price: "6.800.000 VND", photo: pupie3, breedSize: "small", color: "Black" },
  { id: "MO503 - Poodle", gender: "Male", age: "02 months", price: "4.000.000 VND", photo: pupie4, breedSize: "large", color: "Black & White" },
  { id: "MO233 - Pomeranian", gender: "Male", age: "02 months", price: "7.100.000 VND", photo: pupie5, breedSize: "medium", color: "Silver" },
  { id: "MO504 - Poodle", gender: "Female", age: "02 months", price: "4.100.000 VND", photo: pupie6, breedSize: "large", color: "Tan" },
  { id: "MO234 - Pomeranian", gender: "Female", age: "02 months", price: "6.700.000 VND", photo: pupie7, breedSize: "small", color: "Red" },
  { id: "MO505 - Poodle", gender: "Male", age: "02 months", price: "4.200.000 VND", photo: pupie8, breedSize: "medium", color: "Apricot" },
  { id: "MO235 - Pomeranian", gender: "Male", age: "02 months", price: "6.900.000 VND", photo: pupie1, breedSize: "large", color: "Black" },
  { id: "MO506 - Poodle", gender: "Female", age: "02 months", price: "4.000.000 VND", photo: pupie2, breedSize: "small", color: "Black & White" },
  { id: "MO236 - Pomeranian", gender: "Female", age: "02 months", price: "7.200.000 VND", photo: pupie3, breedSize: "medium", color: "Silver" },
  { id: "MO507 - Poodle", gender: "Male", age: "02 months", price: "4.300.000 VND", photo: pupie4, breedSize: "large", color: "Tan" },
  { id: "MO237 - Pomeranian", gender: "Male", age: "02 months", price: "6.600.000 VND", photo: pupie5, breedSize: "small", color: "Red" },
  { id: "MO508 - Poodle", gender: "Female", age: "02 months", price: "3.800.000 VND", photo: pupie6, breedSize: "medium", color: "Apricot" },
  { id: "MO238 - Pomeranian", gender: "Female", age: "02 months", price: "6.700.000 VND", photo: pupie7, breedSize: "large", color: "Black" },
  { id: "MO509 - Poodle", gender: "Male", age: "02 months", price: "4.200.000 VND", photo: pupie8, breedSize: "small", color: "Black & White" },
  { id: "MO239 - Pomeranian", gender: "Male", age: "02 months", price: "7.000.000 VND", photo: pupie1, breedSize: "medium", color: "Silver" },
  { id: "MO510 - Poodle", gender: "Female", age: "02 months", price: "4.100.000 VND", photo: pupie2, breedSize: "large", color: "Tan" },
  { id: "MO240 - Pomeranian", gender: "Female", age: "02 months", price: "6.500.000 VND", photo: pupie2, breedSize: "small", color: "Red" },
  { id: "MO511 - Poodle", gender: "Male", age: "02 months", price: "3.900.000 VND", photo: pupie3, breedSize: "medium", color: "Apricot" },
  { id: "MO241 - Pomeranian", gender: "Male", age: "02 months", price: "6.900.000 VND", photo: pupie4, breedSize: "large", color: "Black" },
  { id: "MO512 - Poodle", gender: "Female", age: "02 months", price: "4.300.000 VND", photo: pupie5, breedSize: "small", color: "Black & White" },
  { id: "MO242 - Pomeranian", gender: "Female", age: "02 months", price: "7.400.000 VND", photo: pupie6, breedSize: "medium", color: "Silver" },
  { id: "MO513 - Poodle", gender: "Male", age: "02 months", price: "4.500.000 VND", photo: pupie7, breedSize: "large", color: "Tan" },
  { id: "MO243 - Pomeranian", gender: "Male", age: "02 months", price: "6.700.000 VND", photo: pupie8, breedSize: "small", color: "Red" },
  { id: "MO514 - Poodle", gender: "Female", age: "02 months", price: "4.100.000 VND", photo: pupie1, breedSize: "medium", color: "Apricot" },
  { id: "MO244 - Pomeranian", gender: "Female", age: "02 months", price: "6.600.000 VND", photo: pupie2, breedSize: "large", color: "Black" },
  { id: "MO515 - Poodle", gender: "Male", age: "02 months", price: "4.500.000 VND", photo: pupie3, breedSize: "small", color: "Black & White" },
  { id: "MO245 - Pomeranian", gender: "Male", age: "02 months", price: "7.200.000 VND", photo: pupie4, breedSize: "medium", color: "Silver" },
  { id: "MO516 - Poodle", gender: "Female", age: "02 months", price: "4.300.000 VND", photo: pupie5, breedSize: "large", color: "Tan" },
  { id: "MO246 - Pomeranian", gender: "Female", age: "02 months", price: "6.500.000 VND", photo: pupie6, breedSize: "small", color: "Red" },
  { id: "MO517 - Poodle", gender: "Male", age: "02 months", price: "3.800.000 VND", photo: pupie7, breedSize: "medium", color: "Apricot" },
  { id: "MO247 - Pomeranian", gender: "Male", age: "02 months", price: "6.800.000 VND", photo: pupie8, breedSize: "large", color: "Black" },
  { id: "MO518 - Poodle", gender: "Female", age: "02 months", price: "4.200.000 VND", photo: pupie1, breedSize: "small", color: "Black & White" },
  { id: "MO519 - Pomeranian", gender: "Male", age: "02 months", price: "6.900.000 VND", photo: pupie2, breedSize: "medium", color: "Silver" },
  { id: "MO520 - Poodle", gender: "Female", age: "02 months", price: "3.900.000 VND", photo: pupie3, breedSize: "large", color: "Apricot" }
];




const products = [
    {
      id: "Product1 - Reflex Plus Adult Cat Food Salmon",
      type: "Dog Food",
      size: "385gm",
      price: "140.000 VND",
      promotion: "Free Toy & Free Shaker",
      photo: product1
    },
    {
      id: "Product2 - Reflex Plus Adult Cat Food Salmon",
      type: "Cat Food",
      size: "1.5kg",
      price: "165.000 VND",
      promotion: "Free Toy & Free Shaker",
      photo: product2
      
    },
    {
      id: "Product3 - Cat scratching ball toy kitten sisal rope ball",
      type: "Toy",
      size: "",
      price: "1.100.000 VND",
      promotion: "Free Cat Food",
      photo: product3
      
    },
    {
      id: "Product4 - Reflex Plus Adult Cat Food Tuna",
      type: "Cat Food",
      size: "1.5kg",
      price: "150.000 VND",
      promotion: "Free Shaker",
      photo: product4
      
    },
    {
      id: "Product5 - Reflex Plus Adult Dog Food Chicken",
      type: "Dog Food",
      size: "385gm",
      price: "140.000 VND",
      promotion: "Free Toy",
      photo: product5
      
    },
    {
      id: "Product6 - Cat interactive feather toy",
      type: "Toy",
      size: "",
      price: "900.000 VND",
      promotion: "Free Toy",
      photo: product6
      
    },
    {
      id: "Product7 - Reflex Plus Adult Cat Food Beef",
      type: "Cat Food",
      size: "1.5kg",
      price: "160.000 VND",
      promotion: "Free Shaker",
      photo: product7
      
    },
    {
      id: "Product8 - Dog chew toy bone shaped",
      type: "Toy",
      size: "",
      price: "500.000 VND",
      promotion: "Free Dog Food",
      photo: product8
      
    }
  ];
  
  

export { puppies, products }
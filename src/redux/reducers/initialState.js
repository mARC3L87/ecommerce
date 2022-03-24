import whiteMockup from '../../assets/White T-Shirt Mockup.jpg';
import blackTriBlend from '../../assets/Black T-Shirt Tri-Blend Crew.jpg';
import blackLongSleeve from '../../assets/Black LongSleeve 705.jpg';
import blackPlain from '../../assets/Black Plain T-Shirt.jpg';
import black705 from '../../assets/Black T-Shirt 705.jpg';
import blackTaySon from '../../assets/Black T-Shirt Tay Son.jpg';
import blackTshirt from '../../assets/Black T-Shirt.jpg';
import blueInspiring from '../../assets/Blue T-Shirt Inspiring.jpg';
import pinkTshirt from '../../assets/Pink T-Shirt.jpg';
import redTshirt from '../../assets/Red T-Shirt.jpg';
import whiteMetallica from '../../assets/White T-Shirt Metallica.jpg';
import whiteClassic from '../../assets/White Classic T-Shirt.jpg';
import whitePlain from '../../assets/White Plain T-Shirt.jpg';
import whiteCopenhagen from '../../assets/White T-Shirt Copenhagen.jpg';
import whiteFlowers from '../../assets/White T-Shirt Flowers.jpg';
import whiteLove from '../../assets/White T-Shirt Love.jpg';
import whiteNguyen from '../../assets/White T-Shirt Nguyen Hue.jpg';
import whiteRoad from '../../assets/White T-Shirt Road.jpg';
import whiteSocial from '../../assets/White T-Shirt Social.jpg';
import whiteStranger from '../../assets/White T-Shirt Stranger Things.jpg';
import whiteSupreme from '../../assets/White T-Shirt Supreme.jpg';
import whiteTaySon from '../../assets/White T-Shirt Tay Son.jpg';
import yellowTshirt from '../../assets/Yellow T-Shirt.jpg';
import whiteSmiley from '../../assets/White Smiley T-Shirt.jpg';

const products = {
  currency: '$',
  shipping: 15,
  categories: [
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
  ],
  delivery: ['DHL', 'DPD', 'UPS', 'INPOST'],
  payment: ['CREDIT CARD', 'DEBIT CARD', 'BANK TRANSFER'],
  items: [
    {
      id: 1,
      product_name: 'White Mockup T-shirt',
      image: whiteMockup,
      price: { current_price: 19.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M', 'L', 'XL'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 2,
      product_name: 'Black Tri-Blend Crew T-shirt',
      image: blackTriBlend,
      price: { current_price: 39.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'L', 'XL'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 3,
      product_name: 'Pink T-shirt',
      image: pinkTshirt,
      price: { current_price: 15.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M', 'L'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 4,
      product_name: 'White Plain T-shirt',
      image: whitePlain,
      price: { current_price: 19.99, old_price: 7.0 },
      qty: 1,
      sizes: ['M', 'L'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 5,
      product_name: 'Red T-shirt',
      image: redTshirt,
      price: { current_price: 9.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M', 'L', 'XL'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 6,
      product_name: 'Black T-shirt 705',
      image: black705,
      price: { current_price: 15.0, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 7,
      product_name: 'White T-shirt With Flowers',
      image: whiteFlowers,
      price: { current_price: 25.99, old_price: 7.0 },
      qty: 1,
      sizes: ['M', 'L'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 8,
      product_name: 'White "Metallica" T-shirt',
      image: whiteMetallica,
      price: { current_price: 31.99, old_price: 7.0 },
      qty: 1,
      sizes: ['XS', 'S', 'M', 'L'],
      pickedSize: [],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 9,
      product_name: 'Black Longsleeve',
      image: blackLongSleeve,
      price: { current_price: 19.5, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M', 'L'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 11,
      product_name: 'White Nguyen Hue T-shirt',
      image: whiteNguyen,
      price: { current_price: 40.99, old_price: 7.0 },
      qty: 1,
      sizes: ['L', 'XL'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 12,
      product_name: 'White Road T-shirt',
      image: whiteRoad,
      price: { current_price: 19.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M'],
      pickedSize: [],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 13,
      product_name: 'White Strnger Things T-shirt',
      image: whiteStranger,
      price: { current_price: 10.99, old_price: 7.0 },
      qty: 1,
      sizes: ['XS'],
      pickedSize: [],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 14,
      product_name: 'White Classic T-shirt',
      image: whiteClassic,
      price: { current_price: 9.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M', 'L', 'XL'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 15,
      product_name: 'Black Classic T-shirt',
      image: blackPlain,
      price: { current_price: 9.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M', 'L', 'XL'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 16,
      product_name: 'White Tay Son T-shirt',
      image: whiteTaySon,
      price: { current_price: 20.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 17,
      product_name: 'Black T-shirt',
      image: blackTshirt,
      price: { current_price: 9.99, old_price: 7.0 },
      qty: 1,
      sizes: ['L', 'XL'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 18,
      product_name: 'White Copenhagen T-shirt',
      image: whiteCopenhagen,
      price: { current_price: 20.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M'],
      pickedSize: [],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 19,
      product_name: 'White Supreme T-shirt',
      image: whiteSupreme,
      price: { current_price: 50.0, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M'],
      pickedSize: [],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 20,
      product_name: 'White Love T-shirt',
      image: whiteLove,
      price: { current_price: 10.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M', 'XL'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 21,
      product_name: 'White Social T-shirt',
      image: whiteSocial,
      price: { current_price: 20.99, old_price: 7.0 },
      qty: 1,
      sizes: ['XS', 'S', 'M'],
      pickedSize: [],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 22,
      product_name: 'Blue Inspiring T-shirt',
      image: blueInspiring,
      price: { current_price: 13.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 23,
      product_name: 'Black Tay Son T-shirt',
      image: blackTaySon,
      price: { current_price: 20.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 24,
      product_name: 'Yellow T-shirt',
      image: yellowTshirt,
      price: { current_price: 10.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 25,
      product_name: 'White Smiley Face T-shirt',
      image: whiteSmiley,
      price: { current_price: 25.99, old_price: 7.0 },
      qty: 1,
      sizes: ['S', 'M', 'L'],
      pickedSize: [],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
  ],
};

const initialState = products;

export default initialState;

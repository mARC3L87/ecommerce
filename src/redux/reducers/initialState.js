const products = {
  currency: '$',
  shipping: 15,
  categories: [
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
  ],
  items: [
    {
      id: 1,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/GREEBEtyR9Y',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 2,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/PDZAMYvduVk',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 3,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/jX2cntCbrAo',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 4,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/dG4Eb_oC5iM',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 5,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/243Q39DzM3M',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 6,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/sMn0sxR8v2E',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 7,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/21TsyXG9Rgs',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 8,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/8UOwLzt4RoI',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'women',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 9,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/LYEnS2xB9bQ',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
    {
      id: 10,
      product_name: 'T-shirt',
      image: 'https://unsplash.com/photos/MnUzbIS_tMg',
      price: { current_price: 10.5, old_price: 7.0 },
      sizes: ['S', 'M', 'L'],
      category: 'men',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec.',
    },
  ],
};

const initialState = products;

export default initialState;

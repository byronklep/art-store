const products = [
  {
    title: 'Test Product 1',
    subtitle: 'Test Subtitle',
    category: 'psychedelic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image1.png',
    price: 50,
    countInStock: 3,
  },
  {
    title: 'Test Product 2',
    subtitle: 'Test Subtitle',
    category: 'noveau',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image2.png',
    price: 40,
    countInStock: 4,
  },
  {
    title: 'Test Product 3',
    subtitle: 'Test Subtitle',
    category: 'comics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image3.png',
    price: 20,
    countInStock: 2,
  },
  {
    title: 'Test Product 4',
    subtitle: 'Test Subtitle',
    category: 'space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image4.png',
    price: 80,
    countInStock: 2,
  },
  {
    title: 'Test Product 5',
    subtitle: 'Test Subtitle',
    category: 'nature',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image5.png',
    price: 50,
    countInStock: 4,
  },
  {
    title: 'Test Product 6',
    subtitle: 'Test Subtitle',
    category: 'abstract',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image6.png',
    price: 30,
    countInStock: 1,
  },
  {
    title: 'Test Product 1',
    subtitle: 'Test Subtitle',
    category: 'psychedelic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image1.png',
    price: 50,
    countInStock: 3,
  },
  {
    title: 'Test Product 2',
    subtitle: 'Test Subtitle',
    category: 'noveau',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image2.png',
    price: 40,
    countInStock: 4,
  },
  {
    title: 'Test Product 3',
    subtitle: 'Test Subtitle',
    category: 'comics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image3.png',
    price: 20,
    countInStock: 2,
  },
  {
    title: 'Test Product 4',
    subtitle: 'Test Subtitle',
    category: 'space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image4.png',
    price: 80,
    countInStock: 2,
  },
  {
    title: 'Test Product 5',
    subtitle: 'Test Subtitle',
    category: 'nature',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image5.png',
    price: 50,
    countInStock: 4,
  },
  {
    title: 'Test Product 6',
    subtitle: 'Test Subtitle',
    category: 'abstract',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image6.png',
    price: 30,
    countInStock: 1,
  },
  {
    title: 'Test Product 1',
    subtitle: 'Test Subtitle',
    category: 'psychedelic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image1.png',
    price: 50,
    countInStock: 3,
  },
  {
    title: 'Test Product 2',
    subtitle: 'Test Subtitle',
    category: 'noveau',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image2.png',
    price: 40,
    countInStock: 4,
  },
  {
    title: 'Test Product 3',
    subtitle: 'Test Subtitle',
    category: 'comics',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image3.png',
    price: 20,
    countInStock: 2,
  },
  {
    title: 'Test Product 4',
    subtitle: 'Test Subtitle',
    category: 'space',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image4.png',
    price: 80,
    countInStock: 2,
  },
  {
    title: 'Test Product 5',
    subtitle: 'Test Subtitle',
    category: 'nature',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image5.png',
    price: 50,
    countInStock: 4,
  },
  {
    title: 'Test Product 6',
    subtitle: 'Test Subtitle',
    category: 'abstract',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et ante quis lorem lacinia sollicitudin. Mauris scelerisque efficitur nunc, eu volutpat mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio nisl, accumsan ut neque et, convallis dignissim eros.',
    image: '/img/image6.png',
    price: 30,
    countInStock: 1,
  },
]

export default products

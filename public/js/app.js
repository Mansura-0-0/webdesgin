// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();
//<button class="add-to-cart-btn" data-name="Half pounder" data-price="8.99">Add to Cart</button>

// configure express to use handlebars
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'default',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
  })
);

// set view engine
app.set('view engine', 'hbs');
app.set('views', 'views');

// serve static files (css, js, images)
app.use(express.static('public'));

// --------------------- ROUTES ---------------------

// Home route
app.get('/', (req, res) => {
  const state = { home: true };
  const head = { title: "Home" };
  res.render('index', { state, head });
  console.log('home');
});

// Contact route
app.get('/contact', (req, res) => {
  const state = { contact: true };
  const head = { title: "Contact", description: "contact us", keywords: "contact,phone,email" };
  res.render('contact', { state, head });
  console.log('contact');
});

// Menu route
app.get('/menu', (req, res) => {
  const state = { menu: true };
  const head = { title: "Menu", description: "our menu", keywords: "menu,food,drinks" };
  res.render('menu', { state, head });
  console.log('menu');
});

// Order route
app.get('/order', (req, res) => {
  const state = { order: true };
  const head = { title: "Order", description: "place your order", keywords: "order,food,menu" };
  res.render('order', { state, head });
  console.log('order');
});

// Submit route (contact form submission)
app.get('/submit', (req, res) => {
  const state = { submit: true };
  const head = { title: "Submit", description: "form submitted", keywords: "thank you,submit" };
  res.render('submit', { state, head });
  console.log('submit');
});

// Thank you route 
app.get('/thankyou', (req, res) => {
  const { name, gender, email, message } = req.query;
  res.render('thankyou', { name, gender, email, message });
});
//checkout route
app.get('/checkout', (req, res) => {
  const state = { checkout: true };
  const head = { title: "Checkout", description: "checkout page", keywords: "checkout,cart,order" };
  res.render('checkout', { state, head });
  console.log('checkout');
});
//login route
app.get('/login', (req, res) => {
  const state = { login: true };
  const head = { title: "Login", description: "login page", keywords: "login,user,account" };
  res.render('login', { state, head });
  console.log('login');
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  console.log([]==![]);
});


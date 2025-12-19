
// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();


// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');
// where to find static files - css, images, js
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active or not for navigation
  state={'home' : true}
  // set specifics for <head>
  head={'title': "Home", description:"welcome to our home page", keywords:"home,landing",}
  res.render('index', {state:state, head:head});
  // send this to terminal where node app is running
  console.log('home')

});

// contact route
app.get('/contact', (req, res) => {
    state={ contact : true}
    head={'title': "contact", description:"contact us", keywords:"contact,phone,email",}
    res.render('contact', { state:state, head:head});
    console.log('contact')
  });

  // menu route
app.get('/menu', (req, res) => {
  state={ menu : true}
  head={'title': "menu", description:"our menu", keywords:"menu,food,drinks",}
  res.render('menu', { state:state, head:head});
  console.log('menu')
});
// order route
app.get('/order', (req, res) => {
  const state = { order: true };
  const head = { title: "Order", description: "place your order", keywords:"order,food,menu" };
  res.render('order', { state: state, head: head });
  console.log('order');
});


 // submit route
 app.get('/submit', (req, res) => {
  state={ submit : true}
  head={title: "submit",description:"open from contact from", keywords:"thank you,sumbit",}
  res.render('submit', { state:state, head:head});
  console.log('submit')
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
var http = require ("http");
var bodyParser = require("body-parser");
var express = require ("express");
var app = express ();

app.use(bodyParser.urlencoded({extended: true}));
app.set ("view engine", "ejs");

var campgrounds = [
    {
        name: 'Salmon Creek',
        image: 'https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732b72dd9749c75f_340.jpg'
    },
    {
        name: 'Granite Hill',
        image: 'https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732b72dd944fc15e_340.jpg'
    },
    {
        name: 'Mountain Goat',
        image: 'https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f702f78d1924ac3_340.jpg'
    },
    {
        name: 'Salmon Creek',
        image: 'https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732b72dd9749c75f_340.jpg'
    },
    {
        name: 'Granite Hill',
        image: 'https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732b72dd944fc15e_340.jpg'
    },
    {
        name: 'Mountain Goat',
        image: 'https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f702f78d1924ac3_340.jpg'
    },
    {
        name: 'Salmon Creek',
        image: 'https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732b72dd9749c75f_340.jpg'
    },
    {
        name: 'Granite Hill',
        image: 'https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732b72dd944fc15e_340.jpg'
    },
    {
        name: 'Mountain Goat',
        image: 'https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e50744f702f78d1924ac3_340.jpg'
    }
]

app.get ("/", (req, res) => {
    res.render ("landing");
});

app.get("/campgrounds", (req, res) => {
    res.render('campgrounds', {campgrounds: campgrounds});
});


app.post('/campgrounds', (req, res) =>{
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);

    res.redirect('/campgrounds');
} );


app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});


app.listen ('8000', function () {
    console.log ("YelpCamp server has started!");
});
const Keycloak = require('keycloak-connect');
const session = require('express-session');
const express = require('express')
const app = express()

const port = 3000

var memoryStore = new session.MemoryStore();                       
var keycloak = new Keycloak({ store: memoryStore });

app.use(session({
    secret:'my-secret',                         
    resave: false,                         
    saveUninitialized: true,                         
    store: memoryStore                       
}));

app.use(keycloak.middleware());


app.get('/developer', keycloak.protect('realm:developer'), function(req, res){
  res.send("Welcome to Realm Developer!");
});

app.get('/writer', keycloak.protect('writer'), function(req, res){
  res.send("Welcome to Writer!");
});

app.get('/all-user', keycloak.protect(['developer','admin']), function(req, res){
  res.send("Hello All User");
});

app.use( keycloak.middleware( { logout: '/logout'} ));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

app.listen(port, function () {
  console.log("Listening at http://localhost:$port");
});

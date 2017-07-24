const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const auth = require('./repo/basicAuth');
const bin = require('./repo/bin');
const user = require('./repo/user');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.set('view engine', 'hbs');
mongoose.connect('mongodb://127.0.0.1:27017/warehouse');
app.locals.title = 'Bitbean warehouse manager';
function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}
mongoose.connection.on('error', err => {
  console.error(err);
});
mongoose.connection.on('open', () => {
  console.log('connected');
});
app.use(auth(app));

app.get('/', (req, res) => {
  const name = { "name": "BitBean", "type": "Warehouse Manager" };
  bin.find({}, {
    number: 1
  }).
    then((result) => {
      res.render('index', {
        name: name,
        bins: result,
        user: req.session.name,
        perm: req.session.perm
      });
    })
});
app.get('/contents', (req, res) => {
  bin.findOne({
    _id: req.query.bin
  }, {
      number: 1, bin: 1
      , _id: 0
    })
    .then((result) => {
      res.json({ result: result, perm: req.session.perm });
    })
});
app.get('/users', (req, res) => {
  if (req.session.perm) {
    user.find()
      .then((result) => {
        res.json(result);
      })
  }
});

app.post('/newUser', (req, res) => {
  if (req.perm) {
    user.findOne({ $or: [{ 'userName.name': req.body.userName }, { name: req.body.name }] })
      .then(result => {
        let n;
        if (result) {
          (result.name === req.body.name) ? n = result.name : n = req.body.userName; res.json({ error: n });
          return;
        }
        newUser = new user({ name: req.body.name, userName: { name: req.body.userName, password: req.body.password }, perm: req.body.permissions });
        newUser.save((err, result) => {
          res.json(result);
        });
      });
  }
});
app.post('/newBin', (req, res) => {
  bin.findOne({}).sort('-number').exec(function (err, count) {
    console.log(count.number + 1);
    new bin({
      number: count.number + 1, bin: []
    }).
      save(function (err, bin) {
        res.json({
          id: bin._id,
          number: bin.number
        });
      });
  })
});

app.post('/deleteItem', (req, res) => {
  bin.update({ "bin.id": req.body.number }, { $pull: { bin: { id: req.body.number } } }).exec();
  res.end();
});

app.post('/deleteUser', (req, response) => {
  user.findOne({ "userName.name": req.body.number }).then(res => {
    if (res.perm === 'admin') {
      user.count({ perm: 'admin' }, (err, admin) => {
        console.log(admin);
        if (admin < 2) {
          response.json({ admin: true }); return;
        }
        user.remove({ "userName.name": req.body.number })
          .exec();
      });
    } else {
      user.remove({ "userName.name": req.body.number })
        .exec(); response.end();
    }
  })
});

app.post('/addItem', (req, res) => {
  if (!req.body.item) return;
  bin.findOne({
    "bin.id": req.body.item
  })
    .exec(function (err, results) {
      if (hasWhiteSpace(req.body.item) || results) {
        res.json({
          error: true,
          found: results.number
        });
        return;
      }
      bin.update({
        _id: req.body.bin
      },
        {
          $push: {
            bin: { id: req.body.item, author: req.session.name }
          }
        }
      )
        .exec();
      res.end();
    });
});
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// });

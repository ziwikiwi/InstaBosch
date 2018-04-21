var Foellinger = require('../models/foellinger')

exports.imageGet = function (req, res) {

    Foellinger.find(function(err, images) {
     if (err)
       return res.status(404).send({ message: 'Error', data: 'Could not find any images'});

     res.status(200).json({ message: 'OK', data: images});
   });
}

exports.imageGetId = function (req, res) {
  Foellinger.findById(req.params.id, function(err, image) {
    if (err || !image)
      return res.status(404).send({ message: 'Error', data: 'Id not found'});

    date = new Date(image.timestamp * 1000)
    console.log(date.getDay())
    console.log(date.getDate())
    console.log(date.getMonth() + 1)
    console.log(date.getFullYear())
    res.status(200).json({ message: 'OK', data: image});
  });
}

exports.imagePost = function (req, res) {
  date = new Date(req.body.timestamp * 1000)
  req.body.day = date.getDay()
  req.body.date = date.getDate()
  req.body.month = date.getMonth() + 1
  req.body.year = date.getFullYear()
  var image = new Foellinger(req.body);
  image.save(function(err) {
    if (err)
      return res.status(404).send({ message: 'Error', data: 'Failed to add image'});

    res.status(201).json({ message: 'OK', data: image });
  });
}

exports.imageUpdate = function (req, res) {
  Foellinger.findById(req.params.id, function(err, image) {
      if (err)
        return res.status(404).send({ message: 'Error', data: 'Failed to update image'});

      image.set(req.body);
      image.save(function(err) {
        if (err)
          return res.status(404).send({ message: 'Error', data: 'Failed to add image'});

        res.status(201).json({ message: 'OK', data: image });
      });
  });
}

exports.imageDelete = function (req, res) {
  Foellinger.findByIdAndRemove(req.params.id, function(err, image) {
    if (err || !image)
      return res.status(404).send({ message: 'Error', data: 'Failed to delete image'});

    res.status(200).json({ message: 'OK', data: image });
  });
}

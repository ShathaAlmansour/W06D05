const someModel = require("./../../db/models/todoSchema");
const someFunc = (req, res) =>{
    const { someKey, someNumber } = req.body;
    
      const newSomeData = new someModel({
        someKey, 
        someNumber 
      });
    
      newSomeData 
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          res.send(err);
        });
    }

    const anotherFunc = (req, res) =>{
        someModel
          .find({})
          .then((result) => {
            res.send(result);
          })
          .catch((err) => {
            res.send(err);
          });
      });
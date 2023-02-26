const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register",  (req, res) => {
  res.header( 'Access-Control-Allow-Origin', '*');
  const {fullname, email, password} = req.body;
  if(!email || !password || !fullname){
    res.status(401).json("please fill both fields");
  } else{
    bcrypt.hash(password, 10, (err, hash) => {
      const newUser = new User({
        name: fullname,
        email: email,
        password: hash
      });
  
      newUser.save((err, savedUser) => {
        if(err){
          res.status(500).json(err);
        } else {
          res.status(201).json(savedUser)
        }
      })
    })
  }
  
});

//LOGIN

router.post('/login',  (req, res) => {
  res.header( 'Access-Control-Allow-Origin', '*')
  const {email, password} = req.body;
        if(!email || !password){
          res.status(401).json("please fill both fields");
        }

         User.findOne(
            {
                email: email
            },
            (err, foundUser) => {
              if(err){
                res.status(500).json(err);
              } else{
                if(!foundUser){
                  res.status(401).json("Wrong User Name");
                } else{
                  bcrypt.compare(password, foundUser.password, (err, result) => {
                    if(result){
                      const accessToken = jwt.sign(
                        {
                            id: foundUser._id,
                            isAdmin: foundUser.isAdmin,
                        },
                        "secret",
                            {expiresIn:"7d"}
                        );
                  
                        const { password, ...others } = foundUser._doc;  
                        res.status(200).json({...others, accessToken});
                    }else{
                      res.status(401).json("Wrong Password");
                    }
                  }
                )
              }
            }
          }
        )
  }
);

module.exports = router;

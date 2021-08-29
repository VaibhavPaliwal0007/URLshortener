const Url = require('../models/url')
const validUrl = require('valid-url')
const { nanoid } = require('nanoid')

const PostUrl = async(req, res) => {
      const longUrl = req.body.longUrl

      if(!validUrl.isUri(longUrl)){
          res.status(400).json( "Enter a valid Url!!!" )
      }

      const baseUrl = 'http://localhost:3000/'
      const urlCode = await nanoid(6)

      if(!validUrl.isUri(baseUrl)){
          res.status(501).json( "Internal Server Error!!" )
      }

      try{
        //  if(!longURL.match(/^(https|http):\/\//)){
        //     longURL = "http://" + longURL;
        //  }
        
         var url = await Url.findOne({ longUrl })

          if(url){
              return res.status(200).json(url)
          }

          else{
              var shortUrl = baseUrl + "/" + urlCode

              url = new Url({
                  longUrl : longUrl,
                  shortUrl : shortUrl,
              })

              await url.save()

              return res.status(201).send(url)
          }
      }

      catch(e){
          console.log(e)
          res.status(500).send({ error : "Internal Server Error" } )
      }
}

module.exports = {
     PostUrl
}

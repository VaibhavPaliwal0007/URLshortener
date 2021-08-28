const express = require('express')
const Url = require('../model/urlshortener')
const validUrl = require('valid-url')
const nanoId = require('nanoid')

const routerPost = new express.Router()

routerPost.post('/api/url', async(req , res) => {
    const longUrl = req.body.longUrl
    const baseUrl = process.env.BASE_URL
    
    if(!validUrl.isUri(longUrl)){
        return res.status(400).json( "Invalid url. Enter a valid url!!!")
    }

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json( "Internal Server Error" )
    }

    const urlCode = nanoid()
    console.log(urlCode)

    try{
        const url = await Url.findOne({ longUrl })

        if(url){
            res.status(200).json({ shortUrl })  //url
        }

        else{
            const shortUrl = baseUrl + '/' + urlCode

            url = new Url({
                longUrl,
                shortUrl
            })

            await url.save()
            
            return res.json(url)

        }
    }
    
    catch(e){ 
        res.status(500).send(e)
    }

    module.exports = routerPost
})
const express = require('express')
const app = express()
const { Webhook } = require(`@top-gg/sdk`)
const wh = new Webhook('real')
const fetch = require('node-fetch')

const id = 'WEBHOOKID' //941363432521883658
const token = 'WEBHOOKTOKEN' //0wc8GH5T5xG-sgCFsVWu75qBPnWxkyZJIUdbsS3vcXan627IcoYVOW0GtpXaUzvkNfQL
// This Getting this info it would be in this pattern from the webhook
//https://discord.com/api/webhooks/${id}/${token}

let URL = `https://discord.com/api/webhooks/${id}/${token}`
//https://discord.com/api/webhooks/941363432521883658/0wc8GH5T5xG-sgCFsVWu75qBPnWxkyZJIUdbsS3vcXan627IcoYVOW0GtpXaUzvkNfQL
// 

app.post('/dblwebhook', wh.listener(vote => {
fetch(URL, {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        "content": `<@${vote.user}> Just voted for me at top.gg they can vote again in 12 Hours.` //message 
    })
}).catch(err => console.error(err));
}))


app.listen(3000)

const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const server = express();


server.get('/scrape', (req, res) => {
    const url = 'https://www.imdb.com/title/tt8579674/';

    request(url, (error, response, html) => {
        if (!error) {
            const $ = cheerio.load(html); // $ <= I know, javascript is awesome ...
            const json = {
                title: '',
                release: '',
                rating: '',
            };

            $('.title_wrapper').filter(() => {
                let data = $(this)
                console.log(data.text())
            });
        } else {
            console.log(`Error fetching: ${url}`)
        }
    });

    return res.json({ message: 'Hello World' });
});

server.listen(3000);

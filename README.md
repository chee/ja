# ja

get the japanese audio urls for a word from jisho.org

## installation

this isn't on `npmjs.com`, so if you want to install it you'll need to do this:

```
$ npm i -g https://github.com/chee/ja
```

## librarial interface
```js
const ja = require('ja')

ja({
  term: '犬',
  reading: 'いぬ'
}).then(results => {
  console.log(results[0])
  // => http://d1vjc5dkcd3yh2.cloudfront.net/audio/10ce3f5eb7b4a9a03c4dafce2af60e28.mp3
})
```

you can pass `raw: true` to get a newline separated list as
a string, instead of an array

## command line interface

```sh
# everything
$ ja dog
http://d1vjc5dkcd3yh2.cloudfront.net/audio/10ce3f5eb7b4a9a03c4dafce2af60e28.mp3
http://d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/10ce3f5eb7b4a9a03c4dafce2af60e28.ogg
http://d1vjc5dkcd3yh2.cloudfront.net/audio/45bac2d853cf192d099f3f0fddfdba31.mp3
http://d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/45bac2d853cf192d099f3f0fddfdba31.ogg
http://d1vjc5dkcd3yh2.cloudfront.net/audio/cec22fd7beaa43340c378e17a98fb298.mp3
http://d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/cec22fd7beaa43340c378e17a98fb298.ogg

# by reading
$ ja 犬 -r いぬ
http://d1vjc5dkcd3yh2.cloudfront.net/audio/10ce3f5eb7b4a9a03c4dafce2af60e28.mp3
http://d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/10ce3f5eb7b4a9a03c4dafce2af60e28.ogg

# by filetype
$ ja dog | grep [.]ogg$
http://d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/10ce3f5eb7b4a9a03c4dafce2af60e28.ogg
http://d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/45bac2d853cf192d099f3f0fddfdba31.ogg
http://d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/cec22fd7beaa43340c378e17a98fb298.ogg

# as json (for piping to jq/jshon)
$ ja inu -r いぬ -j
["http://d1vjc5dkcd3yh2.cloudfront.net/audio/10ce3f5eb7b4a9a03c4dafce2af60e28.mp3","http://d1vjc5dkcd3yh2.cloudfront.net/audio_ogg/10ce3f5eb7b4a9a03c4dafce2af60e28.ogg"]

# when there are no results
$ ja pleased to meet you
$ echo $?
1
```

## todo

* more sources

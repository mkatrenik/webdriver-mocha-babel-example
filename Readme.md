#Chimp


##Setup

prerequisites are node & java (& phantomjs if you want to use it)

##First run
```bash
$ npm install
$ npm test
```
(will install selenium)

##Development
`ROOT_URL` is "Sync" url (defaults to http://localhost:3000)

example:
```bash
$ ROOT_URL=http://localhost:3000 npm test
```


##Debugging

for live in browser debugging - put `client.debug()` to your step

for debugging cucmber code, run:
```bash
$ node --debug ./node_modules/.bin/chimp --offline --browser=phantomjs --debugBrkCucumber=5859
```
and in another terminal:
```bash
$ node-inspector
```

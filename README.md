### description:
Given a web endpoint "\GET", create an API prepare an application that will receive as an input an integer number.
- If the integer is a multiple of 3, it should return "G",
- If the integer is a multiple of 5, it should return "N",
- If the integer is a multiple of both 3 and 5, then both "GN" should be displayed.
  otherwise, the provided integer should be returned.


### run dev

add PORT env variavle to .env file (ypu can copy .env.example)
```bash
docker-compose  up --build
```
or
```bash
npm i && npm run dev
```
you can test this app with this urls in your browser

go to: 

localhost:1234/integer/0

localhost:1234/integer/1

localhost:1234/integer/3

localhost:1234/integer/5

localhost:1234/integer/11

localhost:1234/integer/15
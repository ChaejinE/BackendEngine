# Installed pkgs
- express : Web Framework with js engine named nodejs engine
- morgan : When you tooke some request, it shows HTTP Methods, elapsed Time, consumed bytes information
  - dev : "dev"
  - prod : "combined", It makes our API info more detailed
- cookie-parser : It parses automatically cookies
  ```
  req.cookies
  req.signedCookies
  res.cookies("identifierStr", <key>, {
        expires: new Date(),
        httpOnly: boolean,
        path: ...
    })
  ```
- express-session : It is useful for parsing data of HTTP Method
  ```
  req.body.name
  ```
  - express.json() : It parses Client's json data to the req.body
  - express.urlencoded() : It parses Client's form-data

# Installed pkgs
- express : Web Framework with js engine named nodejs engine
  - express.json() : It parses Client's json data to the req.body
  - express.urlencoded() : It parses Client's form-data
  - express.static("url_parameter", "real path") : It's position should be on the code's top
    - if the static file is in the real path, it don't pass to next

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

- sequelize mysql2
- sequelize-cli

- multer : The useful tool which processes form-data from client

- passport
  - When use, it must be next the session middleware
- passport-local
- passport-kakao
- bcrypt

# Auth Flow
- Router /auth/login
- Call passport authenticate method
- Try Starategy
  - authenticate -> passport.use's verify -> auth callback -> Call req.login() -> Call passport.serializeUser() for saving id key in the req.session (to Browser)
  - passport's session middleware -> Call passport.deserializeUser() using id in the req.session for searching User and saving user's info in the req.user so that routers can use common req.user data

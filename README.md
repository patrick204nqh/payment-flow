# PAYMENT FLOW

1. Information
- Frameworks: Sails.js
- Database: SQLite3

2. Setup
- Run sqlite3 web-base locally
```
docker run -it --rm -p 8888:8080 -v $PWD/db:/data -e SQLITE_DATABASE=paymentflow.db coleifer/sqlite-web
```

3. Create new user
```
AuthService.signup({username: "patrick", email: "patrick@co.ca", password: "password"})
```

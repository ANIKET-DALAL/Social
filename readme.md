# Social

## Project Structure

### Backend (Server)

```shell
src
├── controllers         # functions to connect routes to db operations
├── db                  # db connection and model definitions
├── public              # html/js/css files for static part of site
└── routes              # express middlewares (route wise)
```

### Frontend (Client Side Code)

```shell
src
├──public
│    ├── app                                     # our own frontend js code
│    │   └── common.js
│    ├── components                              # own own html snippets
│    │   └── navbar.html
│    ├── css                                     # css libraries we are using
│    │   └── bootstrap.css
│    ├── fonts                                   # fonts that we are using
│    │   ├── Muli-Italic.woff2
│    │   ├── Muli.woff2
│    │   └── muli.css
│    └── js                                      # │js libraries we are using
│        ├── bootstrap.js
│        ├── jquery-3.4.1.js
│        └── popper.js
│
└──views
     └── start.hbs                               # first / home page
```

## Business Logic

### Users

1. **users**
   can login with google.

### Posts

1. **create post**
   this will create a new post, required fields are

   - username (the author of this post)
   - title
   - body

2. **show all posts**
   list all existing posts, we should have following filtering support

   - filter by username
   - filter by query contained in title (search by title)

3. **show all posts of a specific user**
   we should be user id/ username

4. **like posts**

### Comments

1. **show all comments (under a post)**

2. **add a comment**


# Screenshots

![alt text](https://github.com/ANIKET-DALAL/social/blob/main/images/Screenshot1.png)
![alt text](https://github.com/ANIKET-DALAL/social/blob/main/images/Screenshot2.png)
![alt text](https://github.com/ANIKET-DALAL/social/blob/main/images/Screenshot3.png)
![alt text](https://github.com/ANIKET-DALAL/social/blob/main/images/Screenshot4.png)

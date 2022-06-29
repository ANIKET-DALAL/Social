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
│    ├── app                                     # frontend js code
│    │   └── common.js
│    ├── components                              # html snippets
│    │   └── navbar.html
│    ├── css                                     # css libraries
│    │   └── bootstrap.css
│    ├── fonts                                   # fonts
│    │   ├── Muli-Italic.woff2
│    │   ├── Muli.woff2
│    │   └── muli.css
│    └── js                                      # js libraries
│        ├── bootstrap.js
│        ├── jquery-3.4.1.js
│        └── popper.js
│
└──views
     └── start.hbs                               # first / home page
```

### Users

1. **users**
   can login with google.

### Posts

1. **Create post**
   this will create a new post, required fields are

   - username (the author of this post)
   - title
   - body

2. **Show all posts**
   list all existing posts, we should have following filtering support

   - filter by username
   - filter by query contained in title (search by title)

3. **Show all posts of a specific user**
   we should be user id/ username

4. **Like posts**

5. **Delete post**

### Comments

1. **Show all comments (under a post)**

2. **Add a comment**


# Screenshots

![alt text](https://github.com/ANIKET-DALAL/social/blob/main/images/Screenshot%201.png)
![alt text](https://github.com/ANIKET-DALAL/social/blob/main/images/Screenshot%202.png)
![alt text](https://github.com/ANIKET-DALAL/social/blob/main/images/Screenshot%203.png)
![alt text](https://github.com/ANIKET-DALAL/social/blob/main/images/Screenshot%204.png)

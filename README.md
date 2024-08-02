# Message-Board

adding tailwind to any project:
- install as it is from website tailwind
- alter the railwind.config.js file content to where ur ejs file is located and the extensions to be read
- add input.css files and put those utility classes
- npm install concurrently and add the script to watch:  
    "watch":"concurrently \"nodemon app.js\" \"tailwindcss -i ./src/input.css -o ./dist/output.css --watch\""
- move the output.css file to proper location
- in server.js or app.js add 
    - app.use(express.static('public'))
    - app.use('/css',express.static('dist')) //wherever css file is located
       
- in the ejs file : add link tag in head of html : <!-- <link rel="stylesheet" href="/css/output.css"> -->

ez

Issues:
- opening the confessions
- liking it
- 
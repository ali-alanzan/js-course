Author: Ali Alanzan
This file is at the main root which contains the ( nodeServer folder ) and other files


RUN YOUR NODE SERVER

    ###1   please download and install node js on your machine
    ###2   in the nodeServer folder open the command line on windows or the terminal on mac and linux
    ###2   
        forHelp:
        open the command line on windows or the terminal on mac and linux
        on Windows system on your keyboard press ( The start windows button + R )
            type cmd
            press Enter
        on Linux press on your keyboard ( Ctrl + Alt + T )  
        on Mac press 
            Press Command + Space Bar on your Mac Keyboard. 
            Type in “Terminal” When you see Terminal in the Spotlight search list, 
            click it to open the app
        Drag And Drop the index.js file in the terminal
        remove all Spaces and single quetation like this ( ' )  or this ( " )
        before the text of the path for the index.js file type node, Examples:
        node C:\Users\Path\nodeServer\index.js  
    

    
After get the node server listening on http://localhost:3000

    Use PostMan Application or XHR APIs

    Routes:
        1.  route: http://localhost:3000/requests
            Description: GET Members, will show first 3 members as the pagination concept is applied
            method: get
            name: posts
            URL Parameters:
            Optional Parameters: 
            id   :  Example: http://localhost:3000/requests?phone=1 
            page :  Example:  http://localhost:3000/requests?page=2
            limit:  Example:  http://localhost:3000/requests?limit=10

        2.  route: localhost:3000/requests
            Description: Create file for every new member by the phone number 
            method: requests
            Required Data
            JSON body Object Keys And Types:
                - String: memberName, avatar, description
                - Object: Services


###3 USE VSCode Application then by the live server extenstion
    Click Options on index.html then choose Open with live  server extenstion,
    which will open a web page like: http://127.0.0.1:5500


const minimist=require('minimist');
const args=minimist(process.argv.slice(2));
const port=parseInt(args.port);




const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let regcontent="";
fs.readFile("home.html", (err, home) => {
    if (err) throw err;
    homeContent = home;
  
    fs.readFile("project.html", (err, project) => {
      if (err) throw err;
      projectContent = project;

      fs.readFile("registration.html",(err,registration)=>{
        if(err) throw err;
        regcontent=registration;

      
  
     
      http.createServer((request, response) => {
        let url = request.url;
        response.writeHead(200, { "Content-Type": "text/html" });
  
        if (url === "/project") {
          response.write(projectContent);
        } 
        else if(url==="/registration"){
            response.write(regcontent);
        }
        else {
          response.write(homeContent);
        }
  
        response.end();
      }).listen(port);
    });
    });
  });

  
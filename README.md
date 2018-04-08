# MyGit.website
Fucking easy to publish a website in a devops way.

## How to use it
### Register your github repository
Use the fucking form at [http://mygit.website](http://mygit.website) to register your github repository and we'll send you the webhook settings by mail. 

### The email from devops@mygit.website
In the damn email content you will find the `payload url` and the `secret`. 

### Don't be an asshole and set it up
Shit, setting up a `JSON (application/json)` webhook in github is the easiest thing in the world, but if you have problems, [RTFM](https://developer.github.com/webhooks/creating/). 

### If you've made it this far, you're a champion. Sarcasm
Add the file `.mygit.website.yml` to your repository. Setting it up is very easy. Indicate the path where your website is located inside the repository, indicate the start and error pages. Push it. 

### Too difficult?
[Take an example in this repository](./.mygit.website) and, to top it off, down here:

```bash
path: dist # The path where you have the website inside the repository
index: index.html # The index file
error: error.html # The error file
```                     

## E2E Example - Row Video
[![MyGit.Website](https://i.vimeocdn.com/video/692041793.jpg?mw=700&mh=393)](https://vimeo.com/262701474 "E2E Example - Row Video")

## Roadmap
I would love to be able to make this project a great product.

The way to follow is up to you, `developers`.
Any ideas you may have are welcome and can be translated into github issues.

Once they are assessed and understood, i will be able to develop them.

You can take a look at one of the ideas to implement in the [next github issue](https://github.com/angelbarrera92/mygit.website/issues/1).

## Changelog
### First Release 7th april, 2018
Allows you to deploy a simple web by specifying the repository path where the web page source code is located and specifying the index and error pages location.
[Web registration](http://mygit.website) and email notifications.
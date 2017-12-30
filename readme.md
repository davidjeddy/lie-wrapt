# Lie-Wrapt Dev Web Application

## Background
A friend from high school wanted a website for his band; this was the result.

## Features
 
## Goal
Simply to keep some of the original projects that got me into web technologies alive and viewable for the public. Also
gives me a body of content to try new system architecture with.

## Requirements
 - Docker
 - Command prompt of some sort
 
## Road map
None; this project repository is for historic reference only.

## Usage
Clone the repository locally:
```
cd /project/root/parent
git clone https://github.com/davidjeddy/liw-wrapt.git
cd ./lie-wrapt
```

Then build and start the image via:

```
docker build -t lie_wrapt . --rm
docker run -d -h localhost -p 80:80 --name lie_wrapt_app -v "$PWD":/var/www/html lie_wrapt:latest --rm
docker logs -f lie_wrapt_app
```

Finally, if all went well, you should be able to visit `localhost` in your client browser of choice and see the 
application running.

## Warning
This was a hobby project but an untrained `web developer` on long ago end of life of a language that has come a very 
long way since 2002.
Though recent wrapped in a docker container for portability this site IS NOT:
 - Secure
 - Pragmatic
 - Best practice adhering
 - An example of any sort of decent practices; if anything this is what you should NOT be doing

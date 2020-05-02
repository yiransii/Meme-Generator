# Meme-Generator


Task(s):

1: provide an input that allows a user 

2: search for images on Flickr that match a given string

3: present search results:  images 

4: then allow a user to select one 

5: allow a user to enter some text that appears above, below or as an overlay on top of the image


--------------------------------------------------------
Flickr APP KEY:
*********Done! Here's the API key and secret for your new app:
	meme
Key:
21464a195f014a8659b27ffc98d3ca7c

Secret:
cfae3e283b73f9a2

--------------------------------------------------------
Flickr API:

1. The Photo Source URLs page in the documentation explains it:

You can construct the source URL to a photo once you know its ID, server ID, farm ID, and secret, as returned by many API methods. The URL takes the following format:
https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg


2. fetch a list of img:
https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=APIKEY&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1

https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=21464a195f014a8659b27ffc98d3ca7c&

--------------------------------------------------------
structure:

2 web pages
search:
    -display input box, takes query
    -fetch img from Flickr and display imgs
    -if user lick on any img, jump to generate: <a href="/generate/img={img_url}">
generate:
    - if request.get.img = None, ??? falt hadling 
    - get text msg that user wanna put on img
    - use canvas. getelementbyid. draw methods
    - pop up download img file... ??


--------------------------------------------------------
problems:
1. javascript might not render..... 
2. 


--------------------------------------------------------
TODO: 
make sure bin/install works: !add --nodeenv for javascript package installation

implement history?


error checking and handling
FilmsFink Documentation
=

Technologies Used
-

-	NodeJS - custom made html compilation system - compiles/compresses html/css/js on compile time
-	Mustache templates - compilation library for html
-	LessCSS - CSS preprocessor / compiler
-	YUI-Compressor - Used for JS/CSS compression
-	JQuery - front end library
-	Modernizr - used for browser feature detection / isolation
-	PHP - email backend

Notes
-

-	Note that you don't need Node to edit html after compile time. The site is compiled to only static assets for easy deployment
-	HTML5/CSS3 - all front-end work is built up to the latest standards. Vendor Prefixes added in later, after the fact
-	Javascript - follows best practices. I use custom implementation of the AMD module system. To add js later, it is recommended to create a new file and append to the bottom footer list. My javascript is compiled, compressed and obfuscated for speed.

Image Change Directions
-

-	The best way to changes images without editing source code for the html is to actually replace the images. All images should .png files. 
-	Log in to the server directory. This is the place where code is stored etc. You should see an index.html, surrealism.html resources etc files / directories. Navigate to the images/video_thumbnails directory. Replace files as you see fit here and they will be reflected on the site
-	Be sure image is a png and the same file name as the one you replace

SEO Changes
-

-	To change SEO Keywords / Changes you will need to update the <head> tag of each html page. Simply open the *.html pages (index.html, surrealism.html etc) in your favorite text editor. 
-	You will see several tags such as <!Doctype html><head> and some <meta > tags. The meta tags are the ones you will want to change
-	The <meta name='description'> tag is your description, this is the text that will show up when google indexes your page (when you search the site this will show)
-	The <meta name='keywords'> tag consists of the keywords that will help link your webpage to google's indexed keywords.

Other Notes
-

-	Most changes you would want to make will take me seconds to perform on my machine, as I have built the programs and technologies that compile the site for me. Feel free to email me at <morehousej09@gmail.com> and we can discuss the details / rates.




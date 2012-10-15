OpenLayers Cookbook
===================

This is the source code that accompanies the book [OpenLayers Cookbook](http://acuriousanimal.com/blog/2012/09/02/openlayers-cookbook-is-out/)
from [Packt Publishing](http://www.packtpub.com/openlayers-create-gis-web-applications-cookbook/book).

*Author:* [Antonio Santiago](http://acuriousanimal.com)

*Version 1.1* 

Version 1.1
-----------

* Use of [Dojo Toolkit](http://dojotoolkit.org/) from Google CDN (`<script src="//ajax.googleapis.com/ajax/libs/dojo/1.8.0/dojo/dojo.js"></script>`)
* Updated Dojo version to 1.8
* Updated OpenLayers version to 2.12
* Source code updated to use Dojo 1.8 syntax (using HTML5 <code>data</code> attribute) instead old
one (non standar <code>dojoType</code>).
* Source code highlighted via [CodeMirror](http://codemirror.net/) project.

Version 1.0
-----------

This is the original version available at Packt Publishing site.

Requirements
------------

To run the code samples of the book you need HTTP server with PHP support. 
PHP is only required for those recipes that load content via AJAX (like WFS), 
so you can run many of them on a server without PHP support.

How to run the examples
-----------------------

Copy the project folder within your HTTP server and open the 'index.html' file,
for example, accessing: http://localhost:8080/openlayers-cookbook/index.html.

We have prepared an application with a main menu on top, where user can 
choose and run the desired recipe. 

Each recipe will be opened in a new tab, where user will see two subtabs, first with
the recipe results and the second with the recipe code.

Content of the project folder
-----------------------------

The summary of the project folder is:

* `\css` - CSS files for the user interface.

* `\defs` - Projection definitions from the [Proj4js](http://trac.osgeo.org/proj4js/) project required on some recipes of the book.

* `\js` - Contains code for the libraries the project depends on.

* `\js\OpenLayers-2.12` - OpenLayers library version 2.11. The book samples has coded with
                          this version, so here is the same version. Maybe some things can be changes
                          or deprecated in future version, so it is better to have the exact version here.

* `\js\proj4js-1.1.0` - [Proj4js](http://trac.osgeo.org/proj4js/) project code. OpenLayers depends on this project for some operations.

* `\js\codemirror-2.34` - [CodeMirror](http://codemirror.net/) project code. The source code is highlighted using it with the `eclipse` theme.

* `\nbproject` - NetBeans custom files. The project was coded using NetBeans IDE. This
         folder is helpful for those user that wants to edit book samples on NetBeans.

* `\recipes` - The set of recipes ordered by chapter number.

* `\recipes\data` - Some data files (images, JSON, etc) used on the recipes.

* `\utils` - Contains PHP programs used on some recipes.

* `\utils\proxy.php` - A proxy PHP script from MapBuilder project. This is required on some recipes.

* `\utils\points.php` - A PHP script that generates random points and returns them in JSON format.



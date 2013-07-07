# OpenLayers Cookbook

This is the source code that accompanies the book [OpenLayers Cookbook](http://acuriousanimal.com/blog/2012/09/02/openlayers-cookbook-is-out/)
from [Packt Publishing](http://www.packtpub.com/openlayers-create-gis-web-applications-cookbook/book).

You can view it online at: (http://acanimal.github.com/Openlayers-Cookbook/)

*Author:* [Antonio Santiago](http://acuriousanimal.com)

*Version 1.1* 

## Changes

### Version 1.1

* Use of [Dojo Toolkit](http://dojotoolkit.org/) from Google CDN (`<script src="//ajax.googleapis.com/ajax/libs/dojo/1.8.0/dojo/dojo.js"></script>`)
* Updated Dojo version to 1.8
* Updated OpenLayers version to 2.12
* Source code updated to use Dojo 1.8 syntax (using HTML5 <code>data</code> attribute) instead old
one (non standar <code>dojoType</code>).
* Source code highlighted via [CodeMirror](http://codemirror.net/) project.
* Use of relative paths to load data files (attached to the project).

### Version 1.0

This is the original version available at Packt Publishing site.

## How to run the examples ?

### Requirements

To run the code samples of the book you need HTTP server with PHP support. 
PHP is only required for those recipes that load content via AJAX (like WFS), 
so you can run many of them on a server without PHP support.

### Installation

Copy the project folder within your HTTP server and open the 'index.html' file,
for example, accessing: `http://localhost:8080/openlayers-cookbook/index.html`.

We have prepared an application with a main menu on top, where user can 
choose and run the desired recipe. 

Each recipe will be opened in a new tab, where user will see two subtabs, first with
the recipe results and the second with the recipe code.

## How it works ?

When the application starts, by accessing to the `index.html` the `chapters.json` file
is read.

The `chapters.json` file contains the name of chapters, recipes and references to
each recipe applications, for example:

    {
        "name": "Chapter01 - Mapping Basics",
        "recipes": [
            {"name": "Creating simple map", "url": "recipes/ch01/ch01_simple_map.html"},
            {"name": "Base and non-base layers", "url": "recipes/ch01/ch01_base_non_base.html"},
            {"name": "Avoiding base layers", "url": "recipes/ch01/ch01_avoid_baselayer.html"},
            {"name": "Playing with map options", "url": "recipes/ch01/ch01_playing_map_options.html"},
            {"name": "Managing map's stack layers", "url": "recipes/ch01/ch01_managing_layers.html"},
            {"name": "Managing controls", "url": "recipes/ch01/ch01_managing_controls.html"},
            {"name": "Moving around the map view", "url": "recipes/ch01/ch01_moving_around.html"},
            {"name": "Restricting the map extent", "url": "recipes/ch01/ch01_restricting_view.html"},
            {"name": "Tweening", "url": "recipes/ch01/ch01_tweening.html"}
        ]
    },
    ...


## Content of the project folder

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

## License

<a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">OpenLayers Cookbook Examples</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://acuriousanimal.com/" property="cc:attributionName" rel="cc:attributionURL">Antonio Santiago</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/acanimal/Openlayers-Cookbook" rel="dct:source">https://github.com/acanimal/Openlayers-Cookbook</a>.

//
// Executed once the DOM content is loaded
//
require([
    "dojo/ready", 
    "dojo/parser", 
    "dojo/_base/array", 
    "dijit/registry",
    "dojo/_base/lang",
    "dojo/request/xhr",
    "dojox/layout/ContentPane",
    "dijit/form/Textarea"
    ], function(ready, parser, array, registry, lang, xhr){
        ready(function(){
        
            //
            // Initialize menubar with the values of 'chapters' variable
            //
            function initMenu() {
                var menubar = registry.byId('navMenu');
            
                // Load chapters JSON file
                var deferred = xhr("./chapters.json", {
                    handleAs: "json",
                    preventCache: true
                }).then(function(chapters) {
                    // Process chapters to create the menu
                    array.forEach(chapters, function(chapter, i) {
                        // Create new menu for the chapter
                        var menu = new dijit.Menu({});
                        var menubaritem = new dijit.PopupMenuBarItem({
                            label: chapter.name,
                            popup: menu
                        });
                    
                        array.forEach(chapter.recipes, function(receipt, j) {
                            // Create menu entry
                            var menuitem = new dijit.MenuItem({
                                label: receipt.name,
                                receipt: receipt,
                                onClick: function(event) {
                                    if(receipt.external) {
                                        window.open(receipt.url, receipt.name);
                                        return;
                                    }
                                        
                                    var tabcontainer = registry.byId('receiptTabs');
                                    if(!isReceiptTabOpened(receipt.name)) {
                                            
                                        var nestedtab = new dijit.layout.TabContainer({
                                            title: receipt.name,
                                            closable: true,
                                            nested: true
                                        });

                                        var resultPane = new dojox.layout.ContentPane({
                                            title: "Result", 
                                            closable: false,
                                            preventCache: true,
                                            href: receipt.url
                                        });
                                            
                                        var codePane = new dijit.layout.ContentPane({
                                            title: "code", 
                                            closable: false,
                                            preventCache: true,
                                            receiptUrl: receipt.url,
                                            style: "overflow: auto; width: 100%; height: 100%;",
                                            onShow: function() {
                                                if(!this.sourceCode) {
                                                    xhr(this.receiptUrl, {
                                                        handleAs: "text",
                                                        preventCache: true
                                                    }).then(lang.hitch(this, function(data) {
                                                        this.sourceCode = data;

                                                        var textArea = new dijit.form.Textarea({
                                                            value: data,
                                                            style: "width: 100%, height: 100%"
                                                        });
                                                        this.set('content', textArea);

                                                        // Create Codemirror editor
                                                        var cm = CodeMirror.fromTextArea(textArea.domNode, {
                                                            mode: "htmlmixed",
                                                            lineNumbers: true,
                                                            readOnly: true,
                                                            theme: "eclipse"
                                                        });
                                                    }), function(error) {
                                                        var dialog = new dijit.Dialog({
                                                            title: "Error !!!",
                                                            content: "Sorry there was an error loading the source code for this receipt.",
                                                            style: "width: 200px"
                                                        });
                                                        dialog.show();
                                                    });
                                                }
                                            }
                                        });
                                        nestedtab.addChild(resultPane);
                                        nestedtab.addChild(codePane);
                                        tabcontainer.addChild(nestedtab);
                                        tabcontainer.selectChild(nestedtab);
                                    } else {
                                        var receiptTab = getReceiptTab(receipt.name);
                                        if(receiptTab) {
                                            tabcontainer.selectChild(receiptTab);
                                        }
                                    }
                                }
                            });
                            menu.addChild(menuitem);
                        });
                        menubar.addChild(menubaritem);
                    });
                        
                    registry.byId('borderContainer').resize();
                },
                function(error) {
                    var dialog = new dijit.Dialog({
                        title: "Error !!!",
                        content: "Sorry there was an error loading the JSON file with chapters.",
                        style: "width: 200px"
                    });
                    dialog.show();
                });
            }
            
            //
            // Check if the receipt tab with the given name is opened.
            //
            function isReceiptTabOpened(name) {
                var tabcontainer = registry.byId('receiptTabs');
                var recipes = tabcontainer.getChildren();
                for(var i=0; i< recipes.length; i++) {
                    if(recipes[i].get('title') == name) {
                        return true;
                    }
                }
                return false;
            }
            
            //
            // Given a name returns a reference to the corresponding
            // receipt tab.
            //
            function getReceiptTab(name) {
                var tabcontainer = registry.byId('receiptTabs');
                var recipes = tabcontainer.getChildren();
                for(var i=0; i< recipes.length; i++) {
                    if(recipes[i].get('title') == name) {
                        return recipes[i];
                    }
                }
                return null;
            }
        
            // Initialize main menu
            initMenu();
        });
    });

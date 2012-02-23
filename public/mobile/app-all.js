/*
Copyright(c) 2011 Code for America
*/
Ext.Loader.setConfig({enabled:true});Ext.Loader.setPath({GuideToAmerica:"app"});Ext.application({name:"GuideToAmerica",tabletStartupScreen:"resources/images/tablet_startup.png",phoneStartupScreen:"resources/images/phone_startup.png",icon:"resources/images/icon.png",glossOnIcon:false,models:["Category"],stores:["Categories"],views:["Main"],controllers:["Application"],launch:function(){Ext.Viewport.add({xclass:"GuideToAmerica.view.Main"})}});

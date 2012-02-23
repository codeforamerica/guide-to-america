/*
Copyright(c) 2011 Code for America
*/
Ext.Loader.setConfig({enabled:true});Ext.Loader.setPath({GuideToAmerica:"app"});Ext.application({name:"GuideToAmerica",tabletStartupScreen:"resources/images/tablet_startup.png",phoneStartupScreen:"resources/images/phone_startup.png",icon:"resources/images/icon.png",glossOnIcon:false,controllers:["Cities"],requires:["Ext.data.Store","Ext.List","Ext.field.Search","Ext.Toolbar","Ext.Loader"]});

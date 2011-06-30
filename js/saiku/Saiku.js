/**
 * Central object for handling global application state
 */
var Saiku = {
    settings: {
        PLUGIN: false,
        BASE_URL: "/",
        TOMCAT_WEBAPP: "saiku/",
        REST_MOUNT_POINT: "rest/saiku/"
    },
    toolbar: new Toolbar,
    tabs: new TabSet,
    session: new Session
};

/**
 * Setting this option to true will fake PUT and DELETE requests 
 * with a HTTP POST, and pass them under the _method parameter. 
 * Setting this option will also set an X-HTTP-Method-Override header 
 * with the true method. This is required for BI server integration
 */
Backbone.emulateHTTP = false;

Saiku.settings.REST_URL = Saiku.settings.BASE_URL
    + Saiku.settings.TOMCAT_WEBAPP 
    + Saiku.settings.REST_MOUNT_POINT;
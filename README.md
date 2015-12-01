SAIKU
---------------
*WHAT*

Saiku release 3.6 patched with MySQL support instead of builtin:
 - h2: users and roles
 - derby: schema configurations

*WHY*

This gives you an ability to create a load balanced or HA solution with saiku server.

*HOW*

Update mysql configuration in files:
 - saiku-core/saiku-service/src/test/resources/repo-conf.xml
 - saiku-webapp/src/main/webapp/WEB-INF/applicationContext-spring-security-jdbc.xml
 - saiku-webapp/src/main/webapp/WEB-INF/saiku-beans.xml
 - saiku-webapp/src/main/webapp/WEB-INF/web.xml
 - util/configuration.xml

*BUILDING*

mvn3 clean install -DskipTests

*AFTER BUILD*

You need to manualy add commons-math-2.0.jar to "saiku/WEB-INF/lib"

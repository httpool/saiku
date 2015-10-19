SAIKU
---------------
*WHAT*

Saiku release 3.6 patched with MySQL support instead of builtin h2 and derby.

*HOW*

Update mysql configuration in files:
 - saiku-core/saiku-service/src/test/resources/repo-conf.xml
 - saiku-webapp/src/main/webapp/WEB-INF/applicationContext-spring-security-jdbc.xml
 - saiku-webapp/src/main/webapp/WEB-INF/saiku-beans.xml
 - saiku-webapp/src/main/webapp/WEB-INF/web.xml
 - util/configuration.xml

*BUILDING*

mvn clean install -DskipTests

# citrus-simulator
Standalone simulator for different messaging transports such as Http REST, SOAP WebService, JMS, RMI, mail messaging and more

Добавление зависимости в проект
-------------------------------
Указываем ремозиторий:  
```xml
        <repositories>
            <repository>
                <id>citrus-simulator-mvn-repo</id>
                <url>https://raw.github.com/lanit-izh/citrus-simulator/mvn-repo/</url>
                <snapshots>
                    <enabled>true</enabled>
                    <updatePolicy>always</updatePolicy>
                </snapshots>
            </repository>
        </repositories>
```
Добавляем зависимость:  
```xml
        <dependency>
            <groupId>com.consol.citrus</groupId>
            <artifactId>citrus-simulator-starter</artifactId>
            <version>${citrus.simulator.version}</version>
        </dependency>
```

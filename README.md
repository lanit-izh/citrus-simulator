Citrus Simulator ![Logo][1]
================
Изменённая версия `simulator-starter 1.1.0`

Список изменений
----------------------
* Добавлена генерация payload для MapProperty, DecimalProperty и ObjectProperty
* Отключена валидация входящего тела запроса
* Добален выход из рекурсии при генерации payload


Ограничения
-----------
* Генерация ответов только со статус кодом '200'
* Поддерживаемые Http методы: GET, PUT, POST, HEAD, DELETE
* Генерация тела ответа только в формате Application/Json
* При генерации JSON объекта с рекурсивной вложенностью , на 3-ей итерации возвращается пустой объект  

Как добавить в проект Maven  
----------------------
Указываем репозиторий:  
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
Заменяем зависимость `citrus-simulator-starter` на модифицированную:
```xml
        <dependency>
            <groupId>com.consol.citrus</groupId>
            <artifactId>citrus-simulator-starter-edited</artifactId>
            <version>1.1.0</version>
        </dependency>
```

Официальная документация: http://citrusframework.org/citrus-simulator  
Видео про Citrus Simulator: https://youtu.be/4DvLujQv6Yc

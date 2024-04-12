# Contribution

## Entwicklungsprozess

### Frontend-Entwicklung
Das Frontend basiert auf einem Vue-Projekt, welches sich im `src`-Verzeichnis befindet.

Für den Start des Frontends sind folgende Schritte im Hauptverzeichnis notwendig:

1. Ausführen von `npm install`, um alle notwendigen Pakete zu installieren.
2. Ausführen von `npm start`, um das Frontend-Projekt zu starten.

Das Frontend wird unter http://127.0.0.1:8081/ erreichbar sein

### Datenbank-Konfiguration
Das Projekt verwendet PouchDB, um Daten lokal zu speichern und kann diese mit einer fernen PouchDB/CouchDB Instanz synchronisieren. Diese kann in den Einstellungen der Web-UI (rechts oben) definiert werden. Beide Instanzen brauchen keine manuelle Einrichtung, wobei die ferne mit `docker-compose` zusammen mit dem Webserver aufgesetzt wird. 

Vor dem Start einer Instanz müssen Couchdb Eingangsdaten in der `couchdb.env`-Datei im folgenden Format angegeben werden:

```ini
COUCHDB_USER=<BENUTZERNAME>
COUCHDB_PASSWORD=<PASSWORT>
```

Des Weiteren muss CORS-Zugriff zur Datenbank nach [folgender Anleitung](https://github.com/ibm-watson-data-lab/shopping-list-vuejs-pouchdb/?tab=readme-ov-file#2-enable-cors) eingeschaltet werden. Nach dem Start der Instanz kann die Datenbankverbindung in den Einstellungen mittels folgendem URL hergestellt werden:

```
http://<BENUTZERNAME>:<PASSWORT>@127.0.0.1:5984/shopping_cart
```

### Testverfahren
Dieses Projekt verwendet [Cypress Testing Framework](https://www.cypress.io/). Die Tests können lokal mit `npm test` ausgeführt werden. Weitere tests konnen in der Cypress-UI mit `npm run cy:open` hinzugefügt werden. Die E2E Tests befinden sich dann im `cypress/e2e` Verzeichnis.

### Weiterführende links
[VueJS Reference](https://vuejs.org/api/)
[PouchDB Reference](https://pouchdb.com/api.html)

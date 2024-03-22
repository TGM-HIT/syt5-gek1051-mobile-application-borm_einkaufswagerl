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

### Testverfahren
Dieses Projekt verwendet [Cypress Testing Framework](https://www.cypress.io/). Die Tests können lokal mit `npm test` ausgeführt werden. Weitere tests konnen in der Cypress-UI mit `npm run cy:open` hinzugefügt werden. Die E2E Tests befinden sich dann im `cypress/e2e` Verzeichnis.

# 👓 Introduction to Angular

## ⚙️ Install Angular CLI

> The Angular CLI is an indispensable tools for create, manage and deploy Angular applications.

Install it globaly with CLI :

```
npm i -g @angular/cli
```

Check if the installation is done correctly with :

```
ng v
```

> ⚠️ Mac User may have an error during the installation `EACCES: permission denied`. If it's the case, follow this guide in the [npm doc](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).

💡 I choosed to use docker instead, and install the CLI in a container

> Access to a bash in a container `docker-compose run --rm angular-service sh`

## Generate component w/ CLI

```
ng generate component face-snap
```

Output :

```bash
Global setting: not set
Local setting: enabled
Effective status: enabled
CREATE src/app/face-snap/face-snap.component.scss (0 bytes)
CREATE src/app/face-snap/face-snap.component.html (24 bytes)
CREATE src/app/face-snap/face-snap.component.ts (287 bytes)
UPDATE src/app/app.module.ts (406 bytes)
```

## Data-biding

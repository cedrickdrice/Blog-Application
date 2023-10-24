# Laravel Project

## Release version
```
php version : 7.3.1
Laravel version: 6.2
composer version: 1.9.2
```

## Expose Port
80

## Home directory
/home/apps/www

## configure
### env

dev [default]
<br/>
qa
<br/> 
prod

### dev
```
APPS_ENV='dev' // default
/docker/dev/apache
/docker/dev/php
```

### qa
```
APPS_ENV='qa'
/docker/qa/apache
/docker/qa/php
```
### prod
```
APPS_ENV='prod'
/docker/prod/apache
/docker/prod/php
```

## Precautions
- Do not change **.gitlab-ci.yml** Files.
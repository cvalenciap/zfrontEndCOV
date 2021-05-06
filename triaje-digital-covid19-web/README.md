# DigitalTriageWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Fuente de Ubigeo

La equivalencia de ubigeos se obtuvieron desde [Ubigeo](https://github.com/CONCYTEC/ubigeo-peru)

Esquema sugerido para tablas:

CREATE TABLE ubigeo(
   cod_dep_inei       CHAR(2),
   desc_dep_inei      VARCHAR(13),
   cod_prov_inei      CHAR(4),
   desc_prov_inei     VARCHAR(25),
   cod_ubigeo_inei    CHAR(6),
   desc_ubigeo_inei   VARCHAR(36),
   cod_dep_reniec     CHAR(2),
   desc_dep_reniec    VARCHAR(23),
   cod_prov_reniec    CHAR(4),
   desc_prov_reniec   VARCHAR(25),
   cod_ubigeo_reniec  CHAR(6),
   desc_ubigeo_reniec VARCHAR(30),
   cod_dep_sunat      CHAR(2),
   desc_dep_sunat     VARCHAR(23),
   cod_prov_sunat     CHAR(4),
   desc_prov_sunat    VARCHAR(25),
   cod_ubigeo_sunat   CHAR(6),
   desc_ubigeo_sunat  VARCHAR(36)
);

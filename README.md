## Branches:
- master: código en el cual estaremos trabajando las siguientes clases
- one-oulet: ejemplo con ruteo mas sencillo, usando solo un router-oulet

## Pasos para ejecutar Backend

Nos ubicamos a nivel de la carpeta Backend (AN-N6A_TEC-Angular\Backend\)

```
	 dotnet restore
```

```
	 dotnet build
```

#### Crear DB
```
dotnet ef database update  -p CityInfo.DataAccess -s CityInfo.API
```

#### Ejecutar webApi
Nos ubicamos a nivel de la carpeta CityInfo.API (AN-N6A_TEC-Angular\Backend\CityInfo.API)


```
dotnet run CityInfo.API
```


[Readme del proyecto de Angular](angular/cityInfo/README.md)

[Configurar CORS](cors.md)

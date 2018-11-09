## Configuración de CORS

Existen varias maneras, a continuacion, una de ellas.

```
       public void ConfigureServices(IServiceCollection services)
       {
           ...
           services.AddCors(options =>
           {
               options.AddPolicy("CorsPolicy",
                   builder => builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader()
                       .AllowCredentials() );
           });
           ...
       }

       public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory logFactory)
       {
           ...

           app.UseStatusCodePages();

           app.UseCors("CorsPolicy");

           app.UseMvc();
       }
   }
```

Es importante en orden de invocación.

Fuente: https://weblog.west-wind.com/posts/2016/Sep/26/ASPNET-Core-and-CORS-Gotchas

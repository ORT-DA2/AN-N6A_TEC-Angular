﻿using CityInfo.Contracts.DataAccess;
using CityInfo.Contracts.Services;
using CityInfo.DataAccess;
using CItyInfo.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace CityInfo.API
{
    public class Startup
    {
        public static IConfigurationRoot Configuration;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appSettings.json", optional: false, reloadOnChange: true);

            Configuration = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            //https://weblog.west-wind.com/posts/2016/Sep/26/ASPNET-Core-and-CORS-Gotchas
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials() );
            });

            // add asp net core mvc
            services.AddMvc(o => o.OutputFormatters.Add(new XmlDataContractSerializerOutputFormatter()));


            // methods for adding custom services
            // services.AddTransient<Interface, concreteType/concreteImplementation>() created each time they are requested
            // services.AddScoped()   created one per request
            // services.AddSingleton() created first time requested or to provide a specific instance

            //DATA ACCESS
            services.AddScoped<ICityDataAccess, CityStorage>();
            // services.AddScoped<IPointOfInterestDataAccess, CityStorage>();
            services.AddScoped<ISessionRepository, SessionStorage>();
            services.AddScoped<IUserDataAccess, UserStorage>();

            //SERVICES
            services.AddScoped<ICityService, CitySevice>();
            // services.AddScoped<IPointOfInterestService, CitySevice>();
            services.AddScoped<IUserService, UserService>();
           

            services.AddDbContext<CityInfoContext>(o => o.UseSqlServer(@"Server=.;Database=CityInfo;Trusted_Connection=True;"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory logFactory)
        {
            logFactory.AddDebug(LogLevel.Debug);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStatusCodePages();

            app.UseCors("CorsPolicy");

            app.UseMvc();
        }
    }
}

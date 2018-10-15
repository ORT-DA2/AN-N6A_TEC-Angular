﻿// <auto-generated />
using System;
using CityInfo.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CityInfo.DataAccess.Migrations
{
    [DbContext(typeof(CityInfoContext))]
    [Migration("20180924195754_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.3-rtm-32065")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CityInfo.Contracts.Services.Entities.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description");

                    b.Property<int?>("ImageId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("ImageId");

                    b.ToTable("Cities");

                    b.HasData(
                        new { Id = 1, Description = "Great park in the middle", Name = "New York City" },
                        new { Id = 2, Description = "the capital city and most populous municipality of the Commonwealth of Massachusetts in the United States.", Name = "Boston" },
                        new { Id = 3, Description = "It was founded by the Romans, who named it Londinium", Name = "London" }
                    );
                });

            modelBuilder.Entity("CityInfo.Contracts.Services.Entities.CityImage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("ContentType");

                    b.Property<byte[]>("Image");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("CityImages");
                });

            modelBuilder.Entity("CityInfo.Contracts.Services.Entities.PointOfInterest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CityId");

                    b.Property<string>("Description");

                    b.Property<string>("Name")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("PointsOfInterest");
                });

            modelBuilder.Entity("CityInfo.Contracts.Services.Entities.Session", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Role");

                    b.HasKey("Id");

                    b.ToTable("Sessions");

                    b.HasData(
                        new { Id = new Guid("d48cd89b-a7d9-4823-8cce-dddbe9b97356"), Role = "Admin" },
                        new { Id = new Guid("6f5ca935-11d3-4ee2-9b9c-d767f6da8ed8"), Role = "User" }
                    );
                });

            modelBuilder.Entity("CityInfo.Contracts.Services.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.Property<string>("Password");

                    b.Property<Guid?>("SessionId");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("SessionId");

                    b.ToTable("Users");

                    b.HasData(
                        new { Id = 1, Name = "Juan", Password = "pwd", SessionId = new Guid("d48cd89b-a7d9-4823-8cce-dddbe9b97356"), UserName = "juan89" },
                        new { Id = 2, Name = "Joe", Password = "pass", SessionId = new Guid("6f5ca935-11d3-4ee2-9b9c-d767f6da8ed8"), UserName = "joe123" }
                    );
                });

            modelBuilder.Entity("CityInfo.Contracts.Services.Entities.City", b =>
                {
                    b.HasOne("CityInfo.Contracts.Services.Entities.CityImage", "Image")
                        .WithMany()
                        .HasForeignKey("ImageId");
                });

            modelBuilder.Entity("CityInfo.Contracts.Services.Entities.PointOfInterest", b =>
                {
                    b.HasOne("CityInfo.Contracts.Services.Entities.City", "City")
                        .WithMany()
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("CityInfo.Contracts.Services.Entities.User", b =>
                {
                    b.HasOne("CityInfo.Contracts.Services.Entities.Session", "Session")
                        .WithMany()
                        .HasForeignKey("SessionId");
                });
#pragma warning restore 612, 618
        }
    }
}

using System.Collections.Generic;
using System.Linq;
using CityInfo.Contracts.DataAccess;
using CityInfo.Contracts.Services.Entities;
using Microsoft.EntityFrameworkCore;

namespace CityInfo.DataAccess
{
    public class CityStorage : ICityDataAccess
    {
        private readonly CityInfoContext context;

        public CityStorage(CityInfoContext context)
        {
            this.context = context;
        }
        public City Find(int cityId)
        {
            return this.context.Cities.FirstOrDefault(c => c.Id == cityId);
        }

        public IEnumerable<City> List()
        {
            return this.context.Cities.Include(c => c.PointsOfInterest);
        }

        public void Add(City city)
        {
            if (city.Id > 0)
            {
                this.context.Cities.Update(city);
            }
            else
            {
                this.context.Cities.Add(city);
            }

            this.context.SaveChanges();
        }
        
        public void Remove(int cityId)
        {
            this.context.Cities.Remove(new City() { Id = cityId });
            this.context.SaveChanges();
        }
    }
}

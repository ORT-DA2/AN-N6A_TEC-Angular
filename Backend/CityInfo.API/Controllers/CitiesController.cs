using CityInfo.API.Models;
using CityInfo.Contracts.DataAccess;
using CityInfo.Contracts.Services;
using Microsoft.AspNetCore.Mvc;

namespace CityInfo.API.Controllers
{
    [Route("api/cities")]  // [Route("api/[controller]")]
    public class CitiesController : BaseController
    {
        private readonly ICityService cityService;
        public CitiesController(ISessionRepository session, ICityService service) : base(session)
        {
            this.cityService = service;
        }


        [HttpGet()]
        public IActionResult GetCities([FromQuery] string name)
        {
            var result = this.ValidateToken("User");
            return result ?? Ok(this.cityService.GetCities(name));
        }


        // set proper status code when not found
        [HttpGet("{id}")]
        public IActionResult GetCity(int id)
        {
            var result = this.ValidateToken("User");
            if (result != null) return result;

            var cityMacth = this.cityService.GetCity(id);

            if (cityMacth == null)
            {
                return NotFound();
            }

            return Ok(cityMacth);
            // IActionResult allows us to return other format types, not only json
        }

        [HttpPost]
        public void Post([FromBody]CityDto dto)
        {
            var result = this.ValidateToken("Admin");
            if (result == null)
            {
                this.cityService.Save(new Contracts.Services.Entities.City { Name = dto.Name, Description = dto.Description });
            }

        }

        [HttpPut]
        public void Put([FromBody]CityDto dto)
        {
            var result = this.ValidateToken("Admin");
            if (result == null)
            {
                this.cityService.Save(new Contracts.Services.Entities.City { Id = dto.Id, Name = dto.Name, Description = dto.Description });
            }
        }

        [HttpDelete("{cityId}")]
        public void Delete(int cityId)
        {
            var result = this.ValidateToken("Admin");
            if (result == null)
            {
                this.cityService.Delete(cityId);
            }
        }

    }
}
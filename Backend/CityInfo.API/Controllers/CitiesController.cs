using CityInfo.API.Filters;
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
            return Ok(this.cityService.GetCities(name));
        }

       
        // set proper status code when not found
        [HttpGet("{id}")]
        public IActionResult GetCity(int id)
        {
            var cityMacth = this.cityService.GetCity(id);

            if (cityMacth == null)
            {
                return NotFound();
            }

            return Ok(cityMacth);
            // IActionResult allows us to return other format types, not only json
        }

        public void Post(CityDto dto)
        {
            this.ValidateToken("Admin");
            this.cityService.Save(new Contracts.Services.Entities.City { Name = dto.Name, Description = dto.Description });
        }

    }
}
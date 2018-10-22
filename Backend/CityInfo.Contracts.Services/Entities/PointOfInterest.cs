// using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

namespace CityInfo.Contracts.Services.Entities
{
    public class PointOfInterest
    {
        // TODO: Annotations, nuestro domino con depencencias a una implementacion de persistencia,
        // cosiderar separar domino de negocio, del modelo de entidades necesario para el ORM, comparar vs FluentAPI y/o follow conventions

        //[Key]
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)] // id will be genereted on add
        public int Id { get; set; }

        //[Required]
        public string Name { get; set; }

        public int CityId { get; set; }

        
        public string Description { get; set; }
    }
}

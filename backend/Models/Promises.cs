using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace backend.Models
{
    public class Promises
    {
        public int Id { get; set; }
        [Required]
        public string PromiseDescription { get; set; }
        [Required]
        public string DateMade { get; set; }
        [Required]
        public string PromisingParty { get; set; }
        [Required]
        public string PromisingIndividual { get; set; }
        [Required]
        public string PromiseStatus { get; set; }
        [Required]
        public string DeadLine { get; set; }
        [Required]
        public string RegionCountry { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public int Progress { get; set; }
        [Required]
        public string Notes { get; set; }
    }
}

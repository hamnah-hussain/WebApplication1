using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Project1.Models
{
    public class Diagnose
    {
        public int Id { get; set; }
        public string Navn { get; set; }
        //public string Description { get; set; }
        public virtual List<Symptom> Symptomer { get; set; }
    }
}

using Microsoft.AspNetCore.Mvc;
using Project1.Models;
using System.Collections.Generic;
using WebApplication1.Model;
using System.Linq;

namespace WebApplication1.Controllers
{
    [Route("[controller]/[action]")]
    public class BrukerController : ControllerBase
    {
        private readonly BrukerContext _database;

        public BrukerController(BrukerContext database)
        {
            _database = database;
        }

        public List<Bruker> HentAlle()
        {
            return _database.Brukere.ToList();

        }

        public bool Lagre(Bruker bruker)
        {
            try
            {
                _database.Brukere.Add(bruker);
                _database.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}

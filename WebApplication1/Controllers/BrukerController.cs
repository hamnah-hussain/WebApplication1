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

        public Bruker HentEn(int id)
        {
            try
            {
                return _database.Brukere.Find(id);
            } catch
            {
                return null;
            }
        }

        public bool Endre(Bruker bruker)
        {
            try
            {
                Bruker b = _database.Brukere.Find(bruker.Id);
                b.Alder = bruker.Alder;
                b.Gender = bruker.Gender;
                b.Diagnose = bruker.Diagnose;
                _database.SaveChanges();
                return true;
            } catch
            {
                return false;
            }

        }

        public bool Slett(int id)
        {
            try
            {
                Bruker enBruker = _database.Brukere.Find(id);
                _database.Remove(enBruker);
                _database.SaveChanges();
                return true;
            } catch
            {
                return false;
            }
        }
    }
}

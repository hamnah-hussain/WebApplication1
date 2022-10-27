using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project1.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Controllers
{
    [Route("[controller]/[action]")]
    public class DatabaseController : ControllerBase
    {
        private readonly DBContext _database;

        public DatabaseController(DBContext database)
        {
            _database = database;
        } 

        public List<Diagnose> HentAlle()
        {
            return _database.Diagnose.ToList();

        }
    }
}

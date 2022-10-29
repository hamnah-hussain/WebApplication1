using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace WebApplication1.Model
{
    public class BrukerContext : DbContext
    {
        public BrukerContext(DbContextOptions<BrukerContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public virtual DbSet<Bruker> Brukere { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }
    }
}

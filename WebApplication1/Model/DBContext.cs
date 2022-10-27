using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Project1.Models
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public virtual DbSet<Diagnose> Diagnose { get; set; }
        public virtual DbSet<Symptom> Symptom { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }
    }
}

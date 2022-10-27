using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace Project1.Models
{
    public class DBInit
    {
        public static void Init(IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.CreateScope();

            var context = serviceScope.ServiceProvider.GetService<DBContext>();

            context.Database.EnsureDeleted();
            context.Database.EnsureCreated();

            var json_text = File.ReadAllText("test.json");
            var data = JsonConvert.DeserializeObject<List<Diagnose>>(json_text);
            foreach (var item in data)
            {
                context.Diagnose.Add(item);
            }
            context.SaveChanges();
        }
    }
}

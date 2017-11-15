using inspire.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace inspire
{
    public class InspireContext : IdentityDbContext<User>
    {
        // DONT FORGET TO REGISTER YOUR MODELS TO THE DATABASE
        new DbSet<User> Users { get; set; }
        public DbSet<Todo> Todos { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=trever.database.windows.net;Database=Inspire;User ID=treverj1029;Password=100%Applejuice;Trusted_Connection=False;Encrypt=True");
            
        }
        // public InspireContext(DbContextOptions<InspireContext> options) : base(options)
        // {
        //     // Database.EnsureCreated();
        //     // Database.Migrate();
        // }
    }
}
// Server=keeprdb.database.windows.net;Database=tylersKeeps;User ID=rhinehart22;Password=100%AppleJuice;Trusted_Connection=False;Encrypt=True
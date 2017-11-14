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
            optionsBuilder.UseSqlite("Filename=./Inspire.db");
        }
        // public InspireContext(DbContextOptions<InspireContext> options) : base(options)
        // {
        //     // Database.EnsureCreated();
        //     // Database.Migrate();
        // }
    }
}
// Server=keeprdb.database.windows.net;Database=tylersKeeps;User ID=rhinehart22;Password=100%AppleJuice;Trusted_Connection=False;Encrypt=True
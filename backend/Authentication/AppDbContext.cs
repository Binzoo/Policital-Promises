using backend.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace backend.Authentication
{
    public class AppDbContext(DbContextOptions<AppDbContext> options, IConfiguration configuration) : IdentityDbContext<AppUser>(options)
    {

        public DbSet<Promises> Promises { get; set; }   


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseNpgsql(configuration.GetConnectionString("DefaultConnection"));
        }
    }
}
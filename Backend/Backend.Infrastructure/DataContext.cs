using Backend.Infrastructure.EntityConfigurations;

namespace Backend.Infrastructure
{
    public class DataContext(DbContextOptions options) : DbContext(options)
    { 
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
        }

    }
}

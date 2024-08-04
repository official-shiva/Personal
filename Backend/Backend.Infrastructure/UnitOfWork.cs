
namespace Backend.Infrastructure
{
    public class UnitOfWork(DataContext _dataContext): IUnitOfWork
    {
        public int SaveChanges()
        {
            return _dataContext.SaveChanges();
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _dataContext.SaveChangesAsync();
        }
    }
}

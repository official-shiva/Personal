namespace Backend.Infrastructure.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly DataContext _dataContext;

        public UserRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task AddAsync(User entity)
        {
            await _dataContext.Users.AddAsync(entity);
        }
    }
}

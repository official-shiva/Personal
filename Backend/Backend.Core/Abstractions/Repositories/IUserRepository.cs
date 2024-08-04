namespace Backend.Core.Abstractions.Repositories
{
    public interface IUserRepository
    {
        Task AddAsync(User entity);
    }
}

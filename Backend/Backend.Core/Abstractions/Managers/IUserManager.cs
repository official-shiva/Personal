using Backend.Core.Models.User;

namespace Backend.Core.Abstractions.Managers
{
    public interface IUserManager
    {
        Task AddAsync(UserModel model);
    }
}

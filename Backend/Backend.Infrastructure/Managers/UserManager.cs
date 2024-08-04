namespace Backend.Infrastructure.Managers
{
    public class UserManager: IUserManager
    {
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public UserManager(IUserRepository userRepository, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task AddAsync(UserModel model)
        {
            var currentDate = Utility.GetDateTime();

            var user = new User
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Email,
                Phone = model.Phone,
                Password = model.Password,
                Status = Constants.Status.Active,
                CreatedAt = currentDate,
                UpdatedAt = currentDate,
                EffectiveFrom = currentDate,
            };

            await _userRepository.AddAsync(user);
            await _unitOfWork.SaveChangesAsync();
        }
    }
}

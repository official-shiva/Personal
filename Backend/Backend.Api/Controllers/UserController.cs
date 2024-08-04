namespace Backend.Api.Controllers
{
    [Route("user")]
    [ApiController]
    public class UserController: BaseController
    {
        private readonly IUserManager _userManager;

        public UserController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync([FromBody] UserModel model)
        { 
            await _userManager.AddAsync(model);
            return Ok();
        }
    }
}

using GradesApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace GradesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private static readonly User HardcodedUser = new User { Username = "teacher", Password = "password" };

        [HttpPost]
        public ActionResult Login([FromBody] User user)
        {
            if (user.Username == HardcodedUser.Username && user.Password == HardcodedUser.Password)
            {
                return Ok();
            }
            return Unauthorized();
        }
    }
}

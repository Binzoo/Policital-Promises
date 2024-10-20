using backend.Authentication;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromisesController : ControllerBase
    {

        public AppDbContext _appDbContext { get; set; }  

        public PromisesController(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;   
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var allPromises = await _appDbContext.Promises.ToListAsync();
            return Ok(allPromises);
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Promises promises)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    Message = ModelState
                });
            }
            var addPromise = await _appDbContext.Promises.AddAsync(promises);
            await _appDbContext.SaveChangesAsync();
            return Ok(new 
            {
                Message = "Promise added Successfully."
            });
        }
    }
}

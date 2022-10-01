using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sera_job_portal_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sera_job_portal_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("addUser")]
        public IActionResult addUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(user) ;
        }

        [Authorize]
        [HttpGet]
        public IActionResult getUser()
        {
            var selectedData = User.Identity.Name;

            var data = _context.Users.ToList();
            return Ok(_context.Users.Where(e => e.UserId == Int32.Parse(selectedData)));
        }

        [HttpGet("getAllUser")]
        public IActionResult GetALlUser()
        {
            var data = _context.Users.ToList();
            return Ok(data);
        }

        [Authorize]
        [HttpPost("FindEmplyee")]
        public IActionResult FindEmployee(User user)
        {
            var employee = _context.Users.Where(e => e.FirstName == user.FirstName);
            return Ok(employee);
        }

        //[Authorize]
        [HttpPost("FindUserById")]
        public IActionResult FindUserById(User user)
        {
            var res = _context.Users.Where(e => e.UserId == user.UserId);
            return Ok(res);
        }

    }
}

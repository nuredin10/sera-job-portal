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
    [Authorize]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public MessageController(ApplicationDbContext context)
        {
            _context = context;
        }

       
        [HttpPost("GetAllChats")]
        public IActionResult GetAllChats(Message message)
        {
            var messages = _context.Messages.Where(e => e.UserId == message.UserId && e.ToUserId == message.ToUserId || e.UserId.ToString() == message.ToUserId && e.ToUserId == message.UserId.ToString());
            return Ok(messages);
        }

        [HttpGet("usersToChat")]
        public async Task<IActionResult> UsersToChat()
        {
            //var users =
            //    from m in _context.Messages
            //    join u in _context.Users on m.UserId equals u.UserId

            //    select new
            //    {
            //        u.FirstName,
            //    };
            var users = _context.Users.ToList();
            return Ok(users);
        }


    }
}

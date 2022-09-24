using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Sera_job_portal_api.Hubs;
using Sera_job_portal_api.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace Sera_job_portal_api.Controllers
{
    [Route("api/message")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        protected readonly IHubContext<MessageHub> _messageHub;
        private readonly ApplicationDbContext _context;
        public MessageController([NotNull] IHubContext<MessageHub> messageHub, ApplicationDbContext context)
        {
            _context = context;
            _messageHub = messageHub;
        }

        [HttpPost]
        public async Task<IActionResult> Create(Message message)
        {
            _context.Messages.Add(message);
            _context.SaveChanges();
            var chats = _context.Messages.ToList();
            await _messageHub.Clients.All.SendAsync("SendToReact", chats);
            return Ok();
        }

        //[HttpGet("getAllMessages")]
        //public async Task<IActionResult> GetMessages()
        //{
        //    var data = _context.Messages.ToList();

        //}
    }
}

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
        public MessageController([NotNull] IHubContext<MessageHub> messageHub)
        {
            _messageHub = messageHub;
        }
        [HttpPost ]
        public async Task<IActionResult> Create(Message message)
        {
            await _messageHub.Clients.All.SendAsync("SendToReact", "the message " + message.MessageText);
            return Ok();
        }
    }
}

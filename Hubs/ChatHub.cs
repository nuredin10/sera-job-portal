using Microsoft.AspNetCore.SignalR;
using Sera_job_portal_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sera_job_portal_api.Hubs
{
    public class ChatHub : Hub
    {
        private readonly ApplicationDbContext _context;
        
        public ChatHub(ApplicationDbContext context)
        {
            _context = context;
        }
        
        public async Task SendMessage(string message,DateTime time, string userId, string toUserId)
        {
            Message MessageToSend = new Message()
            { MessageText = message,
                    Time = time,
                    UserId = Int64.Parse(userId),
                    ToUserId = toUserId
            };

            await _context.Messages.AddAsync(MessageToSend);
            await _context.SaveChangesAsync();

            var messages = _context.Messages.Where(e => e.UserId.ToString() == userId && e.ToUserId == toUserId || e.UserId.ToString() == toUserId && e.ToUserId.ToString() == userId.ToString());
            await Clients.All.SendAsync("RecieveMessage", messages);
        }




    }
}

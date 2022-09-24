using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Sera_job_portal_api.Models
{
    public class Message
    {
        [Key]
        public long MessageId { get; set; }
        public string MessageText { get; set; }
        public DateTime Time { get; set; }
        public long UserId { get; set; }

        public virtual User User { get; set; }

    }
}

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
        public string MessageId { get; set; }
        public string MessageText { get; set; }
        
    }
}

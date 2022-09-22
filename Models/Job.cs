using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Sera_job_portal_api.Models
{
    public class Job
    {
        [Key]

        public int JobId { get; set; }

        [Required(ErrorMessage = "Title for your job is required")]
        public string JobTitle { get; set; }

        [Required(ErrorMessage = "price is required")]
        public long JobPrice { get; set; }

        [Required(ErrorMessage = "Description is required")]
        public string JobDescription { get; set; }

        [Required(ErrorMessage = "job Type is required is required")]
        public string JobType { get; set; }

        
        public string CompanyName { get; set; }
        public DateTime PostedDate { get; set; }
        public string Location { get; set; }
      
    }
}

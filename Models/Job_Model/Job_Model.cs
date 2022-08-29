using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace Sera_job_portal_api.Models.Job_Model
{
    public class Job_Model
    {
        [Key]
        public int JobId{ get; set; }
        [Required(ErrorMessage ="Job name is required")]
        [DisplayName("Job Name")]
        public string Job_name { get; set; }
        [Required(ErrorMessage = "Price is required")]
        [DisplayName("Price")]
        public long Price { get; set; }

        public int EmployerId { get; set; }

    }
}

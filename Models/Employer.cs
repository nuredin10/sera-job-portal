using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Sera_job_portal_api.Models
{
    public class Employer
    {
        [Key]
        public int EmployerID { get; set; }
        
        public string First_Name { get; set; }
       
        public string Middle_name { get; set; }
        
        public string Last_name { get; set; }
      
        public string Email { get; set; }

        public string Location {get;set;}
      
        public string CompanyName {get; set;}
      
        public string Password { get; set; }
        
        public string Address { get; set; }

        public string phone_Number { get; set; }
    }
}

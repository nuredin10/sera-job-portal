using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Sera_job_portal_api.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
        
        public string First_Name { get; set; }
        
        public string Middle_name { get; set; }
        
        public string Last_name { get; set; }
        
        public string Email { get; set; }
        
        public int Age { get; set; }
        
        public bool sex { get; set; }

        public string password { get; set; }
        public string address { get; set; }
        public string phone_Number { get; set; }

        public string educational_level { get; set; }
        public string Employee_information { get; set; }
        public int Rating { get; set; }
    }
}

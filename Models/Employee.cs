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
        
        public bool Sex { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string Phone_Number { get; set; }

        public string EducationalLevel { get; set; }
        public string Bio { get; set; }
        public int Rating { get; set; }
    }
}

using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Sera_job_portal_api.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
        [Required(ErrorMessage = "First name is required")]
        
        public string First_Name { get; set; }
        [Required(ErrorMessage = "Middle name is required")]
        
        public string Middle_name { get; set; }
        [Required(ErrorMessage = "Last name is required")]
        
        public string Last_name { get; set; }
        [Required(ErrorMessage = "Email is required")]
        
        public string Email { get; set; }
        [Required(ErrorMessage = "age is required")]
     
        public int age { get; set; }
        [Required(ErrorMessage = "sex is required")]
      
        public bool sex { get; set; }
        [Required(ErrorMessage = "sex is required")]
    
        public string password { get; set; }
        public string address { get; set; }

        [Required(ErrorMessage = "phone number is required")]
      
        public string phone_Number { get; set; }

        [Required(ErrorMessage = "Educational Level is required")]

        public string educational_level { get; set; }
        [Required(ErrorMessage = "You have to tell us some thing about our self ")]
    
        public string Bio { get; set; }
        [Required(ErrorMessage = "Rating is a must")]
        public string Experience  { get; set; }
        
        public int Rating { get; set; }
    }
}

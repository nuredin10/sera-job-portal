using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Sera_job_portal_api.Models
{
    public class Employer
    {
        [Key]
        public int EmployerID { get; set; }
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
        [Required(ErrorMessage = "Password is required")]
      
        public string password { get; set; }
        public string address { get; set; }

        [Required(ErrorMessage = "phone number is required")]
   
        public string phone_Number { get; set; }
    }
}

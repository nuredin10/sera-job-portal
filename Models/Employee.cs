using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Sera_job_portal_api.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
<<<<<<< HEAD
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
        
=======
        
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
>>>>>>> abc505de1d5e0f0fb2fbc78829f93b52512a8aaf
        public int Rating { get; set; }
    }
}

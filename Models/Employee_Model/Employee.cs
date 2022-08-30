using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Sera_job_portal_api.Models.Employee_Model
{
    public class Employee
    {
        [Key]
        public int EmployeeID { get; set; }
        [Required(ErrorMessage ="First name is required")]
        [DisplayName("First Name")]
        public string First_Name{ get; set; }
        [Required(ErrorMessage ="Middle name is required")]
        [DisplayName("Middle name")]
        public string Middle_name{ get; set; }
        [Required(ErrorMessage = "Last name is required")]
        [DisplayName("Last name")]
        public string Last_name { get; set; }
        [Required(ErrorMessage = "Email is required")]
        [DisplayName("Email")]
        public string Email { get; set; }
        [Required(ErrorMessage = "age is required")]
        [DisplayName("age")]
        public int age{ get; set; }
        [Required(ErrorMessage = "sex is required")]
        [DisplayName("sex")]
        public bool sex { get; set; }
        [Required(ErrorMessage = "sex is required")]
        [DisplayName("sex")]
        public string password { get; set; }
        public string address { get; set; }
        
        [Required(ErrorMessage = "phone number is required")]
        [DisplayName("Phone number")]
        public string phone_Number { get; set; }
        
        [Required(ErrorMessage = "Educational Level is required")]
        [DisplayName("Educational level")]
        public string educational_level { get; set; }
        [Required(ErrorMessage = "You have to tell us some thing about our self ")]
        [DisplayName("Tell us some thing about yourself ")]
        public string Employee_information { get; set; }
        [Required(ErrorMessage = "Rating is a must")]
        [DisplayName("Rate the service you have recieved from your employee")]
        public int Rating { get; set; }
    }
}

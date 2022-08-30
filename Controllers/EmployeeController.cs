using Microsoft.AspNetCore.Mvc;
using Sera_job_portal_api.Models.Employee_Model;

namespace Sera_job_portal_api.Controllers
{
    public class EmployeeController : Controller
        
    {
        public IEmployee_repository Er;
        public EmployeeController (IEmployee_repository _Er)
        {
            Er = _Er;
        }
        public IActionResult Index()
        {

            return View();
        }
    }
}

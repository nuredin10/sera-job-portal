using Microsoft.AspNetCore.Mvc;
using Sera_job_portal_api.Models.Employer_Model;

namespace Sera_job_portal_api.Controllers
{
    public class EmployerController : Controller
    {
        public IEmployer_Repository ERR;
        public EmployerController(IEmployer_Repository _ERR)
        {
               ERR= _ERR;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

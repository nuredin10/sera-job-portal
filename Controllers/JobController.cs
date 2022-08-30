using Microsoft.AspNetCore.Mvc;
using Sera_job_portal_api.Models.Job_Model;

namespace Sera_job_portal_api.Controllers
{
    public class JobController : Controller
    {
        public IJob_Repository JR;
        public JobController(IJob_Repository _Jr)
        {
            JR = _Jr;

        }
        public IActionResult Index()
        {
            return View();
        }
    }
}

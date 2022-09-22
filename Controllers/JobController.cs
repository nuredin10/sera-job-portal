using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sera_job_portal_api.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sera_job_portal_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public JobController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult getAllJobList()
        {
            var list = _context.Jobs.ToList();
            return Ok(list);
        }
    }
}

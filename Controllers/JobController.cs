using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sera_job_portal_api.Models;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sera_job_portal_api.Controllers
{
    [Authorize]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public JobController(ApplicationDbContext context)
        {
            _context = context;
            //its naod
        }

        [HttpGet]
        [Route("jobs/getAllJob")]
        public IActionResult getAllJobList()
        {
            var list = _context.Jobs.ToList();
            return Ok(list);
        }


        [Route("jobs/postJob")]
        [HttpPost]
        public IActionResult postJob(Job job)
        {
            _context.Jobs.Add(job);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPost("findJob")]
        public IActionResult FindJOb(Job job)
        {
            var jobs = _context.Jobs.Where(e => e.JobTitle == job.JobTitle);
            return Ok(jobs);
        }

        
    }
}

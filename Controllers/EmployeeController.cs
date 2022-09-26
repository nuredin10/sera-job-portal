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
    public class EmployeeController : Controller
        
    {
        private readonly ApplicationDbContext _context;
        public EmployeeController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllEmployee")]
        public IActionResult getAllEmployee()
        {
            var list = _context.Employees.ToList();
            return Ok(list);
        }

        [HttpPost("RegisterEmployee")]
        public IActionResult RegisterEmployee( Employee employee)
        {
            _context.Employees.Add(employee);
            _context.SaveChanges();
            return Ok();
        }
    }
}

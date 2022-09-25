﻿using Microsoft.AspNetCore.Authorization;
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
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("addUser")]
        public IActionResult addUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok() ;
        }

        [Authorize]
        [HttpGet]
        public IActionResult getUser()
        {
            var selectedData = User.Identity.Name;

            var data = _context.Users.ToList();
            return Ok(_context.Users.Where(e => e.UserId == Int32.Parse(selectedData)));
        }
        [Authorize]
        [HttpDelete]
        public IActionResult removeUser(User user)
        {

            _context.Jobs.Remove(_context.Jobs.Find(user));
            _context.SaveChanges();
            return Ok();

        }
    }
}
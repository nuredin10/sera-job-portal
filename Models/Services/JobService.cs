using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Sera_job_portal_api.Models.Services
{
    public class JobService : IJobService
    {
        private readonly ApplicationDbContext _context;
        public JobService(ApplicationDbContext context)
        {
            _context = context;
        }
        public void addJob(JobService job)
        {
            throw new NotImplementedException();
        }

        public void deleteJob(long id)
        {
            throw new NotImplementedException();
        }

        public List<Job> getAllJobs()
        {
            var jobList = _context.Jobs.ToList();
            return jobList;
        }

        public JobService getJobById(long id)
        {
            throw new NotImplementedException();
        }

        public JobService updateJob(JobService job)
        {
            throw new NotImplementedException();
        }

        void IJobService.addJob(JobService job)
        {
            throw new NotImplementedException();
        }

        void IJobService.deleteJob(long id)
        {
            throw new NotImplementedException();
        }

        List<JobService> IJobService.getAllJobs()
        {
            throw new NotImplementedException();
        }

        JobService IJobService.getJobById(long id)
        {
            throw new NotImplementedException();
        }

        JobService IJobService.updateJob(JobService job)
        {
            throw new NotImplementedException();
        }
    }
}

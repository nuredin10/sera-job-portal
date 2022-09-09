using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sera_job_portal_api.Models.Services
{
    public interface IJobService
    {
        public List<JobService> getAllJobs();
        public JobService getJobById(long id);
        public void addJob(JobService job);
        public JobService updateJob(JobService job);
        public void deleteJob(long id);
    }
}

using Core.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Model;
using Core.Interfaces;

namespace Core.Services
{
    public class StudentService : IStudentService
    {
        protected readonly IRepository<Student> _studentRepository;

        public StudentService(IRepository<Student> studentRepository)
        {
            _studentRepository = studentRepository;
        }
        public ICollection<Student> GetBestStudents(int count)
        {
            throw new NotImplementedException();
        }

        public Student GetStudentById(int id)
        {
            throw new NotImplementedException();
        }
    }
}

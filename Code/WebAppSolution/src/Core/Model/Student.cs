using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Model
{
    public class Student : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public int GroupId { get; set; }
        public virtual Group Group { get; set; }
    }
}

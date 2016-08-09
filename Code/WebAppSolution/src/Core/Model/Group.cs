﻿using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Model
{
    public class Group:IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Student> Students{ get; set; }
    }
}

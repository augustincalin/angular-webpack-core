using Core.Interfaces.Services;
using Core.Model;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Controllers;
using Xunit;

namespace WebAppTest
{
    public class Class1
    {
        public object ValueController { get; private set; }

        [Fact]
        public void PassingTest()
        {
            Assert.Equal(4, 4);
        }
        [Fact]
        public void TestController()
        {
            Mock<IStudentService> studentServiceMock = new Mock<IStudentService>();
            studentServiceMock.Setup(x => x.GetStudentById(It.IsAny<int>())).Returns(new Student { Id = 123, Name = "John" });
            StudentController controller = new StudentController(studentServiceMock.Object);
            string result = controller.Index();
            string expected = "John";
            Assert.Equal(result, expected);
        }

    }
}

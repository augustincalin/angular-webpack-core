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
            ValueController controller = new ValueController();
            string result = controller.Index();
            string expected = "123";
            Assert.Equal(result, expected);
        }

    }
}

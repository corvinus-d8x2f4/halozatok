using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HajosTeszt.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
    //Commentbe vele!
    //[Route("api/[controller]")]
    [ApiController]
    public class TesztController2 : ControllerBase
    {
    }
}
public class TesztController : ControllerBase
{
    [HttpGet]
    [Route("corvinus/szerverido")]
    public IActionResult M1()
    {
        string pontosIdő = DateTime.Now.ToShortTimeString();

        return new ContentResult
        {
            ContentType = System.Net.Mime.MediaTypeNames.Text.Plain, //"text/plain"
            Content = pontosIdő
        };
    }
}


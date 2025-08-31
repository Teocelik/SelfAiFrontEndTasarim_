using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SelfAiFrontEndTasarımı.Models;

namespace SelfAiFrontEndTasarımı.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GenerateImagee(MediaGenerationRequestDto dto)
        {
            return View();
        }

        public IActionResult ai_image_generation_studio()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

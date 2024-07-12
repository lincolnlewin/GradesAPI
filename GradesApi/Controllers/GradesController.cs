using Microsoft.AspNetCore.Mvc;
using GradesApi.Interfaces;
using GradesApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GradesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradesController : ControllerBase
    {
        private readonly IGradeService _gradeService;

        public GradesController(IGradeService gradeService)
        {
            _gradeService = gradeService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Grade>>> GetGrades()
        {
            var grades = await _gradeService.GetGradesAsync();
            return Ok(grades);
        }

        [HttpPost]
        public async Task<ActionResult> AddGrade([FromBody] Grade grade)
        {
            await _gradeService.AddGradeAsync(grade);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteGrade(int id)
        {
            await _gradeService.DeleteGradeAsync(id);
            return Ok();
        }
    }
}

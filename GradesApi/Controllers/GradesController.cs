using GradesApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace GradesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradesController : ControllerBase
    {
        private static List<Grade> Grades = new List<Grade>();

        [HttpGet]
        public ActionResult<IEnumerable<Grade>> GetGrades()
        {
            return Ok(Grades);
        }

        [HttpPost]
        public ActionResult AddGrade([FromBody] Grade grade)
        {
            grade.Id = Grades.Count + 1;
            Grades.Add(grade);
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteGrade(int id)
        {
            var grade = Grades.FirstOrDefault(g => g.Id == id);
            if (grade == null)
            {
                return NotFound();
            }
            Grades.Remove(grade);
            return Ok();
        }
    }
}


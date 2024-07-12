using GradesApi.Interfaces;
using GradesApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GradesApi.Repositories
{
    public class GradeRepository : IGradeRepository
    {
        private readonly List<Grade> _grades = new List<Grade>();

        public async Task<IEnumerable<Grade>> GetGradesAsync()
        {
            return await Task.FromResult(_grades);
        }

        public async Task AddGradeAsync(Grade grade)
        {
            grade.Id = _grades.Count + 1;
            _grades.Add(grade);
            await Task.CompletedTask;
        }

        public async Task DeleteGradeAsync(int id)
        {
            var grade = _grades.FirstOrDefault(g => g.Id == id);
            if (grade != null)
            {
                _grades.Remove(grade);
            }
            await Task.CompletedTask;
        }
    }
}

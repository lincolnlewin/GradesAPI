using GradesApi.Interfaces;
using GradesApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GradesApi.Services
{
    public class GradeService : IGradeService
    {
        private readonly IGradeRepository _gradeRepository;

        public GradeService(IGradeRepository gradeRepository)
        {
            _gradeRepository = gradeRepository;
        }

        public async Task<IEnumerable<Grade>> GetGradesAsync()
        {
            return await _gradeRepository.GetGradesAsync();
        }

        public async Task AddGradeAsync(Grade grade)
        {
            await _gradeRepository.AddGradeAsync(grade);
        }

        public async Task DeleteGradeAsync(int id)
        {
            await _gradeRepository.DeleteGradeAsync(id);
        }
    }
}

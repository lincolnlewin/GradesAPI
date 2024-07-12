using GradesApi.Models;

namespace GradesApi.Interfaces
{
    public interface IGradeRepository
    {
        Task<IEnumerable<Grade>> GetGradesAsync();
        Task AddGradeAsync(Grade grade);
        Task DeleteGradeAsync(int id);
    }
}

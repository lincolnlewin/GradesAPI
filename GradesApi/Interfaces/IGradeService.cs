using GradesApi.Models;

namespace GradesApi.Interfaces
{
    public interface IGradeService
    {
        Task<IEnumerable<Grade>> GetGradesAsync();
        Task AddGradeAsync(Grade grade);
        Task DeleteGradeAsync(int id);
    }
}

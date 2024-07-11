namespace GradesApi.Models
{
    public class Grade
    {
        public int Id { get; set; }
        public string? StudentName { get; set; }
        public string? CourseName { get; set; }
        public int GradeValue { get; set; }
    }
}

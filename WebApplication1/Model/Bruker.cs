namespace WebApplication1.Model
{
    public class Bruker
    {
        public int Id { get; set; }  // med Id som variabel blir dette en autoincrement i databasen (pr. default).
        public string Alder { get; set; }
        public string Gender { get; set; }
        public string Diagnose { get; set; }
    }
}

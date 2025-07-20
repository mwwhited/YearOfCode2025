namespace DataToBinary
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var path = @"C:\Repos\mwwhited\DeviceBridge\";
            foreach (var file in Directory.EnumerateFiles(path, "*.csv"))
            {
                //var file = @"C:\Repos\mwwhited\DeviceBridge\BusDatav2.csv";
                var lines = File.ReadAllLines(file);
                var bytes = lines.Skip(6).Select(l => byte.Parse(l.Split(",").Last())).ToArray();
                var outFile = Path.ChangeExtension(file, ".bin");
                File.WriteAllBytes(outFile, bytes);
            }
        }
    }
}

using HandlebarsDotNet;
using System;
using System.IO;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace SwaggerClientBuilder.Cli
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            var swaggerFile = "swagger.json";

            if (!File.Exists(swaggerFile))
            {
                Console.WriteLine("Download swagger.json");
                using var client = new HttpClient()
                {
                    BaseAddress = new Uri("https://localhost:7443")
                };
                var response = await client.GetAsync("/swagger/all/swagger.json");
                var content = await response.Content.ReadAsStringAsync();
                await File.WriteAllTextAsync(swaggerFile, content);
            }

            var jsonText = await File.ReadAllTextAsync(swaggerFile);
            var json = JsonDocument.Parse(jsonText);

            //var template = 
            //Handlebars.Compile()


            Console.WriteLine("Hello, World!");
        }
    }
}

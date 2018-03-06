using System;
using System.IO;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                .AddCommandLine(args)
                .AddEnvironmentVariables("ASPNETCORE_")
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("certificate.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"certificate.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true, reloadOnChange: true)
                .Build();


            var certificateSettings = config.GetSection("certificateSettings");
            string certificateFileName = certificateSettings.GetValue<string>("filename");
            string certificatePassword = certificateSettings.GetValue<string>("password");

            var certificate = new X509Certificate2(certificateFileName, certificatePassword);


            var host = new WebHostBuilder()
                .UseConfiguration(config)
                .UseUrls(new string[] { "https://localhost:5050" })
                .UseKestrel(options =>
                {
                    options.AddServerHeader = false;
                    options.Listen(IPAddress.Loopback, 5050, listenOptions =>
                    {
                        listenOptions.UseHttps(certificate);
                    });
                })
                  .UseConfiguration(config)            
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
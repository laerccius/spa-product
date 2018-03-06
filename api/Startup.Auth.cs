using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using api.CustomTokenProvider;

namespace api
{
    public partial class Startup
    {
        private readonly SymmetricSecurityKey _signingKey;

        private readonly TokenValidationParameters _tokenValidationParameters;

        private readonly TokenProviderOptions _tokenProviderOptions;

        private void ConfigureAuth(IServiceCollection services)
        {
             string l =this.Configuration.GetSection("TokenAuthentication:CookieName").Value;
            services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options => { options.TokenValidationParameters = _tokenValidationParameters; })
                .AddCookie(options =>
                {
                    options.Cookie.Name = this.Configuration.GetSection("TokenAuthentication:CookieName").Value;
                    options.TicketDataFormat = new CustomJwtDataFormat(
                        SecurityAlgorithms.HmacSha256,
                        _tokenValidationParameters);
                });
                
        }

        private Task<ClaimsIdentity> GetIdentity(string username, string password)
        {
            // Don't do this in production, obviously!
            if (username == "test" && password == "test")
            {
                return Task.FromResult(new ClaimsIdentity(new GenericIdentity(username, "Token"), new Claim[] { }));
            }

            // Credentials are invalid, or account doesn't exist
            return Task.FromResult<ClaimsIdentity>(null);
        }
    }

}
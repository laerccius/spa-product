﻿using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace api.CustomTokenProvider
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseTokenProvider(
            this IApplicationBuilder builder, TokenProviderOptions parameters)
        {
            return builder.UseMiddleware<TokenProviderMiddleware>(Options.Create(parameters));
        }
    }
}
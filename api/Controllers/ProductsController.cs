using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using api.MongoDB;

namespace api.Controllers
{
    [Route("api/[controller]")]
     [Authorize]
    public class ProductsController : Controller
    {
        private Context _context;

        public ProductsController(Context context)
        {
            this._context = context;
        }


        // GET api/values
        [HttpGet]
        [Authorize]
        public IEnumerable<ProductModel> Get()
        {
            return this._context.ListProducts();
        }
    }
}

using System.Linq;
using MongoDB.Driver;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

using api.Models;

namespace api.MongoDB
{
    public class Context
    {
        private IConfiguration _configuration;

        public Context(IConfiguration config)
        {
            _configuration = config;
        }

        public List<ProductModel> ListProducts()
        {
            MongoClient client = new MongoClient("mongodb://localhost:27017");
            client.GetDatabase("DBProducts");
            IMongoDatabase db = client.GetDatabase("DBProducts");

            List<ProductModel> products = db.GetCollection<ProductModel>("products")
                .Find(_ => true).ToList();

            if (products.Count <= 0)
            {
                InsertProducts(db);
                products = db.GetCollection<ProductModel>("products")
                .Find(_ => true).ToList();
            }
            return products;
        }

        public void InsertProducts(IMongoDatabase db)
        {
            db.CreateCollection("products");
            var col = db.GetCollection<ProductModel>("products");
            col.InsertMany(new List<ProductModel>(){
                new ProductModel(){name="teste 1",quantity = 1,value=1.1M}
             ,new ProductModel(){name="teste 2",quantity = 1,value=1.1M}
            ,new ProductModel(){name="teste 3",quantity = 1,value=1.1M}
            }.ToArray());
        }

    }
}
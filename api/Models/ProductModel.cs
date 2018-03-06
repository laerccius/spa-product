using MongoDB.Bson;

namespace api.Models
{
    public class ProductModel
    {
        
        public ObjectId _id { get; set; }
        public string name { get; set; }
        public int quantity { get; set; }
        public decimal value { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using inspire.Models;

namespace inspire.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        public InspireContext _db { get; private set; }
        public UsersController(InspireContext db)
        {
            _db = db;
        }
      
        [HttpGet("{userId}")]
        public IEnumerable<Todo> Get(string userId)
        {
            return _db.Todos.Where(t => t.UserId.Contains(userId)).ToList();
        }

       [HttpPut("{userId}/todos/{id}")]
        public Todo Put(string id)
        {
            var toChange = _db.Todos.Find(id);
            toChange.Completed = !toChange.Completed;
            _db.SaveChanges();
            return toChange;
        }
    }
}

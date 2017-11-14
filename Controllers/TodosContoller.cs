using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using inspire.Models;

namespace inspire.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        public InspireContext _db { get; private set; }
        public TodosController(InspireContext db)
        {
            _db = db;
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return _db.Todos;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Todo Get(string id)
        {
            return _db.Todos.Find(id);
        }
        // [HttpGet("{userId}")]
        // public IEnumerable<Todo> Get(string userId)
        // {
        //     return _db.Todos.Where(t => t.UserId.Contains(userId)).ToList();
        // }

        // POST api/values
        [HttpPost]
        public IEnumerable<Todo> Post([FromBody]Todo todo)
        {
            _db.Todos.Add(todo);
            _db.SaveChanges();
            return _db.Todos.Where(t => t.UserId.Contains(todo.UserId)).ToList();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public Todo Put(string id)
        {
            var toChange = _db.Todos.Find(id);
            toChange.Completed = !toChange.Completed;
            _db.SaveChanges();
            return toChange;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public string Delete(string id)
        {
            _db.Remove(_db.Todos.Find(id));
            _db.SaveChanges();
            return "Item Deleted";
        }
    }
}

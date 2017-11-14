using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace inspire.Models
{
    public class Todo
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Completed {get; set;}
        
        [Required]
        public string UserId { get; set; }
    }
}
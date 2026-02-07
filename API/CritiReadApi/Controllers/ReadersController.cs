using CritiReadApi.Data;
using CritiReadApi.Models;
using CritiReadApi.Models.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace CritiReadApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReadersController : ControllerBase
    {
        private readonly CritiReadDbContext dbContext; // readonly means it is immutable

        // constructor injection - dependecy injection, handles an instance of the dbContext class
        public ReadersController(CritiReadDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // writing endpoint of the database
        [HttpGet]
        public IActionResult GetAllReaders() // getting all the Readers - interface method
        {
            var Readers = dbContext.Readers.ToList(); // gettin the list of Readers and making them a list

            return Ok(Readers); // okay response (200) and returns the Readers
        }

        [HttpPost]
        public IActionResult AddContact(AddReaderRequestDTO request)
        {
            // mapping request from DTO to the domain model of type contact
            var domainModelContact = new Reader
            {
                ReaderID = Guid.NewGuid(), // creates a new unique ID automatically - built in func
                Name = request.Name,
                Email = request.Email,

            };

            dbContext.Readers.Add(domainModelContact);// adding the new Contact to the Readers colection found in DbContext
            dbContext.SaveChanges(); // saving is required as it pushes the contact after it has been added - think of commit and push in Git

            return Ok(domainModelContact);
        }

        [HttpDelete]
        [Route("{id:Guid}")] // getting the id (type Guid) identifier from the route 
        public IActionResult DeleteContact(Guid id)
        {
            var contact = dbContext.Readers.Find(id); // finding to see if the contact exists

            if (contact != null)
            {
                dbContext.Readers.Remove(contact);
                dbContext.SaveChanges();
            }

            return Ok();
        }
    }
}
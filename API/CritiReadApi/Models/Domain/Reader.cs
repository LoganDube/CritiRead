using System;

namespace CritiReadApi.Models.Domain;

public class Reader
{
    public Guid ReaderID { get; set; } // unique id of contact
    public required string Name { get; set; } // name of contact
    public required string Email { get; set; } // email of contact - question mark means [optional], null or string type - opposite of required

}
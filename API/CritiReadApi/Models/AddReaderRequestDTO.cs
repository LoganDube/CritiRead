// DTO = a data transfer object, this means it carries data between processes - from webapp with specified values to Context

using System;

namespace CritiReadApi.Models;

public class AddReaderRequestDTO
{
    // id not included as it will already be made;
    public required string Name { get; set; } // name of contact
    public required string Email { get; set; } // email of contact - question mark means [optional], null or string type - opposite of required

}
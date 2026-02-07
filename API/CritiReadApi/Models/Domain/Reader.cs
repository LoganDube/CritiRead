using System;

namespace CritiReadApi.Models.Domain;

public class Reader
{
    public Guid ReaderID { get; set; } // unique id of contact
    public required string Name { get; set; } // name of contact
    public required string Email { get; set; } // email of contact

    // Represents the Foreign Key relationship
    public List<Review>? Reviews { get; set; } = new();
}
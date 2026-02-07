using System;

namespace CritiReadApi.Models.Domain;

public class Author
{
    public required Guid AuthorID { get; set; }
    public required string name { get; set; }
    public string? description { get; set; }

    // Represents the Foreign Key relationship
    public List<Book>? Books { get; set; } = new();
}

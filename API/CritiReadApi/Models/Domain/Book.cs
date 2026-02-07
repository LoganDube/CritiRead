using System;

namespace CritiReadApi.Models.Domain;

public class Book
{
    public required Guid BookID { get; set; }
    public required Guid AuthorID { get; set; }

    public required string Title { get; set; }

    public string? Desc { get; set; }

    public string? Genre { get; set; }

    // Represents the Foreign Key relationship
    public List<Review>? Reviews { get; set; } = new();
}

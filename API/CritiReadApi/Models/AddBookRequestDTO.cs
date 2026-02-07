using System;
using CritiReadApi.Models.Domain;

namespace CritiReadApi.Models;



public class AddBookRequestDTO
{
    // public required Guid AuthorID { get; set; }

    public required string Title { get; set; }

    public string? Desc { get; set; }

    public string? Genre { get; set; }

    // Represents the Foreign Key relationship
    public List<Review>? Reviews { get; set; } = new();
}

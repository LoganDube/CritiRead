// DTO = a data transfer object, this means it carries data between processes - from webapp with specified values to Context

using System;
using CritiReadApi.Models.Domain;

namespace CritiReadApi.Models;

public class AddAuthorRequestDTO
{

    public required string name { get; set; }
    public string? description { get; set; }

    // Represents the Foreign Key relationship
    public List<Book>? Books { get; set; } = new();

}
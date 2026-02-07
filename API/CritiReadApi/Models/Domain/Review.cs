using System;

namespace CritiReadApi.Models.Domain;

public class Review
{
    public required Guid ReviewID { get; set; }

    public required Guid ReaderID { get; set; }

    public required Guid BookID { get; set; }

    public required float Rating { get; set; }

    public string? Desc { get; set; }
}

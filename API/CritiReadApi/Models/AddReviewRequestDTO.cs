using System;

namespace CritiReadApi.Models;

public class AddReviewRequestDTO
{
    // public required Guid ReaderID { get; set; }

    // public required Guid BookID { get; set; }

    public required float Rating { get; set; }

    public string? Desc { get; set; }

}

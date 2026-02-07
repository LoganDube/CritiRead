using System;
using CritiReadApi.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace CritiReadApi.Data;

public class CritiReadDbContext : DbContext
{

    public CritiReadDbContext(DbContextOptions options) : base(options)
    {

    }

    // each property represents a table, creating a new property of DbContext class creates a new table
    public DbSet<Reader> Readers { get; set; }
    public DbSet<Author> Authors { get; set; }
    public DbSet<Book> Books { get; set; }
    public DbSet<Review> Reviews { get; set; }


}